# template-vue - template-project-vue-vite-pc启动模板

template-project-vue-vite-pc启动模板PC 端页面

![node ^14.18.0 | >=16.0.0](https://img.shields.io/badge/node-%5E14.18.0%20%7C%20%3E%3D16.0.0-brightgreen)
![pnpm](https://img.shields.io/badge/pnpm-orange)
![vite ^4.2.2](https://img.shields.io/badge/vite-%5E4.2.2-blue)
![vue ^3.2.47](https://img.shields.io/badge/vue-%5E3.2.47-blue)
![naive-ui ^2.34.3](https://img.shields.io/badge/naive--ui-%5E2.34.3-blue)

## 内部依赖

| 名称                            | 版本   | 描述                                                                             |
| ------------------------------- | ------ | -------------------------------------------------------------------------------- |
| @front-end/eslint-config-zyx    | ^0.0.5 | ts,tsx,js,vue 等为规范化逻辑代码【类型检测,代码规范,编码分隔统一等】             |
| @front-end/stylelint-config-zyx | ^0.0.8 | scss,sass,html,css,vue 为规范化样式代码【样式检测,可保存后自动调整样式代码顺序】 |

## 兼容性

请参考 `package.json` 中的 `browserslist` 配置项

## 相关资料导航链接

- [版本更新日志](./CHANGELOG.md)
- 部署地址:
  - 研发环境地址: xxx
  - 生产环境地址: xxx

## 项目命令

use **pnpm**

```bash
# 安装依赖
pnpm install or pnpm i
# 启动本地服务器
pnpm dev
# 打包（生产环境）
pnpm build
# 打包（研发环境）
pnpm test
# 格式化代码
pnpm prettier
# 语法校验
pnpm lint
# 样式校验
pnpm lint:style
# TS 类型校验
pnpm check:types
# 提交更改
pnpm commit
```

## 目录结构划分

```text
template-vue
├─ .editorconfig
├─ .env                        // 公共变量
├─ .env.development            // 研发环境变量
├─ .env.production             // 生产环境变量
├─ .eslintrc                   // eslint 配置
├─ .eslintrc-auto-import.json
├─ .gitattributes
├─ .gitignore                  // git 忽略文件
├─ .npmrc                      // npm 配置
├─ .prettierrc                 // prettier 配置
├─ .stylelintrc                // stylelint 配置
├─ .vscode                     // 工作区配置
├─ build                       // vite 打包设置
├─ CHANGELOG.md                // 更新日志
├─ index.html
├─ package.json                // 项目依赖
├─ pnpm-lock.yaml
├─ public                      // 公共静态资源
├─ README.md                   // 说明文档
├─ src
│  ├─ App.vue                  // 根组件
│  ├─ assets                   // 资产
│  │  ├─ icons                 // 图标
│  │  ├─ images
│  │  └─ markdowns
│  ├─ components               // 公共组件
│  ├─ main.ts
│  ├─ plugins
│  ├─ router                   // 路由管理
│  ├─ service
│  │  ├─ api                   // 接口
│  │  ├─ index.ts
│  │  ├─ request
│  │  └─ types
│  ├─ settings
│  ├─ store                    // 状态管理
│  ├─ styles
│  ├─ typings
│  ├─ utils                    // 工具函数
│  └─ views                    // 视图
├─ tsconfig.json               // TS 环境配置
├─ tsconfig.node.json
├─ vite.config.ts              // vite 配置
```
