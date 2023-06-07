import type { ConfigEnv, UserConfig } from 'vite'
import { loadEnv } from 'vite'
import { getSrcPath, getRootPath, wrapViteEnv } from './build/utils'
import { createPostcssPlugins, createVitePlugins } from './build/plugins'
import { version } from './package.json'

const appInfo = {
  version,
  release: Date.now(),
}

export default ({ mode }: ConfigEnv): UserConfig => {
  const srcPath = getSrcPath()
  const rootPath = getRootPath()

  const viteEnv = wrapViteEnv(loadEnv(mode, rootPath))

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
