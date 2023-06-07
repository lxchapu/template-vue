/*
 * @Author: 杨旭
 * @Date: 2023-06-06 13:09:50
 * @LastEditors: 杨旭
 * @LastEditTime: 2023-06-07 16:06:54
 * @FilePath: \template-vue\uno.config.ts
 * @Description: UnoCSS 配置
 */
import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno()],
  rules: [
    [
      'ellipsis',
      {
        overflow: 'hidden',
        'text-overflow': 'ellipsis',
        'white-space': 'nowrap',
      },
    ],
    [
      /^ellipsis-l(\d+)$/,
      ([, d]) => ({
        display: '-webkit-box',
        overflow: 'hidden',
        'text-overflow': 'ellipsis',
        'word-break': 'break-all',
        '-webkit-box-orient': 'vertical',
        '-webkit-line-clamp': d,
      }),
    ],
  ],
  shortcuts: {
    'wh-full': 'w-full h-full',
  },
})
