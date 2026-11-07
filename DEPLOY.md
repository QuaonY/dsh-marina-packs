# 🚀 快速部署指南

你的 `dsh-marina-packs` 仓库已经在本地创建好了！现在需要推送到 GitHub。

## 📍 当前状态

✅ 已完成：
- 完整的仓库结构
- README 和贡献指南
- JSON Schema 定义
- GitHub Actions 自动验证
- Issue 和 PR 模板
- 示例整合包

## 🔗 第一步：在 GitHub 上创建仓库

1. 访问 https://github.com/new
2. 填写：
   ```
   Repository name: dsh-marina-packs
   Description: 🎁 Community-curated DSH Marina integration packs
   Public: ✓
   
   ❌ 不要勾选 "Add a README file"
   ❌ 不要勾选 ".gitignore"  
   ✅ License: MIT License
   ```
3. 点击 **"Create repository"**

## 📤 第二步：推送到 GitHub

GitHub 会显示一个页面，选择 **"...or push an existing repository from the command line"** 部分。

在本地执行（已经在 dsh-marina-packs 目录中了）：

```bash
# 添加远程仓库（替换成你的用户名）
git remote add origin https://github.com/你的GitHub用户名/dsh-marina-packs.git

# 推送
git branch -M master
git push -u origin master
```

## 🎉 第三步：验证部署

推送成功后，访问你的仓库查看：

- ✅ README 正确显示
- ✅ 文件结构完整
- ✅ GitHub Actions 已启用
- ✅ Issue 模板可用

## 🔧 第四步：配置仓库（可选）

### 启用 Discussions（推荐）

1. 进入仓库 **Settings**
2. 找到 **Features** 部分
3. 勾选 **Discussions**
4. 这样用户可以讨论整合包

### 添加主题标签

1. 在仓库页面点击 **About** 旁的 ⚙️
2. 添加 Topics：
   ```
   dsh
   dsh-marina
   integration-packs
   plugins
   configuration
   community
   ```

### 设置仓库描述

同样在 About 设置中，添加 Website：
```
https://github.com/你的用户名/dsh-marina
```

## 📝 后续工作

### 1. 更新 README 中的链接

编辑 `README.md`，替换所有的 `你的用户名` 为你的实际 GitHub 用户名。

### 2. 删除示例整合包（可选）

等有真实整合包后，可以删除 `packs/example-minimal/`：

```bash
git rm -r packs/example-minimal
git commit -m "Remove example pack"
git push
```

### 3. 创建第一个真实整合包

参考 [CONTRIBUTING.md](CONTRIBUTING.md) 开始创建！

## 🔗 Marina 集成准备

当你准备在 Marina 中集成这个仓库时，需要：

1. **仓库 URL**：`https://github.com/你的用户名/dsh-marina-packs`
2. **index.json URL**：`https://raw.githubusercontent.com/你的用户名/dsh-marina-packs/master/index.json`
3. **packs 目录**：`https://raw.githubusercontent.com/你的用户名/dsh-marina-packs/master/packs/`

在 Marina 的整合包功能中配置这个 URL 作为默认源。

## 🎯 下一步

现在你可以：

1. ✅ 推送到 GitHub
2. 📢 在 dsh-marina 的 README 中宣布这个仓库
3. 🎁 邀请社区贡献整合包
4. 🔧 在 Marina 中实现整合包浏览和分享功能

---

需要帮助？查看完整的 [README.md](README.md) 和 [CONTRIBUTING.md](CONTRIBUTING.md)
