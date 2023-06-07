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
