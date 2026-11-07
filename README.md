# 🎁 DSH Marina Packs

社区策划的 DSH Marina 整合包 - 分享和发现插件配置组合

[English](#english) | [中文](#chinese)

---

## <a name="chinese"></a>📖 什么是整合包？

整合包是预配置的 DSH 实例模板，包含：

- 🧩 **精选插件组合** - 经过测试的插件搭配
- ⚙️ **推荐配置** - 开箱即用的设置
- 📦 **运行时版本** - 明确的版本依赖
- 📝 **使用文档** - 详细的说明和最佳实践

就像 Minecraft 的整合包、VS Code 的配置文件，让你快速获得完整的工作环境。

## 🚀 如何使用

### 在 DSH Marina 中（推荐）

1. 打开 **Marina 启动器**
2. 进入 **「整合包」** 页面
3. 浏览社区分享的整合包
4. 点击 **「使用整合包」** 一键创建实例

### 手动安装

```bash
# 1. 下载整合包
git clone https://github.com/你的用户名/dsh-marina-packs.git
cd dsh-marina-packs/packs/[整合包名称]

# 2. 在 Marina 中导入
# 打开 Marina → 整合包 → 导入本地整合包 → 选择 pack.json
```

## 🎨 精选整合包

> 暂无整合包，成为第一个贡献者！

<!--
| 名称 | 描述 | 作者 | 下载 |
|------|------|------|------|
| [AI 开发助手](packs/ai-development) | 完整的代码开发环境 | @yourname | - |
| [研究写作套装](packs/research-writing) | 论文写作和文献管理 | @someone | - |
-->

## 📤 分享你的整合包

### 方法一：Marina 内一键分享（即将推出）

1. 在 Marina 中打开你配置好的实例
2. 点击 **「分享整合包」** 按钮
3. 登录 GitHub（首次需要）
4. 填写整合包信息并发布
5. 自动创建 Pull Request

### 方法二：手动提交

1. **Fork** 本仓库
2. 在 `packs/` 目录创建你的整合包文件夹
3. 添加 `pack.json` 和 `README.md`
4. 提交 **Pull Request**

详细步骤见 [贡献指南](CONTRIBUTING.md)

## 📋 整合包规范

每个整合包需要包含：

```
packs/你的整合包名称/
├── pack.json          # 核心配置文件（必需）
├── README.md          # 使用说明（必需）
├── preview.png        # 预览图（推荐）
└── CHANGELOG.md       # 更新日志（可选）
```

**pack.json 示例：**

```json
{
  "schema_version": 1,
  "name": "AI 开发全家桶",
  "version": "1.0.0",
  "author": "yourname",
  "description": "完整的 AI 辅助开发环境",
  "tags": ["ai", "development", "beginner"],
  "requirements": {
    "min_runtime": "2.0.0",
    "recommended_runtime": "2.5.0"
  },
  "plugins": [
    {
      "name": "code-runner",
      "version": "^1.0.0",
      "enabled": true,
      "config": {
        "theme": "dark"
      }
    }
  ],
  "metadata": {
    "homepage": "https://github.com/user/pack",
    "license": "MIT"
  }
}
```

完整格式定义见 [schema.json](schema.json)

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

**这意味着：**
- ✅ 自由使用、修改、分发任何整合包
- ✅ 商业使用完全 OK
- ✅ 唯一要求：保留原作者署名

**分享整合包时：**
- 你分享的整合包将默认使用 MIT License
- 你保留作者署名权
- 其他人可以基于你的整合包创建衍生版本

## 🔗 相关链接

- [DSH Marina 主项目](https://github.com/QuaonY/dsh-marina)
- [DSH 官方文档](https://docs.deepseek.com)
- [问题反馈](https://github.com/QuaonY/dsh-marina-packs/issues)

## 💬 社区

有问题或建议？欢迎：
- 提交 [Issue](https://github.com/QuaonY/dsh-marina-packs/issues)
- 参与 [Discussions](https://github.com/QuaonY/dsh-marina-packs/discussions)

---

## <a name="english"></a>📖 What are Packs?

Integration packs are pre-configured DSH instance templates that include:

- 🧩 **Curated Plugin Combinations** - Tested plugin setups
- ⚙️ **Recommended Configurations** - Ready-to-use settings
- 📦 **Runtime Versions** - Clear version dependencies
- 📝 **Documentation** - Detailed guides and best practices

Like Minecraft modpacks or VS Code profiles, get a complete working environment instantly.

## 🚀 How to Use

### In DSH Marina (Recommended)

1. Open **Marina Launcher**
2. Go to **「Packs」** tab
3. Browse community-shared packs
4. Click **「Use Pack」** to create an instance

### Manual Installation

See [Chinese section](#chinese) for details.

## 📤 Share Your Pack

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

Made with ❤️ by the DSH Marina community
