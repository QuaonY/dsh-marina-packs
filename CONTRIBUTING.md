# 🤝 贡献指南

感谢你愿意分享你的 DSH Marina 整合包！

本仓库采用**元数据索引**模式：整合包 `.zip` 由作者托管在自己的 GitHub Release，
本仓库只保存 `packs/<slug>/pack.json`、`packs/<slug>/README.md`，并在 `index.json`
中登记下载地址、大小和 SHA-256。

## 📋 提交前检查清单

- [ ] 已阅读并同意 [MIT License](LICENSE)
- [ ] 整合包不包含敏感数据（API Keys、Token、个人信息等）
- [ ] 已测试整合包可以正常使用
- [ ] 提供了清晰的 README 说明
- [ ] `pack.json` 符合 [schema.json](schema.json)
- [ ] `.zip` 已上传到自己的 Release，并能公开下载
- [ ] `index.json` 中的 `url`、`size`、`sha256` 与实际文件一致

## 🚀 方法一：在 Marina 内一键分享（推荐）

这是最简单的方式，适合所有用户。

1. 在 Marina 中打开你配置好的实例
2. 点击 **「分享到社区」**
3. **首次使用需要登录 GitHub**：
   - 点击「连接 GitHub」
   - 在浏览器中授权 DSH Marina
   - 授权后会自动返回 Marina
4. 填写整合包信息：
   - 选择实例
   - 整合包名称（中英文均可，会生成 URL 友好的 slug）
   - 简短描述
5. 点击 **「完成」**

Marina 会自动完成 9 个步骤：

1. 生成整合包 `.zip`
2. 检查/创建 `<你的用户名>/dsh-marina-shared-packs` 仓库
3. 创建 GitHub Release（tag：`<slug>-v1.0.0`）
4. 上传 `.zip` 到 Release
5. 生成元数据
6. Fork `dsh-marina-packs`
7. 创建分支 `share/<slug>-<时间戳>`
8. 上传 `packs/<slug>/pack.json`、`packs/<slug>/README.md`，并更新 `index.json`
9. 创建 Pull Request

提交后等待维护者审核即可。

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
git remote add upstream https://github.com/QuaonY/dsh-marina-packs.git
```

### 2. 托管 `.zip` 并取得下载地址

1. 在 GitHub 创建（或复用）公开仓库 `<你的用户名>/dsh-marina-shared-packs`
2. 创建 Release，例如 tag 为 `my-pack-v1.0.0`
3. 上传 `my-pack.zip` 作为 Release 资产
4. 复制资产的下载地址，例如：

```text
https://github.com/你的用户名/dsh-marina-shared-packs/releases/download/my-pack-v1.0.0/my-pack.zip
```

### 3. 计算文件大小和 SHA-256

**PowerShell：**

```powershell
(Get-Item .\my-pack.zip).Length
(Get-FileHash .\my-pack.zip -Algorithm SHA256).Hash.ToLower()
```

**bash：**

```bash
stat -c%s my-pack.zip   # macOS: stat -f%z my-pack.zip
sha256sum my-pack.zip
```

### 4. 创建整合包目录

目录名（`slug`）必须与 `index.json` 中的 `id` 完全一致，只能包含字母、数字、
`-`、`_`、`.`，长度不超过 64。

```bash
git checkout -b packs/my-pack
mkdir -p packs/my-pack
```

创建 `packs/my-pack/pack.json`：

```json
{
  "schema_version": 1,
  "name": "我的整合包",
  "version": "1.0.0",
  "author": "你的 GitHub 用户名",
  "description": "一句话说明这个整合包是做什么的，至少 10 个字符",
  "requirements": {
    "min_runtime": "2.0.0"
  },
  "plugins": [
    {
      "name": "插件包名",
      "version": "^1.0.0",
      "enabled": true
    }
  ],
  "metadata": {
    "repository": "https://github.com/你的用户名/dsh-marina-shared-packs",
    "download_url": "https://github.com/你的用户名/dsh-marina-shared-packs/releases/download/my-pack-v1.0.0/my-pack.zip",
    "size": 123456,
    "sha256": "64 位十六进制哈希",
    "license": "MIT"
  }
}
```

**注意事项：**

- ✅ `version` 使用语义化版本（`1.0.0`）
- ✅ `requirements.min_runtime` 必须是 `x.y.z`
- ✅ `plugins` 至少一项
- ✅ `metadata.download_url` 必须是 `https://` 地址
- ✅ `metadata.size`、`metadata.sha256` 必须与 `.zip` 一致
- ❌ 不要包含 API Keys、Token、密码等
- ❌ 不要包含绝对路径、用户名等个人信息

