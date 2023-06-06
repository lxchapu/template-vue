/*
 * @Author: 王嘉哲
 * @Date: 2023-06-06 13:09:50
 * @LastEditors: 杨旭
 * @LastEditTime: 2023-06-06 13:09:50
 * @FilePath: template-vue\src\service\request\axios.ts
 * @Description: 配置 axios
 */
import type { AxiosError } from 'axios'
import type { StrategyAction } from '@/utils/pattern'

import axios from 'axios'
import { exeStrategyAction } from '@/utils'
import {
  EnumStorageKey,
  REQUEST_TIMEOUT,
  REQUEST_TIMEOUT_CODE,
  REQUEST_TIMEOUT_MSG,
  ERROR_STATUS,
  NETWORK_ERROR_CODE,
  NETWORK_ERROR_MSG,
} from '@/settings'

export const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: REQUEST_TIMEOUT,
  timeoutErrorMessage: REQUEST_TIMEOUT_MSG,
})

/** 拦截请求：有令牌则带上 */
request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(EnumStorageKey.token)

    if (token) config.headers!.Authorization = `Bearer ${token}`

    return config
  },
  (error) => Promise.reject(error)
)

/** 拦截响应：处理异常code */
request.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    let message = ''

    exeStrategyAction([
      /** 网络错误 */
      [error.code === NETWORK_ERROR_CODE, () => (message = NETWORK_ERROR_MSG)],

      /** 请求超时 */
      [
        error.code === REQUEST_TIMEOUT_CODE || error.message.indexOf('timeout') !== -1,
        () => (message = REQUEST_TIMEOUT_MSG),
      ],

      /** 请求错误 */
      [
        !!error.response?.status,
        () => {
          const actions: StrategyAction[] = Object.keys(ERROR_STATUS).map((key) => {
            const status = key as unknown as keyof typeof ERROR_STATUS

            return [
              error.response!.status === status,
              () => {
                message = ERROR_STATUS[status]
              },
            ]
          })

          exeStrategyAction(actions)
        },
      ],
    ])

    error.message = message
    return Promise.reject(error)
  }
)
