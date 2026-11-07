# 🤝 贡献指南

感谢你愿意分享你的 DSH Marina 整合包！

## 📋 提交前检查清单

在提交整合包前，请确保：

- [ ] 已阅读并同意 [MIT License](LICENSE)
- [ ] 整合包不包含敏感数据（API Keys、Token、个人信息等）
- [ ] 已测试整合包可以正常使用
- [ ] 提供了清晰的 README 说明
- [ ] `pack.json` 格式符合 [schema.json](schema.json) 规范

## 🚀 方法一：在 Marina 内一键分享（即将推出）

这是最简单的方式，适合所有用户。

1. 在 Marina 中打开你配置好的实例
2. 点击 **「分享整合包」** 按钮
3. **首次使用需要登录 GitHub**：
   - 点击「使用 GitHub 登录」
   - 在浏览器中授权 DSH Marina
   - 授权后会自动返回 Marina
4. 填写整合包信息：
   - 整合包名称（英文，小写，用短横线分隔，如 `ai-development`）
   - 显示名称（中英文均可）
   - 详细描述
   - 选择标签
   - 上传预览图（可选）
5. 点击 **「发布到社区」**
6. Marina 会自动：
   - Fork dsh-marina-packs 仓库（如果还没有）
   - 创建新分支
   - 生成 pack.json 和 README.md
   - 过滤敏感数据
   - 创建 Pull Request
7. 等待维护者审核

## 🛠️ 方法二：手动提交

适合熟悉 Git 的用户，或需要更精细控制的情况。

### 1. Fork 和克隆仓库

```bash
# 1. 在 GitHub 上 Fork 本仓库
# 访问 https://github.com/你的用户名/dsh-marina-packs
# 点击右上角的 "Fork"

# 2. 克隆你的 Fork
git clone https://github.com/你的GitHub用户名/dsh-marina-packs.git
cd dsh-marina-packs

# 3. 添加上游仓库
git remote add upstream https://github.com/原作者用户名/dsh-marina-packs.git
```

### 2. 创建整合包

```bash
# 1. 创建新分支
git checkout -b packs/你的整合包名称

# 2. 创建整合包目录
mkdir -p packs/你的整合包名称
cd packs/你的整合包名称

# 3. 创建必需文件
touch pack.json README.md

# 4. 可选：添加预览图
# 复制你的预览图到当前目录，命名为 preview.png 或 preview.jpg
```

### 3. 编辑 pack.json

```json
{
  "schema_version": 1,
  "name": "你的整合包显示名称",
  "version": "1.0.0",
  "author": "你的 GitHub 用户名",
  "description": "简短描述你的整合包是做什么的",
  "tags": ["选择", "合适的", "标签"],
  "requirements": {
    "min_runtime": "2.0.0",
    "recommended_runtime": "2.5.0"
  },
  "plugins": [
    {
      "name": "插件包名",
      "version": "^1.0.0",
      "enabled": true,
      "config": {
        "非敏感的配置项": "值"
      }
    }
  ],
  "metadata": {
    "homepage": "https://github.com/你的用户名/项目",
    "repository": "https://github.com/你的用户名/dsh-marina-packs",
    "license": "MIT"
  }
}
```

**注意事项：**

- ✅ `version` 使用语义化版本（Semantic Versioning）
- ✅ `tags` 选择合适的标签（见下方可用标签列表）
- ✅ `config` 只包含非敏感配置
- ❌ 不要包含 API Keys、Token、密码等
- ❌ 不要包含绝对路径、用户名等个人信息

### 4. 编写 README.md

```markdown
# 你的整合包名称

简短的一句话描述

## 📝 介绍

详细介绍你的整合包：
- 适用场景
- 包含哪些插件
- 有什么特色功能

## 🎯 适合谁使用

- 适合 xxx 用户
- 适合 xxx 场景

## 📦 包含内容

### 插件列表

1. **插件名称** - 插件功能说明
2. **另一个插件** - 另一个功能

### 运行时版本

- 最低版本：2.0.0
- 推荐版本：2.5.0

## 🚀 使用方法

1. 在 Marina 中导入此整合包
2. 创建新实例
3. 启动并享受

## ⚙️ 配置说明

（可选）如果有需要用户手动配置的地方，在这里说明

## 📸 截图

（可选）添加截图展示效果

## 💡 提示和技巧

（可选）使用时的小技巧

## 🔄 更新日志

### v1.0.0 (2024-01-01)
- 首次发布

## 📜 许可证

MIT License

## 🙏 致谢

（可选）感谢的人或项目
```

