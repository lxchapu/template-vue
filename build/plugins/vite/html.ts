/*
 * @Author: 王嘉哲
 * @Date: 2023-06-06 13:09:50
 * @LastEditors: 杨旭
 * @LastEditTime: 2023-06-06 13:09:50
 * @FilePath: template-vue\build\plugins\vite\html.ts
 * @Description: HTML 插件
 */
import { createHtmlPlugin } from 'vite-plugin-html'

export default (viteEnv: ImportMetaEnv) => {
  return createHtmlPlugin({
    minify: true,
    inject: {
      data: {
        title: viteEnv.VITE_APP_TITLE,
      },
    },
  })
}
