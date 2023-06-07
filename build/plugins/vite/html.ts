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
