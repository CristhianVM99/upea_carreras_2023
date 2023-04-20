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
          <router-link :to="{ name: 'home' }">
            <button class="btn-page mr-40">
              Home
            </button>
          </router-link> 
          <!--<li class="active tipo_text">{{ tipo_conv.toUpperCase() }}</li>-->
          <button class="btn-page">
            {{ tipo_conv.toUpperCase() }}
          </button>
        </ul>
      </div>
    </div>
    <!-- Breadcrumbs End -->

    <!-- Intro Courses -->
    <section class="sc-course-details pt-120 pb-70 md-pt-80 md-pb-40">
      <div class="container">
        <div class="row clearfix">
          <!-- Convocatorias Avisos Comunicados -->
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
                <!--<div class="share-icons">
                  <span>Comparte en tus redes sociales:</span>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-google"></i></a>
                  <a href="#"><i class="fa fa-pinterest-p"></i></a>
                </div>-->
              </div>
            </div>
          </div>

          <!-- Cursos Seminarios -->
          <div class="col-lg-8 md-mb-60" 
          v-if="
          tipo_conv.toLowerCase() == 'seminarios' ||
          tipo_conv.toLowerCase() == 'cursos' 
          "
          >
            <!-- Intro Info Tabs-->
            <div class="intro-info-tabs">
              <div class="post-img">
                <img :src="url_api + '/Cursos/' + this.Curso.det_img_portada" alt="img" />
              </div>
              <h3>{{ this.Curso.det_titulo }}</h3>
              <div class="event-meta d-flex align-items-center">
                <div class="event-date">
                  <i class="fa fa-calendar"></i>
                  Fecha de inicio
                  <span>{{ dmy(this.Curso.det_fecha_ini) }}</span>
                </div>                
                <div class="event-location">
                    <i class="fa fa-calendar"></i>
                  Fecha final
                  <span>{{ dmy(this.Curso.det_fecha_fin) }}</span>
                </div>
              </div>
              <div class="desc mt-20 mb-30" v-html="this.Curso.det_descripcion">                                
              </div>
              <div class="desc mt-20 mb-30">
                <ul>
                  <li><p><b>Costo del Curso en general : </b> {{ this.Curso.det_costo }} Bs.</p></li>
                  <li><p><b>Costo del Curso para extrangeros : </b> {{ this.Curso.det_costo_ext }} Bs.</p></li>
                  <li><p><b>Costo del Curso para docentes : </b> {{ this.Curso.det_costo_profe }} Bs.</p></li>
                  <li><p><b>Cupo limitado para : </b> {{ this.Curso.det_cupo_max }} Personas</p></li>
                  <li><p><b>Cargar Horaria : </b> {{ this.Curso.det_carga_horaria }} Hrs.</p></li>
                  <li><p><b>Lugar del Curso : </b> {{ this.Curso.det_lugar_curso }}</p></li>
                  <li><p><b>Modalidad : </b> {{ this.Curso.det_modalidad }}</p></li>
                  <li><p><b>Enlace de grupo de WhatsApp : </b> <a href="{{ this.Curso.det_grupo_whatssap }}">Enlace del curso</a></p></li>                
                  <li><p><b>Costo del Curso: </b> {{ this.Curso.det_costo }} Bs.</p></li>
                </ul>
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
                <!--<div class="share-icons">
                  <span>Comparte en tus redes sociales:</span>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-google"></i></a>
                  <a href="#"><i class="fa fa-pinterest-p"></i></a>
                </div>-->
              </div>
            </div>
          </div>

          <!-- Eventos -->
          <div class="col-lg-8 md-mb-60" 
          v-if="
          tipo_conv.toLowerCase() == 'eventos'          
          "
          >
            <!-- Intro Info Tabs-->
            <div class="intro-info-tabs">
              <div class="post-img">
                <img :src="url_api + '/Convocatorias/' + this.Evento.evento_imagen" alt="img" />
              </div>
              <h3>{{ this.Evento.evento_titulo }}</h3>
              <div class="event-meta d-flex align-items-center">
                <div class="event-date">
                  <i class="fa fa-calendar"></i>
                  Fecha de la actividad 
                  <span>{{ dmy(this.Evento.evento_fecha) }}</span>
                </div>
                <!--<div class="event-time">
                  <i class="fa fa-clock-o"></i>
                  <span>12.30AM-05.30PM</span>
                </div>-->
                <!--<div class="event-location">
                    <i class="fa fa-calendar"></i>
                  Lugar
                  <span>{{ dmy(this.Evento.evento_lugar) }}</span>
                </div>-->
              </div>
              <div class="desc mt-20 mb-30" v-html="this.Evento.evento_descripcion">                
              </div>
              <div class="desc mt-20 mb-30">  
                <ul>
                  <li><b>Fecha del Evento</b>: {{ Evento.evento_fecha }}</li>
                  <li><b>Lugar del Evento</b>: {{ Evento.evento_lugar }}</li>
                  <li><b>Hora del Evento</b>: {{ Evento.evento_hora }}</li>
                  
                </ul>
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
                <!--<div class="share-icons">
                  <span>Comparte en tus redes sociales:</span>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-google"></i></a>
                  <a href="#"><i class="fa fa-pinterest-p"></i></a>
                </div>-->
              </div>
            </div>
          </div>

          <!-- Course Sidebar Start -->
          <div class="course-sidebar-area col-lg-4">
            <categories :tipo_cat="tipo_cat"></categories>
          </div>
          <!-- Course Sidebar End -->
        </div>
      </div>
    </section>
    <!-- End intro Courses -->    

    <!-- Course Section Start -->
    <!--<div id="sc-event-section" class="sc-event-section related-course pb-105 md-pb-60">
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
    </div>-->
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
      Video: [],
      tipo_cat: 2,
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
              await this.getCurso(id)
              break
            case 'seminarios':
              await this.getCurso(id)
              break
            case 'eventos':
              await this.getEvento(id)
              break
            case 'gacetas':
              await this.getGaceta(id)
              break
            case 'ofertasacademicas':
              await this.getOferta(id)
              break
            case 'publicaciones':
              await this.getPublicacion(id)
              break
            case 'servicios':
              await this.getServicio(id)
              break
            case 'videos':
              await this.getVideo(id)
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
      } catch (e) {
        console.log(e)
      }
    },

    //optenemos todos los registros de las cursos de la tipo this.tipo
    async getCurso(id) {
      try {
        const response = await Services.getCurso(id)        
        this.Curso = response.data.Descripcion   
      } catch (e) {
        console.log(e)
      }
    },

    //optenemos todos los registros de las eventos de la tipo this.tipo
    async getEvento(id) {
      try {
        const response = await Services.getEvento(id)
        this.Evento = response.data.Descripcion
      } catch (e) {
        console.log(e)
      }
    },

    //optenemos todos los registros de las servicios de la tipo this.tipo
    async getServicio(id) {
      try {
        const response = await Services.getServicio(id)
        this.Servicio = response.data.Descripcion
      } catch (e) {
        console.log(e)
      }
    },

    //optenemos todos los registros de las gacetas de la tipo this.tipo
    async getGaceta(id) {
      try {
        const response = await Services.getGaceta(id)
        this.Gaceta = response.data.Descripcion
      } catch (e) {
        console.log(e)
      }
    },

    //optenemos todos los registros de las gacetas de la tipo this.tipo
    async getOferta(id) {
      try {
        const response = await Services.getOferta(id)
        this.OfertaAcademica = response.data.Descripcion
      } catch (e) {
        console.log(e)
      }
    },

    //optenemos todos los registros de las publicaciones de la tipo this.tipo
    async getPublicacion(id) {
      try {
        const response = await Services.getPublicacion(id)
        this.Publicacion = response.data.Descripcion
      } catch (e) {
        console.log(e)
      }
    },

    //optenemos todos los registros de las videos de la tipo this.tipo
    async getVideo(id) {
      try {
        const response = await Services.getVideo(id)
        this.Video = response.data.Descripcion
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
<style scoped>
.btn-page {
  padding: 0.3em 3em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000 !important;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}
.btn-page a {
  color: #000;
}
.btn-page a:hover {
  color: #fff;
}
.btn-page:hover {
  background-color: var(--main-color);
  box-shadow: 0px 15px 20px var(--main-color-2);
  color: #fff !important;
  transform: translateY(-7px);
}

.btn-page:active {
  transform: translateY(-1px);
}
</style>
