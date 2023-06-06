/*
 * @Author: 王嘉哲
 * @Date: 2023-06-06 13:09:50
 * @LastEditors: 杨旭
 * @LastEditTime: 2023-06-06 13:09:50
 * @FilePath: template-vue\src\router\guard\index.ts
 * @Description: 路由中间件统一导出
 */
import type { Router } from 'vue-router'

import { createTitleAfterGuard } from './title'
import { createLoadingBeforeGuard, createLoadingAfterGuard } from './loading'
/**
 * 设置路由中间件
 * @param {Router} router
 */
export function createRouterGuard(router: Router) {
  router.beforeEach(createLoadingBeforeGuard)

  router.afterEach(createTitleAfterGuard)
  router.afterEach(createLoadingAfterGuard)
}
