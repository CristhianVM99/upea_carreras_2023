<template>
  <div class="widget-area">
    <div class="search-widget mb-50">
      <div class="search-wrap">
        <input type="search" placeholder="Buscar..." name="" class="search-input" />
        <button type="submit" value="Search">
          <i class="flaticon flaticon-magnifying-glass"></i>
        </button>
      </div>
    </div>
    <div class="widget-archives mb-50">
      <h3 class="widget-title">Categories</h3>
      <ul>
        <li v-for="(conv, id_conv) of this.MenuConvocatorias" :key="id_conv">
          <router-link
            :to="{
              name: 'convocatorias',
              params: {
                tipo: conv.tipo_conv_comun_titulo.toLowerCase()
              }
            }"
            >{{ conv.tipo_conv_comun_titulo.toUpperCase()
            }}<span>{{ contarConv(conv.tipo_conv_comun_titulo) }}</span>
          </router-link>
        </li>
        <li v-for="(cur, id_cur) of MenuCursos" :key="id_cur">
          <router-link
            :to="{
              name: 'cursos',
              params: {
                tipo: cur.tipo_conv_curso_nombre.toLowerCase()
              }
            }"
            >{{ cur.tipo_conv_curso_nombre.toUpperCase() }}
            <span>{{ contarCur(cur.tipo_conv_curso_nombre) }}</span>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{
              name: 'servicios',
              params: {
                tipo: 'servicios'
              }
            }"
            >SERVICIOS <span>{{ Servicios.length }}</span>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{
              name: 'ofertasacademicas',
              params: {
                tipo: 'ofertasacademicas'
              }
            }"
            >OFERTAS ACADEMICAS <span>{{ Ofertas.length }}</span>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{
              name: 'publicaciones',
              params: {
                tipo: 'publicaciones'
              }
            }"
            >PUBLICACIONES <span>{{ Publicaciones.length }}</span></router-link
          >
        </li>
        <li>
          <router-link
            :to="{
              name: 'gacetas',
              params: {
                tipo: 'gacetas'
              }
            }"
            >GACETA <span>{{ Gacetas.length }}</span></router-link
          >
        </li>
        <li>
          <router-link
            :to="{
              name: 'eventos',
              params: {
                tipo: 'eventos'
              }
            }"
            >EVENTOS <span>{{ Eventos.length }}</span> </router-link
          >
        </li>
        <li>
          <router-link
            :to="{
              name: 'videos',
              params: {
                tipo: 'videos'
              }
            }"
            >VIDEOS <span>{{ Videos.length }}</span> </router-link
          >
        </li>
      </ul>
    </div>

    <!--<div class="posts-tags mb-50 md-mb-0">
              <h3 class="widget-title">Tags</h3>
              <ul>
                <li><a href="#">Education</a></li>
                <li><a href="#">Civil Engineering</a></li>
                <li><a href="#">Learning</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Instructor</a></li>
                <li><a href="#">Training</a></li>
              </ul>
            </div>
            -->
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Services from '@/services/Services'
export default {
  name: 'AppLayout',
  data() {
    return {
      Convocatorias: 0,
      Cursos: 0,
      Servicios: [],
      Ofertas: [],
      Publicaciones: [],
      Gacetas: [],
      Eventos: [],
      Videos: []
    }
  },
  computed: {
    ...mapState([
      'url_api',
      'Institucion',
      'MenuConvocatorias',
      'MenuCursos',
      'MenuAreasyCarreras',
      'carrera_id'
    ])
  },
  methods: {
    /*async getMenuConvocatorias() {
      try {
        //optencion de menu de convocatorias.
        const response = await Services.getMenuConvocatorias()

        //filtramos aquellos que siguen vigentes
        const filterConvocatorias = []
        response.data.forEach((data) => {
          if (data.tipo_conv_comun_estado == '1') {
            filterConvocatorias.push(data)
          }
        })
        this.$store.state.MenuConvocatorias = filterConvocatorias
      } catch (e) {
        console.log(e)
      }
    },
    async getMenuCursos() {
      try {
        //optencion del menu de los cursos.
        const response = await Services.getMenuCursos()

        //filtramos aquellos que siguen vigentes
        const filterCursos = []
        response.data.forEach((data) => {
          if (data.tipo_conv_curso_estado == '1') {
            filterCursos.push(data)
          }
        })
        this.$store.state.MenuCursos = filterCursos
      } catch (e) {
        console.log(e)
      }
    },*/
    async getServiciosAll() {
      try {
        const response = await Services.getServiciosAll()
        this.Servicios = response.data
      } catch (e) {
        console.log(e)
      }
    },
    async getOfertasAll() {
      try {
        const response = await Services.getOfertasAll()
        this.Ofertas = response.data
      } catch (e) {
        console.log(e)
      }
    },
    async getPublicaciones() {
      try {
        const response = await Services.getPublicaciones()
        this.Publicaciones = response.data
      } catch (e) {
        console.log(e)
      }
    },
    async getGacetaAll() {
      try {
        const response = await Services.getGacetaAll()
        this.Gacetas = response.data
      } catch (e) {
        console.log(e)
      }
    },
    async getEventos() {
      try {
        const response = await Services.getEventos()
        this.Eventos = response.data
      } catch (e) {
        console.log(e)
      }
    },
    async getVideos() {
      try {
        const response = await Services.getVideos()
        this.Videos = response.data
      } catch (e) {
        console.log(e)
      }
    },
    contarConv(tipo) {
      if (tipo && this.Convocatorias) {
        let count = 0
        this.Convocatorias.forEach((conv) => {
          if (conv.tipo_conv_comun.tipo_conv_comun_titulo == tipo) {
            count++
          }
        })
        return count
      }
    },
    contarCur(tipo) {
      if (tipo && this.Cursos) {
        let count = 0
        this.Cursos.forEach((cur) => {
          if (cur.tipo_curso_otro.tipo_conv_curso_nombre == tipo) {
            count++
          }
        })
        return count
      }
    }
  }
}
</script>
