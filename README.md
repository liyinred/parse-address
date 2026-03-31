# Parse Address API

轻量级 REST API 服务，基于 `address-smart-parse` 库将中文地址字符串解析为结构化组件。

> **⚠️ 重要提示**：本服务为小程序用户信息地址识别功能的后端支撑服务。**必须保持运行状态**，否则小程序中的地址解析功能将无法使用。

## 技术栈

- **运行时**: Node.js v22
- **框架**: Express.js v5.1
- **地址解析**: address-smart-parse v3.0.3

## 快速开始

### 环境要求

- Node.js >= 18（推荐 v22）
- npm >= 9

### 安装步骤

```bash
# 使用 fnm 管理 Node 版本（推荐）
curl -o- https://fnm.vercel.app/install | bash
fnm install 22

# 或使用 nvm
nvm install 22

# 安装项目依赖
npm install
```

### 启动服务

```bash
node server.js
```

服务将在 `http://0.0.0.0:3004` 启动。

## API 参考

### POST `/parse_address`

将中文地址解析为结构化组件。

**请求示例**

```json
POST /parse_address
Content-Type: application/json

{
  "address": "北京市海淀区中关村大街1号"
}
```

**成功响应 (200)**

```json
{
  "province": "北京市",
  "city": "北京市",
  "district": "海淀区",
  "street": "中关村大街",
  "address": "中关村大街1号"
}
```

**错误响应 (400) - 参数缺失或无效**

```json
{
  "error": "Missing or invalid \"address\" field in request body."
}
```

**错误响应 (500) - 服务器内部错误**

```json
{
  "error": "Internal server error.",
  "details": "错误信息详情"
}
```

## 项目结构

```
parse-address/
├── server.js           # Express 服务入口
├── package.json        # 依赖配置
├── node_modules/       # 已安装的依赖包
└── README.md           # 项目文档
```

## 配置说明

| 变量     | 默认值       | 说明     |
| ------ | --------- | ------ |
| `HOST` | `0.0.0.0` | 服务绑定地址 |
| `PORT` | `3004`    | 服务监听端口 |

修改配置请编辑 `server.js` 顶部的常量定义：

```javascript
const PORT = 3004;
const HOST = '0.0.0.0';
```

## 开发指南

### 新增接口

在 `server.js` 中添加新的路由：

```javascript
app.post('/your_endpoint', (req, res) => {
    // 处理逻辑
});
```

### 接口测试

```bash
curl -X POST http://localhost:3004/parse_address \
  -H "Content-Type: application/json" \
  -d '{"address": "上海市浦东新区张江高科技园区科苑路88号"}'
```

## 依赖说明

| 依赖包                 | 版本     | 用途       |
| ------------------- | ------ | -------- |
| express             | ^5.1.0 | Web 服务框架 |
| address-smart-parse | ^3.0.3 | 中文地址解析   |

