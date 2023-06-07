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
