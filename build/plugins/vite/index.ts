import type { Plugin as VitePlugin } from 'vite'

import vueMd from 'vite-plugin-vue-markdown'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueLegacy from '@vitejs/plugin-legacy'
import progress from 'vite-plugin-progress'
import unoCSS from 'unocss/vite'
import html from './html'
import visualizer from './visualizer'
import unplugin from './unplugin'

/** 创建 Vite 插件 */
export function createVitePlugins(viteEnv: ImportMetaEnv) {
  const plugins: VitePlugin[] = [
    vue({ include: [/\.vue$/, /\.md$/] }),
    vueMd(),
    vueJsx(),
    vueLegacy({
      modernPolyfills: ['es.global-this', 'es.string.replace-all'],
    }),
    html(viteEnv),
    unoCSS(),
    ...unplugin,
    progress(),
  ]

  if (viteEnv.VITE_VISUALIZER) {
    plugins.push(visualizer)
  }

  return plugins
}
