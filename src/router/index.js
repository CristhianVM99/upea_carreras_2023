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
        path : '/Convocatorias/Avisos',
        name : 'avisos',
        component: () => import('@/views/Convocatorias/AvisosView.vue')
      },
      {
        path : '/Convocatorias/Comunicados',
        name : 'comunicados',
        component: () => import('@/views/Convocatorias/ComunicadosView.vue')
      },
      {
        path : '/Convocatorias/Convocatorias',
        name : 'convocatorias',
        component: () => import('@/views/Convocatorias/ConvocatoriasView.vue')
      },
      {
        path : '/Cursos/Cursos',
        name : 'cursos',
        component: () => import('@/views/Cursos/CursosView.vue')
      },
      {
        path : '/Cursos/Seminarios',
        name : 'seminarios',
        component: () => import('@/views/Cursos/SeminariosView.vue')
      },
      {
        path : '/Mas/Eventos',
        name : 'eventos',
        component: () => import('@/views/Mas/EventosView.vue')
      },
      {
        path : '/Mas/Gacetas',
        name : 'gacetas',
        component: () => import('@/views/Mas/GacetasView.vue')
      },
      {
        path : '/Mas/OfertasAcademicas',
        name : 'ofertasacademicas',
        component: () => import('@/views/Mas/OfertasAcademicasView.vue')
      },
      {
        path : '/Mas/Publicaciones',
        name : 'publicaciones',
        component: () => import('@/views/Mas/PublicacionesView.vue')
      },
      {
        path : '/Mas/Servicios',
        name : 'servicios',
        component: () => import('@/views/Mas/ServiciosView.vue')
      },
      {
        path : '/Mas/Videos',
        name : 'videos',
        component: () => import('@/views/Mas/VideosView.vue')
      },
      {
        path : '/Contacto',
        name : 'contacto',
        component: () => import('@/views/ContactView.vue')
      },
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