### 5. 提交和推送

```bash
# 1. 检查敏感数据
# 确保没有包含 API Keys、Token 等

# 2. 添加文件
git add pack.json README.md preview.png

# 3. 提交
git commit -m "Add: 你的整合包名称"

# 4. 推送到你的 Fork
git push origin packs/你的整合包名称
```

### 6. 创建 Pull Request

1. 访问你的 Fork：`https://github.com/你的用户名/dsh-marina-packs`
2. GitHub 会提示你有新分支，点击 **「Compare & pull request」**
3. 填写 PR 信息：
   - 标题：`Add: 你的整合包名称`
   - 描述：简要说明整合包的用途和特点
4. 点击 **「Create pull request」**
5. 等待维护者审核

## 🏷️ 可用标签

选择合适的标签让其他人更容易找到你的整合包：

**场景类：**
- `development` - 开发编程
- `writing` - 写作创作
- `research` - 研究学习
- `productivity` - 生产力工具
- `entertainment` - 娱乐休闲
- `education` - 教育学习

**技术类：**
- `ai` - AI 辅助
- `code` - 代码相关
- `data` - 数据分析
- `web` - Web 开发
- `python` - Python
- `javascript` - JavaScript

**难度类：**
- `beginner` - 适合新手
- `intermediate` - 中级用户
- `advanced` - 高级用户

**特性类：**
- `minimal` - 极简配置
- `full-featured` - 功能完整
- `lightweight` - 轻量级
- `theme` - 主题美化

## 🔍 审核标准

我们会检查：

✅ **必需：**
- 文件完整（pack.json + README.md）
- 格式正确（符合 schema.json）
- 无敏感数据
- 描述清晰

✅ **推荐：**
- 有预览图
- README 详细
- 插件组合有意义
- 测试通过

❌ **会被拒绝：**
- 包含敏感数据
- 格式错误
- 描述不清
- 重复的整合包（无明显差异）
- 恶意内容

## 🔄 更新整合包

### 在 Marina 中更新

1. 修改你的实例配置
2. 点击「更新整合包」
3. 系统会自动更新对应的整合包并提交 PR

### 手动更新

```bash
# 1. 切换到整合包分支
git checkout packs/你的整合包名称

# 2. 拉取最新更改
git pull upstream master
git merge master

# 3. 更新文件
# 编辑 pack.json，递增版本号
# 更新 README.md 和 CHANGELOG.md

# 4. 提交和推送
git add .
git commit -m "Update: 你的整合包名称 v1.1.0"
git push origin packs/你的整合包名称

# 5. 创建新的 Pull Request
```

## ❓ 常见问题

### Q: 我的整合包会被多少人使用？

A: 取决于整合包的质量和实用性。我们会在 Marina 内展示下载量和评分。

### Q: 我可以删除或撤回整合包吗？

A: 可以。提交一个 Issue 说明原因，维护者会协助处理。

### Q: 整合包会自动更新吗？

A: Marina 会检测整合包更新并通知用户，但不会自动更新已创建的实例。

### Q: 我可以为整合包收费吗？

A: MIT 许可证允许商业使用，但本仓库不提供付费整合包托管。你可以在自己的平台销售。

### Q: 如何处理插件版本冲突？

A: 在 pack.json 中使用版本范围（如 `^1.0.0`），Marina 会自动解析兼容版本。

## 💬 需要帮助？

- 提交 [Issue](https://github.com/你的用户名/dsh-marina-packs/issues)
- 参与 [Discussions](https://github.com/你的用户名/dsh-marina-packs/discussions)
- 查看[示例整合包](packs/)

---

再次感谢你的贡献！🎉
