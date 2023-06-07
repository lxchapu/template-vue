import type { AxiosProgressEvent, AxiosRequestConfig, AxiosResponse } from 'axios'

import { EnumContentType } from '@/settings'
import { request } from './axios'

type AxiosRequestConfigExcludeParams = Omit<AxiosRequestConfig, 'params'>

export interface Result<T = unknown> {
  code: number
  msg: string
  data: T
}

/** get请求 */
export function get<T = unknown>(
  url: string,
  params = {},
  config: AxiosRequestConfigExcludeParams = {}
): Promise<AxiosResponse<Result<T>>> {
  return request.get(url, { params, ...config })
}

/** delete请求 */
export function del<T = unknown>(
  url: string,
  params = {},
  config: AxiosRequestConfigExcludeParams = {}
): Promise<AxiosResponse<Result<T>>> {
  return request.delete(url, { params, ...config })
}

/** post请求 */
export function post<T = unknown>(
  url: string,
  data = {},
  config: AxiosRequestConfig = {}
): Promise<AxiosResponse<Result<T>>> {
  return request.post(url, data, config)
}

/** formData类型请求 - 例如：涉及上传文件 */
export function postForm<T = unknown>(
  url: string,
  data: FormData
): Promise<AxiosResponse<Result<T>>> {
  return request.post(url, data, {
    transformRequest(oData: T, headers: any) {
      headers['Content-Type'] = EnumContentType.formData
      return oData
    },
  })
}

/** form表单形式 */
export function postURL<T = unknown>(
  url: string,
  data: Record<string, string | number | boolean>
): Promise<AxiosResponse<T>> {
  return request.post(url, data, {
    transformRequest: [
      function (oData: Record<string, string>, headers: any) {
        headers['Content-Type'] = EnumContentType.formUrlencoded

        let oDataStr = ''

        for (const key in oData) {
          let value = oData[key as keyof typeof oData]

          if (typeof value !== 'string') value = (value as boolean | number).toString()

          oDataStr += `${key}=${value}&`
        }

        return oDataStr.slice(0, oDataStr.length - 1)
      },
    ],
  })
}

/** put请求 */
export function put<T = unknown>(
  url: string,
  data = {},
  config: AxiosRequestConfig = {}
): Promise<AxiosResponse<Result<T>>> {
  return request.put(url, data, config)
}

/** 下载资源 */
export function downLoad<T = ArrayBuffer>(
  url: string,
  params = {},
  onDownloadProgress?: (event: AxiosProgressEvent) => void
): Promise<AxiosResponse<T>> {
  return request.get(url, {
    params,
    responseType: 'arraybuffer',
    onDownloadProgress,
  })
}
