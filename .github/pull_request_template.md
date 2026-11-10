## 描述 / Description

请简要描述这个 Pull Request 的内容。

<!--
例如：
- 添加新整合包：AI 开发全家桶
- 更新整合包：research-writing v1.1.0
- 修复索引：xxx
-->

## 类型 / Type

- [ ] 🎁 新整合包
- [ ] 🔄 更新现有整合包
- [ ] 🐛 Bug 修复
- [ ] 📝 文档更新
- [ ] 🛠️ 其他

## 整合包信息 / Pack Information

**名称：** <!-- 整合包显示名称 -->

**目录（slug）：** `packs/` <!-- 例如：packs/ai-development -->

**版本：** <!-- 例如：1.0.0 -->

**下载地址：** <!-- Release 中的 .zip https:// 地址 -->

**SHA-256：** <!-- 64 位十六进制 -->

**文件大小：** <!-- 字节数 -->

## 检查清单 / Checklist

- [ ] 已阅读并遵循 [贡献指南](../CONTRIBUTING.md)
- [ ] `packs/<slug>/pack.json` 符合 [schema.json](../schema.json)
- [ ] `packs/<slug>/README.md` 完整
- [ ] 已更新根目录 `index.json`，且 `id` 与目录名一致
- [ ] `index.json` 的 `url` / `size` / `sha256` 与实际 `.zip` 一致
- [ ] `pack.json` 的 `metadata.download_url` / `size` / `sha256` 与 `index.json` 一致（若填写）
- [ ] 本地运行 `node scripts/validate-catalog.mjs` 通过
- [ ] 已测试整合包可以正常使用
- [ ] 不包含敏感数据（API Keys、Token、会话历史、个人信息等）
- [ ] 不包含本机绝对路径
- [ ] 同意使用 MIT License

## 测试环境 / Test Environment

**DSH Marina 版本：** <!-- 例如：v0.1.0 -->

**DSH 运行时版本：** <!-- 例如：2.5.0 -->

**操作系统：** <!-- 例如：Windows 11 -->

## 截图 / Screenshots

<!-- 如果有的话，添加预览图或使用截图 -->

## 补充说明 / Additional Notes

<!-- 特殊配置要求、已知问题、未来计划等 -->

---

感谢你的贡献！🎉
