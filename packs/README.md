# DSH Marina Packs

这个目录存放所有的整合包。

## 📁 目录结构

每个整合包应该有自己的目录：

```
packs/
├── ai-development/        # 整合包目录（英文，小写，短横线分隔）
│   ├── pack.json         # 核心配置文件（必需）
│   ├── README.md         # 使用说明（必需）
│   ├── preview.png       # 预览图（推荐，PNG 或 JPG）
│   └── CHANGELOG.md      # 更新日志（可选）
├── research-writing/
│   └── ...
└── minimal-setup/
    └── ...
```

## ✨ 命名规范

整合包目录名应该：
- 使用英文
- 全部小写
- 使用短横线分隔单词（如 `ai-development`）
- 简洁明了，一看就懂
- 避免特殊字符

**推荐：**
- ✅ `ai-development`
- ✅ `minimal-setup`
- ✅ `research-assistant`

**不推荐：**
- ❌ `AI_Development`（使用下划线）
- ❌ `ai development`（有空格）
- ❌ `my-awesome-pack-v2-final`（太长）

## 📦 必需文件

### pack.json

整合包的核心配置文件，必须符合 [../schema.json](../schema.json) 规范。

最小示例：

```json
{
  "schema_version": 1,
  "name": "我的整合包",
  "version": "1.0.0",
  "author": "yourname",
  "description": "简短描述这个整合包",
  "tags": ["development", "ai"],
  "requirements": {
    "min_runtime": "2.0.0"
  },
  "plugins": [
    {
      "name": "example-plugin",
      "version": "^1.0.0",
      "enabled": true
    }
  ]
}
```

### README.md

提供详细的使用说明，建议包含：

- 整合包介绍
- 适用场景和用户
- 包含的插件列表
- 使用方法
- 配置说明（如需要）
- 更新日志
- 许可证信息

参考模板见 [CONTRIBUTING.md](../CONTRIBUTING.md#4-编写-readmemd)

## 🎨 可选文件

### preview.png / preview.jpg

预览图，展示整合包的效果：

- 推荐尺寸：1280x720 或 16:9 比例
- 格式：PNG 或 JPG
- 大小：不超过 2MB
- 内容：实际使用截图，清晰展示特色

### CHANGELOG.md

记录版本更新历史：

```markdown
# 更新日志

## [1.1.0] - 2024-03-15
### 新增
- 添加了新插件 xxx
- 优化了 yyy 配置

### 修复
- 修复了与 DSH 2.5 的兼容性问题

## [1.0.0] - 2024-01-01
- 首次发布
```

## 🚀 贡献你的整合包

准备好分享了吗？查看 [贡献指南](../CONTRIBUTING.md)

---

等待你的第一个整合包！🎁
