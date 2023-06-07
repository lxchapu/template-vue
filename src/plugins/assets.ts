/*
 * @Author: 王嘉哲
 * @Date: 2023-06-06 13:09:50
 * @LastEditors: 杨旭
 * @LastEditTime: 2023-06-07 16:45:38
 * @FilePath: \template-vue\src\plugins\assets.ts
 * @Description: css及相关资源映引入
 */
/* reset */
import '@unocss/reset/tailwind-compat.css'
/* app */
import '@/styles/index.scss'
/* 虚拟模块：图标精灵图 */
import 'virtual:svg-icons-register'
/* UnoCSS */
import 'virtual:uno.css'
/** 导入样式 */
export function setupAssets() {
  //
}
