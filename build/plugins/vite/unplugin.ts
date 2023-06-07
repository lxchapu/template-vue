import AutoImport from 'unplugin-auto-import/vite'
import Component from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { getRootPath, getSrcPath } from '../../utils'

const rootPath = getRootPath()
const srcPath = getSrcPath()

const componentPath = `${rootPath}/.eslintrc-auto-import.json`
const declarePath = `${srcPath}/typings`

const IconifyVueResolver = () => {
  return (componentName: string) => {
    if (componentName === 'Icon') return { name: componentName, from: '@iconify/vue' }
  }
}
export default [
  Icons({ autoInstall: true }),

  /** 自动导入组件 */
  Component({
    dirs: ['src/components'],
    dts: `${declarePath}/components.d.ts`,
    resolvers: [
      NaiveUiResolver(),
      IconsResolver({ customCollections: ['custom'], componentPrefix: 'icon' }),
      IconifyVueResolver(),
    ],
  }),

  /** 自动导入API */
  AutoImport({
    dts: `${declarePath}/auto-imports.d.ts`,
    imports: ['vue', 'vue-router', 'pinia'],
    eslintrc: {
      enabled: false,
      filepath: componentPath,
      globalsPropValue: true,
    },
  }),
]
