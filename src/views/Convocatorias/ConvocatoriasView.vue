<template>
  <!-- Main content Start -->
  <div class="main-content">
    <!-- Breadcrumbs Start -->
    <div class="sc-breadcrumbs breadcrumbs-overlay">
      <div class="breadcrumbs-img">
        <img src="../../assets/images/breadcrumbs/1.jpg" alt="Breadcrumbs Image" />
      </div>
      <div class="breadcrumbs-text white-color">
        <h1 class="page-title">
          {{ tipo_conv.toUpperCase() }} <br />
          VIGENTES EN LA CARRERA
        </h1>
        <ul>
          <li>
            <router-link :to="{ name: 'home' }" class="active">Home ></router-link>
          </li>
          <li class="active">{{ tipo_conv }}</li>
        </ul>
      </div>
    </div>
    <!-- Breadcrumbs End -->

    <!-- Blog Single Start -->
    <div class="sc-blog-single pt-120 pb-120 md-pt-80 md-pb-80 pl-40 pr-40">
      <div class="row">
        <div class="col-lg-8">
          <!-- Course Section Start -->
          <div id="sc-event-section" class="sc-event-section pb-110 md-pt-80 md-pb-70">
            <div class="container">
              <div class="row">
                <div
                  class="col-lg-6 col-md-6 mb-30 loadcourse addcourse"
                  v-for="(conv, id_conv) in Categoria"
                  :key="id_conv"
                >
                  <div class="events-item">
                    <div class="img-part">
                      <router-link
                        :to="'/detalleConvocatoria/' + conv.idconvocatorias"
                        @click="$store.commit('clickLink')"
                      >
                        <img :src="url_api + '/Convocatorias/' + conv.con_foto_portada" alt="img" />
                      </router-link>
                      <div class="event-price">
                        <span class="price">{{ tipo_conv }}</span>
                      </div>
                    </div>
                    <div class="content-part">
                      <h3 class="title">
                        <router-link
                          :to="'/detalleConvocatoria/' + conv.idconvocatorias"
                          @click="$store.commit('clickLink')"
                        >
                          {{ conv.con_titulo }}
                        </router-link>
                      </h3>
                      <!--<div class="des" v-html="conv.con_descripcion"
                      v-if="tipo_conv != 'avisos'"
                      ></div>-->
                      <ul class="meta-part">
                        <li class="event-date">
                          <i class="fa fa-calendar-check-o"></i>{{ dmy(conv.con_fecha_inicio) }}
                        </li>
                        <li class="event-date">
                          <i class="fa fa-calendar-check-o"></i>{{ dmy(conv.con_fecha_fin) }}
                        </li>
                      </ul>
                      <div class="bottom-part d-flex align-items-center justify-content-center">
                        <div class="event-join">
                          <router-link
                            :to="'/detalleConvocatoria/' + conv.idconvocatorias"
                            class="readmore-text m-auto"
                          >
                            Leer mas
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="loadmore" class="text-center mt-30">
                <a class="readon" href="#"
                  >Learn More <i class="flaticon flaticon-right-arrow"></i>
                </a>
              </div>
            </div>
          </div>
          <!-- Course Section End -->
        </div>
        <div class="col-lg-4 col-md-12 md-mt-60">
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
                <li>
                  <a href="#">General Education <span>2</span></a>
                </li>
                <li>
                  <a href="#">Computer Science <span>4</span></a>
                </li>
                <li>
                  <a href="#">Civil Engineering <span>7</span></a>
                </li>
                <li>
                  <a href="#">Artificial Intelligence <span>5</span></a>
                </li>
                <li>
                  <a href="#">Business Studies <span>2</span></a>
                </li>
                <li>
                  <a href="#">Computer Engineering <span>4</span></a>
                </li>
              </ul>
            </div>

            <div class="posts-tags mb-50 md-mb-0">
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
          </div>
        </div>
      </div>
    </div>
    <!-- Blog Single End -->
  </div>
  <!-- Main content End -->
</template>
<script>
import Services from '@/services/Services'
//import Pagination from 'vue-pagination-2';
//import 'vue-pagination-2/dist/vue-pagination-2.min.js'
import { mapState } from 'vuex'

