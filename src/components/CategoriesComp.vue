<template>
  <!-- CONVOCATOARIAS VIEW -->
  <div class="widget-area" v-if="tipo_cat == 1">
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
            >EVENTOS <span>{{ Eventos.length }}</span>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{
              name: 'videos',
              params: {
                tipo: 'videos'
              }
            }"
            >VIDEOS <span>{{ Videos.length }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
  <!-- CONVOCATORIAS DETALLE -->
  <div class="inner-column" v-if="tipo_cat == 2">
    <div class="search-widget mb-50">
      <div class="search-wrap">
        <input type="search" placeholder="Searching..." name="s" class="search-input" value="" />
        <button type="submit" value="Search">
          <i class="flaticon flaticon-magnifying-glass"></i>
        </button>
      </div>
    </div>
    <div class="course-features-info">
      <h4 class="course-title">Category</h4>
      <ul>
        <li class="lectures-feature" v-for="(conv, id_conv) of this.MenuConvocatorias" :key="id_conv">
          <router-link
          :to="{
              name: 'convocatorias',
              params: {
                tipo: conv.tipo_conv_comun_titulo.toLowerCase()
              }
            }"
          ><span class="label">{{ conv.tipo_conv_comun_titulo.toUpperCase() }}</span></router-link>
          <span class="value">{{ contarConv(conv.tipo_conv_comun_titulo) }}</span>
        </li>

        <li class="duration-feature" v-for="(cur, id_cur) of MenuCursos" :key="id_cur">
          <router-link
          :to="{
              name: 'cursos',
              params: {
                tipo: cur.tipo_conv_curso_nombre.toLowerCase()
              }
            }"
          ><span class="label">{{ cur.tipo_conv_curso_nombre.toUpperCase() }}</span></router-link>
          <span class="value">{{ contarCur(cur.tipo_conv_curso_nombre) }}</span>
        </li>

        <li class="quizzes-feature">
          <router-link 
          :to="{
              name: 'servicios',
              params: {
                tipo: 'servicios'
              }
            }"
          ><span class="label">SERVICIOS</span></router-link>
          <span class="value">{{ Servicios.length }}</span>
        </li>      

        <li class="students-feature">
          <router-link
          :to="{
              name: 'ofertasacademicas',
              params: {
                tipo: 'ofertasacademicas'
              }
            }"
          ><span class="label">OFERTAS ACADEMICAS</span></router-link>
          <span class="value">{{ Ofertas.length }}</span>
        </li>

        <li class="assessments-feature">
          <router-link
          :to="{
              name: 'publicaciones',
              params: {
                tipo: 'publicaciones'
              }
            }"
          ><span class="label">PUBLICACIONES</span></router-link>
          <span class="value">{{ Publicaciones.length }}</span>
        </li>

        <li class="assessments-feature">
          <router-link
          :to="{
              name: 'gacetas',
              params: {
                tipo: 'gacetas'
              }
            }"
          ><span class="label">GACETAS</span></router-link>
          <span class="value">{{ Gacetas.length }}</span>
        </li>

        <li class="assessments-feature">
          <router-link
          :to="{
              name: 'eventos',
              params: {
                tipo: 'eventos'
              }
            }"
          ><span class="label">EVENTOS</span></router-link>
          <span class="value">{{ Eventos.length }}</span>
        </li>

        <li class="assessments-feature">
          <router-link
          :to="{
              name: 'videos',
              params: {
                tipo: 'videos'
              }
            }"
          ><span class="label">VIDEOS</span></router-link>
          <span class="value">{{ Videos.length }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Services from '@/services/Services'
export default{
  name: 'AppLayout',
  props: {
    tipo_cat: {
      type: Number
    }
  },
  data() {
    return {
      Convocatorias: [],
      Cursos: [],
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
    async getConvocatoriasAll() {
      try {
        //optenemos todas la convocatoarias de la api
        const response = await Services.getConvocatoriasAll()
        this.Convocatorias = response.data
      } catch (e) {
        console.log(e)
      }
    },

    async getCursosAll() {
      try {
        //optenemos todos los registros de cursos de la api
        const response = await Services.getCursosAll()
        this.Cursos = response.data
      } catch (e) {
        console.log(e)
      }
    },

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
      let count = 0
      this.Convocatorias.forEach((conv) => {
        if (conv.tipo_conv_comun.tipo_conv_comun_titulo == tipo) {
          count++
        }
      })
      return count
    },
    contarCur(tipo) {
      let count = 0
      this.Cursos.forEach((cur) => {
        if (cur.tipo_curso_otro.tipo_conv_curso_nombre == tipo) {
          count++
        }
      })
      return count
    },
    //metodo que ejecuta todos los demas
    createdComponent() {
      this.getConvocatoriasAll()
      this.getCursosAll()
      this.getServiciosAll()
      this.getOfertasAll()
      this.getPublicaciones()
      this.getGacetaAll()
      this.getEventos()
      this.getVideos()
    }
  },
  created() {
    this.createdComponent()
    console.log('el tipo es: ' + this.tipo_cat)
  }
}
</script>
