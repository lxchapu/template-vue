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
