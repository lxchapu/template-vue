/*
 * @Author: 杨旭
 * @Date: 2023-06-06 13:09:50
 * @LastEditors: 杨旭
 * @LastEditTime: 2023-06-06 13:09:50
 * @FilePath: template-vue\src\store\plugins\types.d.ts
 * @Description: 持久化配置类型
 */
export type Serializer<T> = {
  read(raw: string): T
  write(value: T): string
}

export type PersistStrategy = {
  key?: string
  path: string
  type?: 'string' | 'number' | 'boolean' | 'object'
  storage?: Storage
}

export type PersistOptions = {
  enabled: true
  strategies: PersistStrategy[]
}

import 'pinia'

declare module 'pinia' {
  export interface DefineStoreOptionsBase {
    persist?: PersistOptions
  }
}
