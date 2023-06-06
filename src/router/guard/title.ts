/*
 * @Author: 王嘉哲
 * @Date: 2023-06-06 13:09:50
 * @LastEditors: 王嘉哲
 * @LastEditTime: 2023-06-06 13:09:50
 * @FilePath: template-vue\src\router\guard\title.ts
 * @Description: 动态设置标题
 */
import { NavigationHookAfter } from 'vue-router'

/** 关闭loading */
export const createTitleAfterGuard: NavigationHookAfter = (to, from) => {
  if (to.meta.title && to.name !== 'Home')
    document.title = `${to.meta.title} - ${import.meta.env.VITE_APP_TITLE}`
}