export default {
  name: 'ConvocatoriasView',
  data() {
    return {
      tipo_conv: 'Institucion',
      Categoria: []
    }
  },
  components: {},
  computed: {
    ...mapState(['url_api'])
  },
  methods: {
    //optenemos el tipo de convocatoria
    async getTipoConvocatoria(tipo_id) {
      try {
        let response = await Services.getTipoConvocatoria(tipo_id)
        this.tipo_conv = response.data.Descripcion.tipo_conv_comun_titulo
      } catch (e) {
        console.log(e)
      }
    },

    //optenemos los registros segun el tipo
    async getCategoria(name, tipo_id) {
      try {
        if (
          name != 'eventos' &&
          name != 'gacetas' &&
          name != 'ofertas' &&
          name != 'publicaciones' &&
          name != 'servicios' &&
          name != 'videos'
        ) {
          this.getTipoConvocatoria(tipo_id)
        } else {
          this.tipo_conv = name
        }

        let valor = this.tipo_conv.toLowerCase()

        switch (valor) {
          case 'avisos':
            await this.getConvocatoriasAll()
            break
          case 'comunicados':
            await this.getConvocatoriasAll()
            break
          case 'convocatorias':
            await this.getConvocatoriasAll()
            break
          case 'cursos':
            await this.getCursosAll()
            break
          case 'seminarios':
            await this.getCursosAll()
            break
          case 'eventos':
            await this.getEventosAll()
            break
          case 'gacetas':
            await this.getGacetasAll()
            break
          case 'ofertas':
            await this.getOfertasAll()
            break
          case 'publicaciones':
            await this.getPublicacionesAll()
            break
          case 'servicios':
            await this.getServiciosAll()
            break
          case 'videos':
            await this.getVideosAll()
            break
          default:
            console.log('error de carga')
        }
      } catch (e) {
        console.log(e)
      }
    },

    //optenemos todos los registros de las convocactorias de la tipo this.tipo
    async getConvocatoriasAll() {
      try {
        const response = await Services.getConvocatoriasAll()
        this.Categoria = []
        response.data.forEach((conv) => {
          if (
            conv.con_estado == '1' &&
            conv.tipo_conv_comun.tipo_conv_comun_titulo == this.tipo_conv
          ) {
            this.Categoria.push(conv)
          }
        })
      } catch (e) {
        console.log(e)
      }
    },

    //optenemos todos los registros de las cursos de la tipo this.tipo
    async getCursosAll() {
      try {
        const response = await Services.getCursosAll()
        this.Categoria = []
        response.data.forEach((conv) => {
          if (
            conv.con_estado == '1' &&
            conv.tipo_conv_comun.tipo_conv_comun_titulo == this.tipo_conv
          ) {
            this.Categoria.push(conv)
          }
        })
      } catch (e) {
        console.log(e)
      }
    },

    //optenemos todos los registros de las eventos de la tipo this.tipo
    async getEventosAll() {
      try {
        const response = await Services.getEventosAll()
        this.Categoria = []
        response.data.forEach((conv) => {
          if (
            conv.con_estado == '1' &&
            conv.tipo_conv_comun.tipo_conv_comun_titulo == this.tipo_conv
          ) {
            this.Categoria.push(conv)
          }
        })
      } catch (e) {
        console.log(e)
      }
    },

    //optenemos todos los registros de las servicios de la tipo this.tipo
    async getServiciosAll() {
      try {
        const response = await Services.getServiciosAll()
        this.Categoria = []
        response.data.forEach((conv) => {
          if (
            conv.con_estado == '1' &&
            conv.tipo_conv_comun.tipo_conv_comun_titulo == this.tipo_conv
          ) {
            this.Categoria.push(conv)
          }
        })
      } catch (e) {
        console.log(e)
      }
    },

    //optenemos todos los registros de las gacetas de la tipo this.tipo
    async getGacetasAll() {
      try {
        const response = await Services.getGacetasAll()
        this.Categoria = []
        response.data.forEach((conv) => {
          if (
            conv.con_estado == '1' &&
            conv.tipo_conv_comun.tipo_conv_comun_titulo == this.tipo_conv
          ) {
            this.Categoria.push(conv)
          }
        })
      } catch (e) {
        console.log(e)
      }
    },

    //optenemos todos los registros de las gacetas de la tipo this.tipo
    async getOfertasAll() {
      try {
        const response = await Services.getOfertasAll()
        this.Categoria = []
        response.data.forEach((conv) => {
          if (
            conv.con_estado == '1' &&
            conv.tipo_conv_comun.tipo_conv_comun_titulo == this.tipo_conv
          ) {
            this.Categoria.push(conv)
          }
        })
      } catch (e) {
        console.log(e)
      }
    },

    //optenemos todos los registros de las publicaciones de la tipo this.tipo
    async getPublicacionesAll() {
      try {
        const response = await Services.getPublicacionesAll()
        this.Categoria = []
        response.data.forEach((conv) => {
          if (
            conv.con_estado == '1' &&
            conv.tipo_conv_comun.tipo_conv_comun_titulo == this.tipo_conv
          ) {
            this.Categoria.push(conv)
          }
        })
      } catch (e) {
        console.log(e)
      }
    },

    //optenemos todos los registros de las videos de la tipo this.tipo
    async getVideosAll() {
      try {
        const response = await Services.getVideosAll()
        this.Categoria = []
        response.data.forEach((conv) => {
          if (
            conv.con_estado == '1' &&
            conv.tipo_conv_comun.tipo_conv_comun_titulo == this.tipo_conv
          ) {
            this.Categoria.push(conv)
          }
        })
      } catch (e) {
        console.log(e)
      }
    },

    //formateamos las fechas a la correcta para el usuario.
    dmy(fecha) {
      const meses = [
        'enero',
        'febrero',
        'marzo',
        'abril',
        'mayo',
        'junio',
        'julio',
        'agosto',
        'septiembre',
        'octubre',
        'noviembre',
        'diciembre'
      ]
      let fechaCadena = fecha.substr(0, 10)
      let fechaArray = fechaCadena.split('-')
      return fechaArray[2] + ' de ' + meses[fechaArray[1] - 1] + ' de ' + fechaArray[0]
    }
  },

  created() {
    this.getCategoria(this.$route.name, this.$route.params.tipo_id)
    console.log("created");
  },
  updated() {
    this.getCategoria(this.$route.name, this.$route.params.tipo_id)
    console.log("update");
  }
  /*mounted() {
    this.getCategoria(this.$route.params.tipo_id)
  },*/
}
</script>
