import { NavigationHookAfter } from 'vue-router'

/** 关闭loading */
export const createTitleAfterGuard: NavigationHookAfter = (to, from) => {
  if (to.meta.title && to.name !== 'Home')
    document.title = `${to.meta.title} - ${import.meta.env.VITE_APP_TITLE}`
}
