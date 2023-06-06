/*
 * @Author: 王嘉哲
 * @Date: 2023-06-06 13:09:50
 * @LastEditors: 杨旭
 * @LastEditTime: 2023-06-06 13:09:50
 * @FilePath: template-vue\build\plugins\visualizer.ts
 * @Description: 打包体积
 */
import type { Plugin as VitePlugin } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'

export default visualizer({
  gzipSize: true,
  brotliSize: true,
  open: true,
}) as VitePlugin
