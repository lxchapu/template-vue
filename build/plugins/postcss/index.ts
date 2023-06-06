/*
 * @Author: 杨旭
 * @Date: 2023-06-06 13:09:50
 * @LastEditors: 杨旭
 * @LastEditTime: 2023-06-06 13:09:50
 * @FilePath: template-vue\build\plugins\postcss\index.ts
 * @Description:  Postcss 插件
 */
import autoprefixer from 'autoprefixer'
import type { Plugin } from 'postcss'

/** 创建 Postcss 插件 */
export function createPostcssPlugins(viteEnv: ImportMetaEnv): Plugin[] {
  return [autoprefixer()]
}
