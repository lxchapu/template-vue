# template-vue

![node ^14.18.0 | >=16.0.0](https://img.shields.io/badge/node-%5E14.18.0%20%7C%20%3E%3D16.0.0-brightgreen)
![pnpm](https://img.shields.io/badge/pnpm-orange)
![vite ^4.2.2](https://img.shields.io/badge/vite-%5E4.2.2-blue)
![vue ^3.2.47](https://img.shields.io/badge/vue-%5E3.2.47-blue)
![naive-ui ^2.34.3](https://img.shields.io/badge/naive--ui-%5E2.34.3-blue)

## Introduction

This is a Vue.js 3.x project template.

## Feature

- **Component**: Integrated `Naive-UI`
- **TypeScript**: Develop using `TypeScript`

## Preview

Not deployed

## Change log

[CHANGELOG](./CHANGELOG.md)

## Browser support

Please refer to the `browserslist` configuration item in `package.json`.

## How to use

Recommend using `pnpm` as your package manager.

- install

```bash
pnpm install or pnpm i
```

## Directory

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
