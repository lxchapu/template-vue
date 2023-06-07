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
