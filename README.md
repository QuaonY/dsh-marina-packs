# 🎁 DSH Marina Packs

社区策划的 DSH Marina 整合包目录 — 分享和发现插件配置组合。

[English](#english) | [中文](#chinese)

---

## <a name="chinese"></a>📖 什么是整合包？

整合包是预配置的 DSH 实例模板，包含：

- 🧩 **精选插件组合** - 经过测试的插件搭配
- ⚙️ **推荐配置** - 开箱即用的设置
- 📦 **运行时版本** - 明确的版本依赖
- 📝 **使用文档** - 详细的说明和最佳实践

就像 Minecraft 的整合包、VS Code 的配置文件，让你快速获得完整的工作环境。

## 🧭 这个仓库是怎么组织的？

本仓库**只保存元数据**，不保存整合包的 `.zip` 文件：

```text
dsh-marina-packs/
├── index.json                    # App 读取的整合包目录
├── schema.json                   # pack.json 的 JSON Schema
├── scripts/
│   └── validate-catalog.mjs      # index.json / 目录一致性校验
└── packs/
    └── <slug>/
        ├── pack.json             # 整合包元数据（必需）
        └── README.md             # 使用说明（必需）
```

- 每个整合包的 `.zip` 托管在**作者自己的** GitHub Release：
  `<username>/dsh-marina-shared-packs`
- `index.json` 记录每个整合包的下载地址、文件大小和 SHA-256
- 这样仓库体积不会随整合包数量膨胀，作者也能独立更新自己的包

## 🚀 如何使用

### 在 DSH Marina 中（推荐）

1. 打开 **Marina 启动器**
2. 进入 **「整合包」** 页面
3. 浏览社区分享的整合包（列表来自本仓库的 `index.json`）
4. 点击 **「使用整合包」** 一键下载并创建实例

### 手动安装

1. 在 `index.json` 中找到想要的整合包
2. 打开条目里的 `url` 下载 `.zip`
3. 在 Marina 中选择 **整合包 → 导入本地整合包**

## 🎨 精选整合包

> 暂无整合包，成为第一个贡献者！

## 📤 分享你的整合包

### 方法一：Marina 内一键分享（推荐）

1. 在 Marina 中打开配置好的实例
2. 点击 **「分享到社区」**
3. 首次使用点击 **「连接 GitHub」**，在浏览器中授权
4. 填写整合包名称和描述，点击 **「完成」**

Marina 会自动：

- 生成整合包 `.zip`
- 检查/创建 `<你的用户名>/dsh-marina-shared-packs` 仓库
- 创建 GitHub Release 并上传 `.zip`
- 生成 `packs/<slug>/pack.json` 和 `packs/<slug>/README.md`
- 更新 `index.json`
- 提交 Pull Request

### 方法二：手动提交

适合熟悉 Git 的用户。完整步骤见 [贡献指南](CONTRIBUTING.md)。

## 📋 整合包规范

每个整合包在仓库中需要：

```text
packs/<slug>/
├── pack.json          # 核心元数据（必需）
├── README.md          # 使用说明（必需）
├── preview.png        # 预览图（可选）
└── CHANGELOG.md       # 更新日志（可选）
```

同时在 `index.json` 的 `packs` 数组中登记一条：

```json
{
  "id": "ai-development",
  "name": "AI 开发全家桶",
  "author": "yourname",
  "description": "完整的 AI 辅助开发环境",
  "dsh_version": "2.5.0",
  "plugins": ["code-runner", "terminal-tools"],
  "url": "https://github.com/yourname/dsh-marina-shared-packs/releases/download/pack-ai-development-v1.0.0/ai-development.zip",
  "size": 123456,
  "sha256": "64 位十六进制哈希"
}
```

`pack.json` 的格式见 [schema.json](schema.json)。最小示例：

```json
{
  "schema_version": 1,
  "name": "AI 开发全家桶",
  "version": "1.0.0",
  "author": "yourname",
  "description": "完整的 AI 辅助开发环境",
  "requirements": {
    "min_runtime": "2.0.0"
  },
  "plugins": [
    {
      "name": "code-runner",
      "version": "^1.0.0",
      "enabled": true
    }
  ],
  "metadata": {
    "repository": "https://github.com/yourname/dsh-marina-shared-packs",
    "download_url": "https://github.com/yourname/dsh-marina-shared-packs/releases/download/pack-ai-development-v1.0.0/ai-development.zip",
    "size": 123456,
    "sha256": "64 位十六进制哈希",
    "license": "MIT"
  }
}
```

## ✅ 自动校验

每个 Pull Request 都会运行 `validate` 检查：

- `packs/**/pack.json` 是否符合 `schema.json`
- 是否包含 API Key、Token 等敏感数据
- `pack.json` 和 `README.md` 是否齐全
- `index.json` 是否合法，条目是否与 `packs/` 目录一致
- `sha256`、`size`、`download_url` 是否匹配

## 🤝 社区准则

✅ **欢迎：**

- 分享有价值的插件配置组合
- 提供清晰的使用文档和截图
- 尊重插件作者的许可证
- 积极反馈和改进

❌ **禁止：**

- 包含个人敏感数据（API Keys、Token、会话历史等）
- 包含盗版、破解或恶意内容
- 未经许可使用他人的整合包

## 📜 许可证

本项目使用 [MIT License](LICENSE)。

- ✅ 自由使用、修改、分发任何整合包
- ✅ 商业使用完全 OK
- ✅ 唯一要求：保留原作者署名

## 🔗 相关链接

- [DSH Marina 主项目](https://github.com/QuaonY/dsh-marina)
- [DSH 官方文档](https://docs.deepseek.com)
- [问题反馈](https://github.com/QuaonY/dsh-marina-packs/issues)

## 💬 社区

- 提交 [Issue](https://github.com/QuaonY/dsh-marina-packs/issues)
- 参与 [Discussions](https://github.com/QuaonY/dsh-marina-packs/discussions)

---

## <a name="english"></a>📖 What are Packs?

Integration packs are pre-configured DSH instance templates that include curated plugin
combinations, recommended settings, runtime requirements, and documentation.

## 🧭 Repository layout

This repository stores **metadata only**. Each pack's `.zip` lives in its author's own
GitHub Release (`<username>/dsh-marina-shared-packs`), while `index.json` points to the
download URL and records its size and SHA-256.

```text
index.json
schema.json
packs/<slug>/pack.json
packs/<slug>/README.md
scripts/validate-catalog.mjs
```

## 🚀 How to Use

1. Open **Marina Launcher**
2. Go to **Packs**
3. Browse community packs (read from `index.json`)
4. Click **Use Pack** to download and create an instance

## 📤 Share Your Pack

Use **Share to Community** in Marina, or follow [CONTRIBUTING.md](CONTRIBUTING.md).

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

Made with ❤️ by the DSH Marina community
