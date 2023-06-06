/*
 * @Author: 王嘉哲
 * @Date: 2023-06-06 13:09:50
 * @LastEditors: 杨旭
 * @LastEditTime: 2023-06-06 13:09:50
 * @FilePath: template-vue\build\plugins\vite\index.ts
 * @Description: Vite 插件
 */
import type { Plugin as VitePlugin } from 'vite'

import { resolve } from 'path'
import vueMd from 'vite-plugin-vue-markdown'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueLegacy from '@vitejs/plugin-legacy'
import progress from 'vite-plugin-progress'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { getSrcPath } from '../../utils'
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

    /** svg转精灵图 */
    createSvgIconsPlugin({
      iconDirs: [resolve(getSrcPath(), 'assets/icons')],
      symbolId: 'sprite-[dir]-[name]',
      customDomId: '__svg__icons__dom__',
    }),
  ]

  if (viteEnv.VITE_VISUALIZER) {
    plugins.push(visualizer)
  }

  return plugins
}
