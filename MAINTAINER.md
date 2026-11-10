# 🛠️ 维护者手册

本仓库是 **元数据索引** 仓库：只保存 `index.json` 与 `packs/<slug>/`，整合包 `.zip` 由作者托管在自己的 GitHub Release（`<username>/dsh-marina-shared-packs`）。

## 目录结构

```text
index.json                     # App 读取的整合包目录
schema.json                    # packs/<slug>/pack.json 的 JSON Schema
scripts/validate-catalog.mjs   # index.json 与 packs/ 一致性校验（CI 调用）
packs/<slug>/pack.json         # 整合包元数据（必需）
packs/<slug>/README.md         # 使用说明（必需）
packs/example-minimal/         # 模板示例，CI 跳过
```

## 分支保护与必需检查

- 默认分支：`master`
- 必需检查：**`Validate pack.json`**（即 workflow 中 job 的 `name`，分支保护按这个名字匹配）
- 不要重命名 job 的 `name`，否则所有 PR 会卡在 pending

如果以后调整了校验逻辑，务必保留 job 名 `Validate pack.json`，或同步更新分支保护设置。

## 校验工作流做了什么

`.github/workflows/validate.yml` 在 PR 和推送到 `master` 时运行（只监听 `packs/**`、`index.json`、`schema.json`、`scripts/**`）：

1. `node scripts/validate-catalog.mjs`
   - `index.json` 结构合法、`version === 1`
   - 每个条目字段合法（`id` / `name` / `author` / `description` / `url` / `size` / `sha256`）
   - `id` 唯一且与 `packs/<id>/` 目录一致
   - 每条目录都有 `pack.json` 和 `README.md`
   - 每个真实整合包目录都登记进了 `index.json`
   - `pack.json` 的 `metadata.download_url` / `size` / `sha256` 若填写，必须与 `index.json` 一致
2. 用 `ajv-cli` 按 `schema.json` 校验所有 `packs/*/pack.json`（跳过 `example-*`、`_*`、`.` 开头）
3. 检查每个整合包目录都有 `README.md`
4. 扫描敏感数据（API Key / Token / 密码）与本机绝对路径

本地运行：

```bash
node scripts/validate-catalog.mjs
npm install -g ajv-cli@5
ajv validate -s schema.json -d "packs/*/pack.json" --strict=false
```

## PR 与自动合并

Marina 的「分享到社区」会自动创建 PR，典型内容：

```text
index.json                        # 新增一条
packs/<slug>/pack.json            # 新文件
packs/<slug>/README.md            # 新文件
```

这类 PR **校验通过后会自动合并**（`.github/workflows/auto-merge.yml`），无需人工操作。

自动合并的安全边界：

- 由 `workflow_run` 触发（`Validate Pack` 成功后才运行），因此能在 fork PR 上拿到写权限
- 全程不 checkout PR 代码，只通过 API 读文件名，不执行任何来自 PR 的内容
- 只合并改动文件全部匹配 `index.json` 或 `packs/<slug>/{pack.json,README.md}` 的 PR，且文件数 ≤ 20
- 草稿 PR、目标分支不是 `master` 的 PR 不合并
- 带 `hold` 或 `do-not-merge` 标签的 PR 不合并（需要人工复核时先加标签）

日常仍然值得抽查已合并的 PR：

1. `Validate pack.json` 检查通过
2. `index.json` 条目的 `url` 能公开下载，`size` / `sha256` 与实际文件一致
3. 描述清晰、无敏感数据、无本机绝对路径
4. slug 合理（英文小写短横线）
5. 插件真实存在

合并方式为 **Squash**，`master` 上的分支会自动删除（仓库已开启 `delete_branch_on_merge`；fork 里的分支由作者自己清理）。

如果自动合并按钮因为分支保护卡住，工作流会退而启用 GitHub 的 auto-merge，条件满足后由 GitHub 自行合并。

需要临时冻结自动合并时：给仓库加一个 `hold` 标签规则不方便，直接停用 `Auto Merge Pack PR` 工作流即可（Settings → Actions → 该工作流 → Disable）。

## 更新整合包

作者重新分享会产生新的 Release tag（`pack-<slug>-v1.0.0` / 带时间戳的分支），PR 里 `index.json` 的 `url` 会指向新文件。审核时确认旧地址不再被引用即可。

## 撤回整合包

作者删除 Release 资产后，提交 PR 移除 `index.json` 对应条目和 `packs/<slug>/` 目录；`validate-catalog.mjs` 会阻止「只有目录没有条目」或「只有条目没有目录」的状态。

## 相关文档

- 用户视角：[README.md](README.md)
- 贡献流程：[CONTRIBUTING.md](CONTRIBUTING.md)
- 目录规范：[packs/README.md](packs/README.md)
- Marina 端实现：[docs/share-to-community.md](https://github.com/QuaonY/dsh-marina/blob/master/docs/share-to-community.md)
