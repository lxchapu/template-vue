import { resolve } from 'path'

/**
 * 获取项目根路径
 */
export function getRootPath() {
  return resolve(process.cwd())
}

/**
 * 获取项目 src 路径
 */
export function getSrcPath() {
  return resolve(getRootPath(), 'src')
}

/**
 * 包装 Vite 变量
 * @param {Record<string, string>} env env 变量
 */
export function wrapViteEnv(env: Record<string, string>): ImportMetaEnv {
  const ret: any = {}

  for (const envName of Object.keys(env)) {
    let realName: any = env[envName].replace(/\\n/g, '\n')
    realName = realName === 'true' ? true : realName === 'false' ? false : realName
    if (envName === 'VITE_PORT') {
      realName = Number(realName)
    }
    ret[envName] = realName
  }
  return ret
}
