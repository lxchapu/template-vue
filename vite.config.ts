/*
 * @Author: 王嘉哲
 * @Date: 2023-06-06 13:09:50
 * @LastEditors: 杨旭
 * @LastEditTime: 2023-06-06 13:09:50
 * @FilePath: template-vue\vite.config.ts
 * @Description: Vite 配置
 */
import type { ConfigEnv, UserConfig } from 'vite'
import { loadEnv } from 'vite'
import { getSrcPath, getRootPath, wrapperEnv } from './build/utils'
import { createPostcssPlugins, createVitePlugins } from './build/plugins'
import { version } from './package.json'

const appInfo = {
  version,
  release: Date.now(),
}

export default ({ mode }: ConfigEnv): UserConfig => {
  const srcPath = getSrcPath()
  const rootPath = getRootPath()

  const env = loadEnv(mode, rootPath)
  const viteEnv = wrapperEnv(env)

  return {
    plugins: createVitePlugins(viteEnv),
    define: {
      __APP_INFO__: JSON.stringify(appInfo),
    },
    resolve: {
      alias: {
        '@': srcPath,
        '~': rootPath,
      },
    },
    server: {
      host: true,
      port: viteEnv.VITE_PORT,
    },
    css: {
      postcss: {
        plugins: createPostcssPlugins(viteEnv),
      },
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/variable.scss" as *;`,
        },
      },
    },
  }
}
