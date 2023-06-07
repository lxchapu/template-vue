import type { RouterScrollBehavior } from 'vue-router'
/**
 * 定位滚动行为
 * @param {*} to
 * @param {*} from
 * @param {*} savePosition
 */
export const scrollBehavior: RouterScrollBehavior = (to, from, savePosition) => {
  if (to.hash && document.querySelector(to.hash))
    return { el: document.querySelector(to.hash), behavior: 'smooth' }
  else if (savePosition) return savePosition
  else return { top: 0, left: 0 }
}
