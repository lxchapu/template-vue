import type { ComputedRef } from 'vue'
import type { ConfigProviderProps } from 'naive-ui'

import { createDiscreteApi } from 'naive-ui'
/**
 * 设置 naive-ui 的 api
 * @param {ComputedRef} configProviderProps
 */
export function setupNaiveUiApi(configProviderProps: ComputedRef<ConfigProviderProps>) {
  const { message, notification, dialog, loadingBar } = createDiscreteApi(
    ['message', 'dialog', 'notification', 'loadingBar'],
    {
      configProviderProps,
      notificationProviderProps: {
        max: 3,
      },
    }
  )
  window.$dialog = dialog
  window.$message = message
  window.$loadingBar = loadingBar
  window.$notification = notification
}
