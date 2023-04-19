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
        path : '/Convocatorias/:tipo',
        name : 'convocatorias',
        component: () => import('@/views/Convocatorias/ConvocatoriasView.vue')
      },
      {
        path : '/Cursos/:tipo',
        name : 'cursos',
        component: () => import('@/views/Convocatorias/ConvocatoriasView.vue')
      },
      {
        path : '/Mas/Eventos/:tipo',
        name : 'eventos',
        component: () => import('@/views/Convocatorias/ConvocatoriasView.vue')
      },
      {
        path : '/Mas/Gacetas/:tipo',
        name : 'gacetas',
        component: () => import('@/views/Convocatorias/ConvocatoriasView.vue')
      },
      {
        path : '/Mas/OfertasAcademicas/:tipo',
        name : 'ofertasacademicas',
        component: () => import('@/views/Convocatorias/ConvocatoriasView.vue')
      },
      {
        path : '/Mas/Publicaciones/:tipo',
        name : 'publicaciones',
        component: () => import('@/views/Convocatorias/ConvocatoriasView.vue')
      },
      {
        path : '/Mas/Servicios/:tipo',
        name : 'servicios',
        component: () => import('@/views/Convocatorias/ConvocatoriasView.vue')
      },
      {
        path : '/Mas/Videos/:tipo',
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
      },
      {
        path : '/ConvocatoriaDetalle/:tipo/:idconv',
        name : 'convocatoriadetalle',
        component :()=> import('@/views/Convocatorias/ConvocatoriasDetalleView.vue')
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
