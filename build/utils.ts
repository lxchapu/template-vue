/*
 * @Author: 王嘉哲
 * @Date: 2023-06-06 13:09:50
 * @LastEditors: 杨旭
 * @LastEditTime: 2023-06-06 13:09:50
 * @FilePath: template-vue\build\utils.ts
 * @Description: 打包工具函数
 */
import { resolve } from 'path'

/**
 * 获取项目根路径，末尾不带斜杠
 */
export function getRootPath() {
  return resolve(process.cwd())
}

/**
 * 获取项目src路径，末尾不带斜杠
 * @param {string} [srcName] src 目录名称(默认: "src")
 */
export function getSrcPath(srcName = 'src') {
  return resolve(getRootPath(), srcName)
}

/** 包装 Vite 变量 */
export function wrapperEnv(envConf: Record<string, any>): ImportMetaEnv {
  const ret: any = {}

  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, '\n')
    realName = realName === 'true' ? true : realName === 'false' ? false : realName

    if (envName === 'VITE_PORT') {
      realName = Number(realName)
    }
    ret[envName] = realName
  }
  return ret
}
