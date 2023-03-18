import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'AppLayout',
    component: () => import('@/pages/AppLayout.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404Page',
    component: () => import('@/pages/404Page.vue')
  },
  {
    path: '/error_network',
    name: 'error_network',
    component: () => import('@/pages/404Page.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL)
})

export default router
