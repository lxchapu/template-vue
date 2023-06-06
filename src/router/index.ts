/*
 * @Author: 杨旭
 * @Date: 2023-06-06 13:09:50
 * @LastEditors: 杨旭
 * @LastEditTime: 2023-06-06 13:09:50
 * @FilePath: template-vue\src\router\index.ts
 * @Description: 路由实例
 */
import type { App } from 'vue'

import { createRouter, createWebHistory } from 'vue-router'
import { createRouterGuard } from './guard'
import { scrollBehavior } from './helpers'
import routes from './routes'
/* 创建路由实例 */
const router = createRouter({
  routes,
  scrollBehavior,
  history: createWebHistory(),
})
/**
 * 设置路由
 * @param {App} app
 */
export async function setupRouter(app: App) {
  app.use(router)

  createRouterGuard(router)

  await router.isReady()
}
