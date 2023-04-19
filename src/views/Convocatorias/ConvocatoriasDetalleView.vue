<template>
  <!-- Main content Start -->
  <div class="main-content">
    <!-- Breadcrumbs Start -->
    <div class="sc-breadcrumbs breadcrumbs-overlay">
      <div class="breadcrumbs-img">
        <img src="../../assets/images/breadcrumbs/2.jpg" alt="Breadcrumbs Image" />
      </div>
      <div class="breadcrumbs-text white-color">
        <h1 class="page-title">Events Details</h1>
        <ul>
          <li>
            <router-link :to="{ name : 'home' }">Home</router-link>
          </li>
          <li class="active">{{ tipo_conv }}</li>
        </ul>
      </div>
    </div>
    <!-- Breadcrumbs End -->

    <!-- Intro Courses -->
    <section class="sc-course-details pt-120 pb-70 md-pt-80 md-pb-40">
      <div class="container">
        <div class="row clearfix">
          <!-- Content Column -->
          <div class="col-lg-8 md-mb-60" 
          v-if="
          tipo_conv.toLowerCase() == 'convocatorias' ||
          tipo_conv.toLowerCase() == 'avisos' ||
          tipo_conv.toLowerCase() == 'comunicados'
          "
          >
            <!-- Intro Info Tabs-->
            <div class="intro-info-tabs">
              <div class="post-img">
                <img :src="url_api + '/Convocatorias/' + this.Convocatoria.con_foto_portada" alt="img" />
              </div>
              <h3>{{ this.Convocatoria.con_titulo }}</h3>
              <div class="event-meta d-flex align-items-center">
                <div class="event-date">
                  <i class="fa fa-calendar"></i>
                  Fecha de inicio
                  <span>{{ dmy(this.Convocatoria.con_fecha_inicio) }}</span>
                </div>
                <!--<div class="event-time">
                  <i class="fa fa-clock-o"></i>
                  <span>12.30AM-05.30PM</span>
                </div>-->
                <div class="event-location">
                    <i class="fa fa-calendar"></i>
                  Fecha final
                  <span>{{ dmy(this.Convocatoria.con_fecha_fin) }}</span>
                </div>
              </div>
              <div class="desc mt-20 mb-30" v-html="this.Convocatoria.con_descripcion">                
              </div>
              <h4><i class="fa fa-map-marker"></i> {{ Institucion.institucion_direccion }}</h4>
              <iframe :src="Institucion.institucion_api_google_map" width="100%" height="500px"></iframe>
              <div class="event-share d-flex align-items-center justify-content-between mt-20">
                <div
                  class="btn-part wow fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="2000ms"
                >
                  <!--<a class="readon" href="about.html"
                    >Join Now <i class="flaticon flaticon-right-arrow"></i>
                  </a>-->
                </div>
                <div class="share-icons">
                  <span>Comparte en tus redes sociales:</span>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-google"></i></a>
                  <a href="#"><i class="fa fa-pinterest-p"></i></a>
                </div>
              </div>
            </div>
          </div>

          <!-- Course Sidebar Start -->
          <div class="course-sidebar-area col-lg-4">
            <categories></categories>
          </div>
          <!-- Course Sidebar End -->
        </div>
      </div>
    </section>
    <!-- End intro Courses -->

    <!-- Course Section Start -->
    <div id="sc-event-section" class="sc-event-section related-course pb-105 md-pb-60">
      <div class="container">
        <div class="align-items-center mb-30 md-mb-10">
          <div class="sec-title">
            <h2 class="title mb-0">Related Events</h2>
          </div>
        </div>
        <div
          class="sc-carousel owl-carousel nav-style1"
          data-loop="true"
          data-items="2"
          data-margin="0"
          data-autoplay="true"
          data-hoverpause="true"
          data-autoplay-timeout="5000"
          data-smart-speed="800"
          data-dots="false"
          data-nav="true"
          data-nav-speed="false"
          data-center-mode="false"
          data-mobile-device="1"
          data-mobile-device-nav="true"
          data-mobile-device-dots="false"
          data-ipad-device="2"
          data-ipad-device-nav="true"
          data-ipad-device-dots="false"
          data-ipad-device2="2"
          data-ipad-device-nav2="true"
          data-ipad-device-dots2="false"
          data-md-device="2"
          data-md-device-nav="true"
          data-md-device-dots="false"
        >
          <div class="events-item mb-30 d-flex align-items-center">
            <div class="img-part">
              <a href="course-single.html"
                ><img src="../../assets/images/events/lg1.jpg" alt=""
              /></a>
              <div class="event-price">
                <span class="price">Free</span>
              </div>
            </div>
            <div class="content-part">
              <h3 class="title"><a href="course-single.html">Student Exchange Program</a></h3>
              <div class="des">Excepteur sint occaecat cupidatat non proident, sunt in culpa</div>
              <ul class="meta-part">
                <li class="event-time">
                  <i class="fa fa-clock-o" aria-hidden="true"></i> 5:30 PM - 06:30 PM
                </li>
                <li class="event-date"><i class="fa fa-calendar-check-o"></i>July 02, 2021</li>
              </ul>
              <div class="bottom-part d-flex align-items-center justify-content-between">
                <div class="address"><i class="fa fa-map-o"></i> New Margania</div>
                <div class="event-join">
                  <a href="#">Join Event</a>
                </div>
              </div>
            </div>
          </div>
          <div class="events-item mb-30 d-flex align-items-center">
            <div class="img-part">
              <a href="course-single.html"
                ><img src="../../assets/images/events/lg2.jpg" alt=""
              /></a>
              <div class="event-price">
                <span class="price">$35</span>
              </div>
            </div>
            <div class="content-part">
              <h3 class="title"><a href="course-single.html">Reinventing Experiences</a></h3>
              <div class="des">Excepteur sint occaecat cupidatat non proident, sunt in culpa</div>
              <ul class="meta-part">
                <li class="event-time">
                  <i class="fa fa-clock-o" aria-hidden="true"></i> 5:30 PM - 06:30 PM
                </li>
                <li class="event-date"><i class="fa fa-calendar-check-o"></i>July 24, 2021</li>
              </ul>
              <div class="bottom-part d-flex align-items-center justify-content-between">
                <div class="address"><i class="fa fa-map-o"></i> New Margania</div>
                <div class="event-join">
                  <a href="#">Join Event</a>
                </div>
              </div>
            </div>
          </div>
          <div class="events-item mb-30 d-flex align-items-center">
            <div class="img-part">
              <a href="course-single.html"
                ><img src="../../assets/images/events/lg3.jpg" alt=""
              /></a>
              <div class="event-price">
                <span class="price">$45</span>
              </div>
            </div>
            <div class="content-part">
              <h3 class="title"><a href="course-single.html">Creativity Across Cultures</a></h3>
              <div class="des">Excepteur sint occaecat cupidatat non proident, sunt in culpa</div>
              <ul class="meta-part">
                <li class="event-time">
                  <i class="fa fa-clock-o" aria-hidden="true"></i> 3:30 PM - 05:30 PM
                </li>
                <li class="event-date"><i class="fa fa-calendar-check-o"></i>July 24, 2021</li>
              </ul>
              <div class="bottom-part d-flex align-items-center justify-content-between">
                <div class="address"><i class="fa fa-map-o"></i> New Margania</div>
                <div class="event-join">
                  <a href="#">Join Event</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Course Section End -->
  </div>
  <!-- Main content End -->
