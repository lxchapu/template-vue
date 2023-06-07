import autoprefixer from 'autoprefixer'
import type { Plugin } from 'postcss'

/** 创建 Postcss 插件 */
export function createPostcssPlugins(viteEnv: ImportMetaEnv): Plugin[] {
  return [autoprefixer()]
}
