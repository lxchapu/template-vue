import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  /* 首页 */
  { path: '/', name: 'Home', component: () => import('@/views/home/index.vue') },
  /* 404 */
  {
    path: '/:path(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
  },
]

export default routes
