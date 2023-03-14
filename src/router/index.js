import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('@/pages/AppLayout.vue'),
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL),

})

export default router;