### 5. 编写 README.md

`packs/my-pack/README.md` 至少包含：

```markdown
# 我的整合包

一句话描述。

## 包含插件

- 插件 A
- 插件 B

## 使用方法

在 Marina 的「整合包」页面找到本整合包，点击「使用整合包」。

## 下载

[my-pack.zip](https://github.com/你的用户名/dsh-marina-shared-packs/releases/download/my-pack-v1.0.0/my-pack.zip)
```

### 6. 在 index.json 中登记

编辑仓库根目录的 `index.json`，在 `packs` 数组中加入一条：

```json
{
  "id": "my-pack",
  "name": "我的整合包",
  "author": "你的 GitHub 用户名",
  "description": "一句话说明这个整合包是做什么的",
  "dsh_version": "2.0.0",
  "plugins": ["插件包名"],
  "url": "https://github.com/你的用户名/dsh-marina-shared-packs/releases/download/my-pack-v1.0.0/my-pack.zip",
  "size": 123456,
  "sha256": "64 位十六进制哈希"
}
```

要求：

- `id` 唯一，且与 `packs/<slug>/` 目录名一致
- `url` 必须是 `https://`
- `sha256` 必须是 64 位十六进制
- `size` 必须是正整数
- `pack.json` 的 `metadata.download_url` / `size` / `sha256` 若存在，必须与这里一致

### 7. 本地校验

需要 Node.js 20+：

```bash
node scripts/validate-catalog.mjs
```

### 8. 提交和推送

```bash
git add packs/my-pack index.json
git commit -m "Add pack: 我的整合包"
git push origin packs/my-pack
```

### 9. 创建 Pull Request

1. 访问你的 Fork
2. 点击 **Compare & pull request**
3. 标题：`Add pack: 我的整合包`
4. 填写 PR 模板并提交
5. 等待维护者审核

## ✅ 自动校验会检查什么

`validate` 工作流会运行：

- `packs/**/pack.json` 是否符合 [schema.json](schema.json)（AJV）
- 是否包含敏感数据（API Key / Token 模式）
- 每个整合包是否有 `pack.json` 和 `README.md`
- `index.json` 是否合法
- 每个条目是否有对应的 `packs/<id>/` 目录
- 每个真实整合包目录是否都已登记到 `index.json`
- `sha256` / `size` / `download_url` 是否一致

> `packs/example-minimal/` 是模板示例，会被校验脚本跳过。

## 🔍 审核标准

✅ **必需：**

- `packs/<slug>/pack.json` + `README.md` 完整
- `index.json` 有条目且字段一致
- 格式正确、无敏感数据、描述清晰

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
2. 重新点击「分享到社区」
3. 使用相同的整合包名称，新 Release 会使用带时间戳的分支提交 PR
4. 维护者合并后，`index.json` 中的条目会指向新地址

### 手动更新

1. 在你自己的 `dsh-marina-shared-packs` 仓库创建新 Release 并上传新 `.zip`
2. 更新 `packs/<slug>/pack.json` 的版本和 `metadata`
3. 更新 `index.json` 中的 `url` / `size` / `sha256`
4. 提交 PR

## ❓ 常见问题

### Q: 为什么 `.zip` 不放在本仓库？

避免仓库体积随整合包数量膨胀。作者自托管 Release，也更方便独立更新和删除。

### Q: 我可以删除或撤回整合包吗？

可以。删除你 Release 中的 `.zip`，再提交一个 PR 从 `index.json` 和 `packs/` 中移除条目。

### Q: 整合包会自动更新吗？

Marina 会检测目录变化并通知，但不会自动更新已创建的实例。

### Q: 我可以为整合包收费吗？

MIT 许可证允许商业使用，但本仓库不提供付费整合包托管。

## 💬 需要帮助？

- 提交 [Issue](https://github.com/QuaonY/dsh-marina-packs/issues)
- 参与 [Discussions](https://github.com/QuaonY/dsh-marina-packs/discussions)
- 查看[示例整合包](packs/example-minimal)

---

再次感谢你的贡献！🎉