</template>
<script>
import Categories from '../../components/CategoriesComp.vue';
import Services from '@/services/Services'
import { mapState } from 'vuex'
export default {    
  name: 'ConvocatoriasDetalleView',
  data() {
    return {
      id: 0,
      tipo_conv: 'Upea',
      Convocatoria: [],
      Curso: [],
      Servicio: [],
      OfertaAcademica: [],
      Publicacion: [],
      Gaceta: [],
      Evento: [],
      Video: []
    }
  },
  components:{
    Categories
  },
  computed: {
    ...mapState(['url_api','Institucion',])
  },
  methods: {
    //optenemos los registros segun el tipo
    async getDetalleConvocatoria(id,tipo) {
      this.tipo_conv = tipo
      this.id = id
      //console.log('parametro: ' + tipo_conv)
      //console.log('valor actual: ' + this.tipo_conv)
      try {
        if (this.tipo_conv != 'Upea') {
          switch (this.tipo_conv.toLowerCase()) {
            case 'avisos':
              await this.getConvocatoria(id)
              break
            case 'comunicados':
              await this.getConvocatoria(id)
              break
            case 'convocatorias':
              await this.getConvocatoria(id)
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
            case 'ofertasacademicas':
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
        }
      } catch (e) {
        console.log(e)
      }
    },

    //optenemos todos los registros de las convocactorias de la tipo this.tipo
    async getConvocatoria(id) {
      try {
        const response = await Services.getConvocatoria(id)
        this.Convocatoria = response.data.Descripcion        
        console.log(this.Convocatoria)
      } catch (e) {
        console.log(e)
      }
    },

    //optenemos todos los registros de las cursos de la tipo this.tipo
    async getCursosAll() {
      try {
        const response = await Services.getCursosAll()
        this.Cursos = []
        //console.log('cursos')
        //console.log(response)
        response.data.forEach((conv) => {
          if (
            conv.tipo_curso_otro.tipo_conv_curso_estado == '1' &&
            conv.tipo_curso_otro.tipo_conv_curso_nombre == this.tipo_conv.toUpperCase() &&
            conv.iddetalle_cursos_academicos == this.id
          ) {
            this.Cursos.push(conv)
          }
        })
      } catch (e) {
        console.log(e)
      }
    },

    //optenemos todos los registros de las eventos de la tipo this.tipo
    async getEventosAll() {
      try {
        const response = await Services.getEventos()
        this.Eventos = []
        response.data.forEach((conv) => {
          this.Eventos.push(conv)
        })
      } catch (e) {
        console.log(e)
      }
    },

    //optenemos todos los registros de las servicios de la tipo this.tipo
    async getServiciosAll() {
      try {
        const response = await Services.getServiciosAll()
        this.Servicios = []
        response.data.forEach((conv) => {
          this.Servicios.push(conv)
        })
      } catch (e) {
        console.log(e)
      }
    },

    //optenemos todos los registros de las gacetas de la tipo this.tipo
    async getGacetasAll() {
      try {
        const response = await Services.getGacetaAll()
        this.Gacetas = []
        response.data.forEach((conv) => {
          this.Gacetas.push(conv)
        })
      } catch (e) {
        console.log(e)
      }
    },

    //optenemos todos los registros de las gacetas de la tipo this.tipo
    async getOfertasAll() {
      try {
        const response = await Services.getOfertasAll()
        this.OfertasAcademicas = []
        response.data.forEach((conv) => {
          this.OfertasAcademicas.push(conv)
        })
      } catch (e) {
        console.log(e)
      }
    },

    //optenemos todos los registros de las publicaciones de la tipo this.tipo
    async getPublicacionesAll() {
      try {
        const response = await Services.getPublicaciones()
        this.Publicaciones = []
        response.data.forEach((conv) => {
          this.Publicaciones.push(conv)
        })
      } catch (e) {
        console.log(e)
      }
    },

    //optenemos todos los registros de las videos de la tipo this.tipo
    async getVideosAll() {
      try {
        const response = await Services.getVideos()
        this.Videos = []
        response.data.forEach((conv) => {
          this.Videos.push(conv)
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
    this.getDetalleConvocatoria(this.$route.params.idconv,this.$route.params.tipo)
    console.log(this.$route.params.idconv)
    console.log(this.$route.params.tipo)
  },
}
</script>
