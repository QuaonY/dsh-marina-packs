# DSH Marina Packs

这个目录存放整合包的**元数据**，不存放 `.zip` 文件。

## 📁 目录结构

```text
packs/
├── README.md
├── example-minimal/        # 模板示例（校验时跳过）
│   ├── pack.json
│   └── README.md
└── <slug>/
    ├── pack.json           # 整合包元数据（必需）
    ├── README.md           # 使用说明（必需）
    ├── preview.png         # 预览图（可选）
    └── CHANGELOG.md        # 更新日志（可选）
```

每个 `<slug>` 都必须在仓库根目录的 `index.json` 中登记一条，`id` 与目录名一致。

## ✨ 命名规范

- 使用英文、小写、短横线分隔：`ai-development`
- 只允许字母、数字、`-`、`_`、`.`，长度不超过 64
- 简洁明了，避免特殊字符

**推荐：** `ai-development`、`minimal-setup`、`research-assistant`

**不推荐：** `AI_Development`、`ai development`、`my-awesome-pack-v2-final`

## 📦 必需文件

### pack.json

必须符合 [../schema.json](../schema.json)。最小示例：

```json
{
  "schema_version": 1,
  "name": "我的整合包",
  "version": "1.0.0",
  "author": "yourname",
  "description": "简短描述这个整合包是做什么的",
  "requirements": {
    "min_runtime": "2.0.0"
  },
  "plugins": [
    {
      "name": "example-plugin",
      "version": "^1.0.0",
      "enabled": true
    }
  ],
  "metadata": {
    "repository": "https://github.com/yourname/dsh-marina-shared-packs",
    "download_url": "https://github.com/yourname/dsh-marina-shared-packs/releases/download/my-pack-v1.0.0/my-pack.zip",
    "size": 123456,
    "sha256": "64 位十六进制哈希",
    "license": "MIT"
  }
}
```

### README.md

建议包含：

- 整合包介绍
- 适用场景和用户
- 包含的插件列表
- 使用方法
- 配置说明（如需要）
- 下载链接
- 许可证信息

参考模板见 [CONTRIBUTING.md](../CONTRIBUTING.md)。

## 🎨 可选文件

### preview.png / preview.jpg

- 推荐尺寸：1280x720 或 16:9
- 格式：PNG 或 JPG
- 大小：不超过 2MB

### CHANGELOG.md

记录版本更新历史。

## 🚀 贡献你的整合包

准备好分享了吗？查看 [贡献指南](../CONTRIBUTING.md)。

---

等待你的第一个整合包！🎁

<!-- required-check probe -->
