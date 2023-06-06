/*
 * @Author: 杨旭
 * @Date: 2023-06-06 13:09:50
 * @LastEditors: 杨旭
 * @LastEditTime: 2023-06-06 13:09:50
 * @FilePath: template-vue\src\store\index.ts
 * @Description: 创建 pinia 实例
 */
import type { App } from 'vue'

import { createPinia } from 'pinia'
import { persistPlugin } from './plugins/persist'

export * from './modules'
/** 设置 pinia */
export function setupStore(app: App) {
  const store = createPinia()
  store.use(persistPlugin)
  app.use(store)
}
