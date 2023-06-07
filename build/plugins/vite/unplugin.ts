import AutoImport from 'unplugin-auto-import/vite'
import Component from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { getRootPath, getSrcPath } from '../../utils'
import { resolve } from 'path'

const rootPath = getRootPath()
const srcPath = getSrcPath()

const componentPath = `${rootPath}/.eslintrc-auto-import.json`
const declarePath = `${srcPath}/typings`

export default [
  Icons({
    scale: 1,
    defaultClass: 'svg-icon',
    autoInstall: true,
    compiler: 'vue3',
    customCollections: {
      custom: FileSystemIconLoader(resolve(srcPath, 'assets/icons')),
    },
  }),

  /** 自动导入组件 */
  Component({
    dirs: ['src/components'],
    dts: `${declarePath}/components.d.ts`,
    resolvers: [
      NaiveUiResolver(),
      IconsResolver({ prefix: 'icon', customCollections: ['custom'] }),
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
