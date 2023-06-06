/*
 * @Author: 杨旭
 * @Date: 2023-06-06 13:09:50
 * @LastEditors: 杨旭
 * @LastEditTime: 2023-06-06 13:09:50
 * @FilePath: template-vue\src\store\plugins\persist.ts
 * @Description: 数据持久化插件
 */
/**
 * pinia-plugin-persist 插件必须将数据封装为对象
 * 故而手动实现该功能, 参考 useStorage 方法
 */
import type { PiniaPluginContext } from 'pinia'
import type { Serializer } from './types'
/** 序列化函数 */
const storageSerializers: Record<'boolean' | 'object' | 'number' | 'string', Serializer<any>> = {
  boolean: {
    read: (v: any) => v === 'true',
    write: (v: any) => String(v),
  },
  object: {
    read: (v: any) => JSON.parse(v),
    write: (v: any) => JSON.stringify(v),
  },
  number: {
    read: (v: any) => Number.parseFloat(v),
    write: (v: any) => String(v),
  },
  string: {
    read: (v: any) => v,
    write: (v: any) => String(v),
  },
}
/**
 * @description: 持久化数据
 * @param {PiniaPluginContext} param1
 * @return {*}
 */
export function persistPlugin({ options, store }: PiniaPluginContext) {
  if (!options.persist?.enabled) return
  const strategies = options.persist.strategies
  strategies.forEach((strategy) => {
    const storage = strategy.storage || sessionStorage
    const key = strategy.key || strategy.path
    const type = strategy.type || 'object'
    const value = storage.getItem(key)
    if (value) {
      const object: Record<string, any> = {}
      object[strategy.path] = storageSerializers[type].read(value)
      store.$patch(object)
    }
  })
  store.$subscribe(() => {
    strategies.forEach((strategy) => {
      const storage = strategy.storage || sessionStorage
      const key = strategy.key || strategy.path
      const type = strategy.type || 'object'

      const value = storageSerializers[type].write(store.$state[strategy.path])
      storage.setItem(key, value)
    })
  })
}
