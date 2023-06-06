/*
 * @Author: 王嘉哲
 * @Date: 2023-06-06 13:09:50
 * @LastEditors: 杨旭
 * @LastEditTime: 2023-06-06 13:09:50
 * @FilePath: template-vue\src\router\guard\loading.ts
 * @Description: loading
 */
import { NavigationGuard, NavigationHookAfter } from 'vue-router'

/** 开启loading */
export const createLoadingBeforeGuard: NavigationGuard = (to, from, next) => {
  window.$loadingBar.start()

  next()
}

/** 关闭loading */
export const createLoadingAfterGuard: NavigationHookAfter = (to, from) => {
  window.$loadingBar.finish()
}
