import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'AppLayout',
    component: () => import('@/pages/AppLayout.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/HomeView.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/AboutView.vue')
      },
      {
        path : '/Convocatorias/:tipo_id',
        name : 'convocatorias',
        component: () => import('@/views/Convocatorias/ConvocatoriasView.vue')
      },
      {
        path : '/Cursos/:tipo_id',
        name : 'cursos',
        component: () => import('@/views/Convocatorias/ConvocatoriasView.vue')
      },
      {
        path : '/Mas/Eventos/:tipo_id',
        name : 'eventos',
        component: () => import('@/views/Convocatorias/ConvocatoriasView.vue')
      },
      {
        path : '/Mas/Gacetas/:tipo_id',
        name : 'gacetas',
        component: () => import('@/views/Convocatorias/ConvocatoriasView.vue')
      },
      {
        path : '/Mas/OfertasAcademicas/:tipo_id',
        name : 'ofertasacademicas',
        component: () => import('@/views/Convocatorias/ConvocatoriasView.vue')
      },
      {
        path : '/Mas/Publicaciones/:tipo_id',
        name : 'publicaciones',
        component: () => import('@/views/Convocatorias/ConvocatoriasView.vue')
      },
      {
        path : '/Mas/Servicios/:tipo_id',
        name : 'servicios',
        component: () => import('@/views/Convocatorias/ConvocatoriasView.vue')
      },
      {
        path : '/Mas/Videos/:tipo_id',
        name : 'videos',
        component: () => import('@/views/Convocatorias/ConvocatoriasView.vue')
      },
      {
        path : '/Contacto',
        name : 'contacto',
        component: () => import('@/views/ContactView.vue')
      },
      {
        path : '/Login',
        name : 'login',
        component: () => import('@/views/LoginView.vue')
      },
      {
        path : '/register',
        name : 'register',
        component: () => import('@/views/RegisterView.vue')
      }
    ]
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
