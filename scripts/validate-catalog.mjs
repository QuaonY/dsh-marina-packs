#!/usr/bin/env node
// 校验 index.json 与 packs/ 目录的一致性。
//
// 用法：node scripts/validate-catalog.mjs
// 在仓库根目录运行。

import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const errors = [];
const fail = (message) => errors.push(message);

// 有些 Windows 编辑器会写入 UTF-8 BOM，JSON.parse 会直接报错
const readJson = (path) => JSON.parse(readFileSync(path, "utf8").replace(/^\uFEFF/, ""));

const indexPath = join(root, "index.json");
if (!existsSync(indexPath)) {
  console.error("❌ 找不到 index.json");
  process.exit(1);
}

let document;
try {
  document = readJson(indexPath);
} catch (error) {
  console.error(`❌ index.json 不是合法 JSON: ${error.message}`);
  process.exit(1);
}

if (document.version !== 1) {
  fail(`index.json 的 version 必须为 1（当前：${JSON.stringify(document.version)}）`);
}
if (!Array.isArray(document.packs)) {
  console.error("❌ index.json 缺少 packs 数组");
  process.exit(1);
}

const ids = new Set();
for (const [index, entry] of document.packs.entries()) {
  const where = `packs[${index}]`;
  const raw = JSON.stringify(entry);

  if (entry === null || typeof entry !== "object" || Array.isArray(entry)) {
    fail(`${where} 必须是对象：${raw}`);
    continue;
  }

  const id = typeof entry.id === "string" ? entry.id : "";
  if (!/^[A-Za-z0-9._-]{1,64}$/.test(id) || id.startsWith(".")) {
    fail(`${where}.id 不合法（只能包含字母、数字、-、_、.，且不超过 64 位）：${raw}`);
  } else if (ids.has(id)) {
    fail(`${where}.id 重复：${id}`);
  } else {
    ids.add(id);
  }

  for (const field of ["name", "author", "description"]) {
    if (typeof entry[field] !== "string" || entry[field].trim() === "") {
      fail(`${where}.${field} 不能为空`);
    }
  }
  if (typeof entry.url !== "string" || !/^https:\/\//.test(entry.url)) {
    fail(`${where}.url 必须是 https:// 地址`);
  }
  if (typeof entry.sha256 !== "string" || !/^[0-9a-fA-F]{64}$/.test(entry.sha256)) {
    fail(`${where}.sha256 必须是 64 位十六进制`);
  }
  if (!Number.isInteger(entry.size) || entry.size <= 0) {
    fail(`${where}.size 必须是正整数`);
  }
  if (entry.plugins !== undefined && !Array.isArray(entry.plugins)) {
    fail(`${where}.plugins 必须是数组`);
  }

  if (!id) continue;

  const packDir = join(root, "packs", id);
  if (!existsSync(packDir)) {
    fail(`${where}: 找不到目录 packs/${id}/`);
    continue;
  }
  if (!existsSync(join(packDir, "pack.json"))) {
    fail(`${where}: 缺少 packs/${id}/pack.json`);
  }
  if (!existsSync(join(packDir, "README.md"))) {
    fail(`${where}: 缺少 packs/${id}/README.md`);
  }

  const manifestPath = join(packDir, "pack.json");
  if (!existsSync(manifestPath)) continue;

  let manifest;
  try {
    manifest = readJson(manifestPath);
  } catch (error) {
    fail(`${where}: packs/${id}/pack.json 不是合法 JSON: ${error.message}`);
    continue;
  }

  const metadata = manifest.metadata ?? {};
  if (metadata.download_url !== undefined && metadata.download_url !== entry.url) {
    fail(`${where}: pack.json 的 metadata.download_url 与 index.json 的 url 不一致`);
  }
  if (metadata.size !== undefined && metadata.size !== entry.size) {
    fail(`${where}: pack.json 的 metadata.size 与 index.json 的 size 不一致`);
  }
  if (
    metadata.sha256 !== undefined &&
    String(metadata.sha256).toLowerCase() !== entry.sha256.toLowerCase()
  ) {
    fail(`${where}: pack.json 的 metadata.sha256 与 index.json 的 sha256 不一致`);
  }
}

// 所有真实整合包目录都必须登记到 index.json；示例和以下划线开头的目录除外。
const packsRoot = join(root, "packs");
if (existsSync(packsRoot)) {
  for (const name of readdirSync(packsRoot)) {
    const directory = join(packsRoot, name);
    if (!statSync(directory).isDirectory()) continue;
    if (name.startsWith("example-") || name.startsWith("_") || name.startsWith(".")) continue;
    if (!ids.has(name)) {
      fail(`packs/${name}/ 没有登记到 index.json`);
    }
  }

  // 敏感数据和本机路径扫描（只扫文本文件）
  const textExtensions = [".json", ".md", ".txt", ".yml", ".yaml"];
  const secretPattern =
    /(api[_-]?key|access[_-]?token|client[_-]?secret|secret[_-]?key|password|bearer)\s*["']?\s*[:=]\s*["'][A-Za-z0-9_./+-]{20,}/i;
  const absolutePathPattern = /(?:[A-Za-z]:\\|\/Users\/|\/home\/)/;

  const scan = (directory, relative) => {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const full = join(directory, entry.name);
      const shown = `${relative}/${entry.name}`;
      if (entry.isDirectory()) {
        scan(full, shown);
        continue;
      }
      if (!textExtensions.some((extension) => entry.name.toLowerCase().endsWith(extension))) continue;

      const content = readFileSync(full, "utf8").replace(/^\uFEFF/, "");
      const secret = content.match(secretPattern);
      if (secret) {
        fail(`${shown}: 可能包含敏感数据（${secret[1]}）`);
      }
      if (absolutePathPattern.test(content)) {
        fail(`${shown}: 包含本机绝对路径（请改用相对路径或 https 地址）`);
      }
    }
  };

  for (const name of readdirSync(packsRoot)) {
    const directory = join(packsRoot, name);
    if (!statSync(directory).isDirectory()) continue;
    if (name.startsWith("example-") || name.startsWith("_") || name.startsWith(".")) continue;
    scan(directory, `packs/${name}`);

    if (!existsSync(join(directory, "preview.png")) && !existsSync(join(directory, "preview.jpg"))) {
      console.warn(`⚠️  packs/${name}/ 没有 preview.png / preview.jpg（非阻断）`);
    }
  }
}

if (errors.length > 0) {
  console.error(`❌ 社区目录校验失败（${errors.length} 项）：`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

console.log(`✅ index.json 校验通过：${document.packs.length} 个整合包，目录与元数据一致`);
