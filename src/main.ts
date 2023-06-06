/*
 * @Author: 杨旭
 * @Date: 2023-06-06 13:09:50
 * @LastEditors: 杨旭
 * @LastEditTime: 2023-06-06 13:09:50
 * @FilePath: template-vue\src\main.ts
 * @Description: 入口
 */
import App from './App.vue'
import { setupRouter } from './router'
import { setupStore, useThemeStore } from './store'
import { setupAssets, setupNaiveUiApi } from './plugins'
import { logAppInfo } from './utils'

/** 启动 */
async function setupApp() {
  setupAssets()

  const app = createApp(App)

  setupStore(app)

  const themeStore = useThemeStore()
  const configProps = computed(() => {
    return {
      theme: themeStore.theme,
      themeOverrides: themeStore.themeOverrides,
    }
  })

  setupNaiveUiApi(configProps)

  await setupRouter(app)

  app.mount('#app')
}

setupApp()
logAppInfo()
