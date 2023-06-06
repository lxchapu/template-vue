interface ImportMetaEnv {
  /** 标题 */
  readonly VITE_APP_TITLE: string
  /** 端口 */
  readonly VITE_PORT: number
  /** 请求路径 */
  readonly VITE_API_BASE_URL: string
  /** 是否开启打包结果分析 */
  readonly VITE_VISUALIZER: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
