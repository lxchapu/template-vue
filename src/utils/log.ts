/*
 * @Author: 杨旭
 * @Date: 2023-06-06 13:09:50
 * @LastEditors: 杨旭
 * @LastEditTime: 2023-06-06 13:09:50
 * @FilePath: template-vue\src\utils\log.ts
 * @Description: 打印信息
 */
import { formatDateTime } from './dateUtils'
/**
 * 自定义打印信息
 * @param {string} name 名称
 * @param {string} message 信息
 * @param {string[]} styles
 */
export function logCapsule(
  name: string,
  message: string,
  styles = [
    'color:#FFF;padding:2px 5px;background-color:black;border-radius:2px 0 0 2px;',
    'color:#FFF;padding:2px 5px;background-color:#4d6f8f;border-radius:0 2px 2px 0;',
  ]
) {
  console.log(`%c${name}%c${message}`, ...styles)
}

/** 打印版本信息 */
export function logAppInfo() {
  const { version, release } = __APP_INFO__
  const environment = import.meta.env.MODE

  logCapsule('Version', version)
  logCapsule('Environment', environment)
  logCapsule('Release', formatDateTime(release))
}
