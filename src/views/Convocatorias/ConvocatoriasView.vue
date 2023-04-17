<template>
  <!-- Main content Start -->
  <div class="main-content">
    <!-- Breadcrumbs Start -->
    <div class="sc-breadcrumbs breadcrumbs-overlay">
      <div class="breadcrumbs-img">
        <img src="../../../public/bgUpea.jpg" alt="Breadcrumbs Image" />
      </div>
      <div class="breadcrumbs-text white-color">
        <h1 class="page-title">
          {{ tipo_conv.toUpperCase() }} <br />
          VIGENTES EN LA CARRERA
        </h1>
        <ul>
          <button class="btn-page mr-40">
            <router-link :to="{ name: 'home' }"> Home </router-link>
          </button>
          <!--<li class="active tipo_text">{{ tipo_conv.toUpperCase() }}</li>-->
          <button class="btn-page">
            {{ tipo_conv.toUpperCase() }}
          </button>
        </ul>
      </div>
    </div>
    <!-- Breadcrumbs End -->

    <!-- Blog Single Start -->
    <div class="sc-blog-single pt-120 md-pt-80 md-pb-80 pl-40 pr-40">
      <div class="row">
        <div class="col-lg-9">
          <!-- Course Section Start -->
          <div id="sc-event-section" class="sc-event-section pb-50 md-pt-80 md-pb-70">
            <div class="">
              <!-- Convocatorias -->
              <swiper
                :modules="modules"
                :slidesPerView="3"
                :centeredSlides="true"
                :spaceBetween="30"
                :pagination="{
                  type: 'fraction'
                }"
                :navigation="true"
                :virtual="true"
                class="mySwiper grid-conv"
                @swiper="setSwiperRef"
                v-if="
                  tipo_conv.toLowerCase() == 'convocatorias' ||
                  tipo_conv.toLowerCase() == 'avisos' ||
                  tipo_conv.toLowerCase() == 'comunicados'
                "
              >
                <swiper-slide
                  v-for="(conv, id_conv) in Convocatorias"
                  :key="id_conv"
                  :virtualIndex="id_conv"
                  class=""
                >                  
                  <div class="col-lg-12 col-md-6 mb-30 loadcourse addcourse">
                    <div class="events-item">
                      <div class="img-part">
                        <img :src="url_api + '/Convocatorias/' + conv.con_foto_portada" alt="img" />
                        <div class="event-price">
                          <span class="price">{{ tipo_conv }}</span>
                        </div>
                      </div>
                      <div class="content-part">
                        <h3 class="title">{{ conv.con_titulo }}</h3>
                        <ul class="meta-part">
                          <li class="event-date">
                            <i class="fa fa-calendar-check-o"></i>{{ dmy(conv.con_fecha_inicio) }}
                          </li>
                          <li class="event-date">
                            <i class="fa fa-calendar-check-o"></i>{{ dmy(conv.con_fecha_fin) }}
                          </li>
                        </ul>
                        <div class="bottom-part d-flex align-items-center justify-content-center">
                          <div class="">
                            <router-link
                              :to="'/detalleConvocatoria/' + conv.idconvocatorias"
                              class="btn-conv"
                              >
                              <span>Leer Mas</span>
                              </router-link
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
              <!-- Cursos -->
              <swiper
                :modules="modules"
                :slidesPerView="3"
                :centeredSlides="true"
                :spaceBetween="30"
                :pagination="{
                  type: 'fraction'
                }"
                :navigation="true"
                :virtual="true"
                class="mySwiper grid-conv"
                @swiper="setSwiperRef"
                v-if="
                  tipo_conv.toLowerCase() == 'seminarios' || tipo_conv.toLowerCase() == 'cursos'
                "
              >
                <swiper-slide
                  v-for="(cur, id_cur) in Cursos"
                  :key="id_cur"
                  :virtualIndex="id_cur"
                  class="card-content"
                >                 
                  <div class="col-lg-12 col-md-6 mb-30 loadcourse addcourse">
                    <div class="events-item">
                      <div class="img-part">
                        <img :src="url_api + '/Cursos/' + cur.det_img_portada" alt="img" />
                        <div class="event-price">
                          <span class="price">{{ tipo_conv }}</span>
                        </div>
                      </div>
                      <div class="content-part">
                        <h3 class="title">{{ cur.det_titulo }}</h3>
                        <ul class="meta-part">
                          <li class="event-date">
                          <i class="fa fa-calendar-check-o"></i>{{ dmy(cur.det_fecha_ini) }}
                        </li>
                        <li class="event-date">
                          <i class="fa fa-calendar-check-o"></i>{{ dmy(cur.det_fecha_fin) }}
                        </li>
                        </ul>
                        <div class="bottom-part d-flex align-items-center justify-content-center">
                          <div class="">
                            <router-link
                              :to="'/detalleCurso/' + cur.iddetalle_cursos_academicos"
                              class="btn-conv"
                              >
                              <span>Leer Mas</span>
                              </router-link
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
              <!-- Servicios -->
              <swiper
                :modules="modules"
                :slidesPerView="3"
                :centeredSlides="true"
                :spaceBetween="30"
                :pagination="{
                  type: 'fraction'
                }"
                :navigation="true"
                :virtual="true"
                class="mySwiper grid-conv"
                @swiper="setSwiperRef"
                v-if="tipo_conv.toLowerCase() == 'servicios'"
              >
                <swiper-slide
                  v-for="(serv, id_serv) in Servicios"
                  :key="id_serv"
                  :virtualIndex="id_serv"
                  class="card-content"
                >
                  <div class="card col-lg-12 col-md-6 mb-30 loadcourse addcourse">
                    <div class="card-image">
                      <img
                        :src="url_api + '/Carrera/Servicios/' + serv.serv_imagen"
                        alt="img"
                        width="300"
                      />
                    </div>
                    <div class="card-description">
                      <h3 class="title">
                        {{ serv.serv_nombre }}
                      </h3>
                      <ul class="meta-part">
                        <li class="event-date">
                          <i class="fa fa-calendar-check-o"></i>{{ dmy(serv.serv_registro) }}
                        </li>
                        <li class="event-date">
                          <i class="fa fa-phone"></i>{{ serv.serv_nro_celular }}
                        </li>
                      </ul>
                      <div class="bottom-part d-flex align-items-center justify-content-between">
                        <div class="event-join">
                          <router-link :to="'/detalleServicio/' + serv.serv_id" class="btn-conv"
                            >Leer Mas</router-link
                          >
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-12 col-md-6 mb-30 loadcourse addcourse">
                    <div class="events-item">
                      <div class="img-part">
                        <img
                        :src="url_api + '/Carrera/Servicios/' + serv.serv_imagen"
                        alt="img"
                        width="300"
                      />
                        <div class="event-price">
                          <span class="price">{{ tipo_conv }}</span>
                        </div>
                      </div>
                      <div class="content-part">
                        <h3 class="title">{{ serv.serv_nombre }}</h3>
                        <ul class="meta-part">
                          <li class="event-date">
                          <i class="fa fa-calendar-check-o"></i>{{ dmy(serv.serv_registro) }}
                        </li>
                        <li class="event-date">
                          <i class="fa fa-phone"></i>{{ serv.serv_nro_celular }}
                        </li>
                        </ul>
                        <div class="bottom-part d-flex align-items-center justify-content-center">
                          <div class="">
                            <router-link
                            :to="'/detalleServicio/' + serv.serv_id"
                              class="btn-conv"
                              >
                              <span>Leer Mas</span>
                              </router-link
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
              <!-- Ofertas Academicas -->
              <swiper
                :modules="modules"
                :slidesPerView="3"
                :centeredSlides="true"
                :spaceBetween="30"
                :pagination="{
                  type: 'fraction'
                }"
                :navigation="true"
                :virtual="true"
                class="mySwiper grid-conv"
                @swiper="setSwiperRef"
                v-if="tipo_conv.toLowerCase() == 'ofertasacademicas'"
              >
                <swiper-slide
                  v-for="(ofer, id_ofer) in OfertasAcademicas"
                  :key="id_ofer"
                  :virtualIndex="id_ofer"
                  class="grid-conv-item"
                >
                  <div class="card col-lg-12 col-md-6 mb-30 loadcourse addcourse">
                    <div class="card-image">
                      <img
                        :src="url_api + '/Carrera/OfertasAcademicas/' + ofer.ofertas_imagen"
                        alt="img"
                        width="200"
                      />
                    </div>
                    <div class="card-description">
                      <h3 class="title">
                        {{ ofer.ofertas_titulo }}
                      </h3>
                      <ul class="meta-part">
                        <li class="event-date">
                          <i class="fa fa-calendar-check-o"></i
                          >{{ dmy(ofer.ofertas_inscripciones_fin) }}
                        </li>
                      </ul>
                      <div class="bottom-part d-flex align-items-center justify-content-between">
                        <div class="event-join">
                          <router-link :to="'/detalleOferta/' + ofer.ofertas_id" class="btn-conv"
                            >Leer Mas</router-link
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
              <!-- Publicaciones -->
              <swiper
                :modules="modules"
                :slidesPerView="3"
                :centeredSlides="true"
                :spaceBetween="30"
                :pagination="{
                  type: 'fraction'
                }"
                :navigation="true"
                :virtual="true"
                class="mySwiper grid-conv"
                @swiper="setSwiperRef"
                v-if="tipo_conv.toLowerCase() == 'publicaciones'"
              >
                <swiper-slide
                  v-for="(pub, id_pub) in Publicaciones"
                  :key="id_pub"
                  :virtualIndex="id_pub"
                  class="grid-conv-item"
                >
                  <div class="col-lg-12 col-md-6 mb-30 loadcourse addcourse">
                    <div class="events-item">
                      <div class="img-part">
                        <router-link
                          :to="'/detallePublicacion/' + pub.publicaciones_id"
                          @click="$store.commit('clickLink')"
                        >
                          <img
                            :src="url_api + '/Publicaciones/' + pub.publicaciones_imagen"
                            alt="img"
                          />
                        </router-link>
                        <div class="event-price">
                          <span class="price">{{ tipo_conv }}</span>
                        </div>
                      </div>
                      <div class="content-part">
                        <h3 class="title">
                          <router-link
                            :to="'/detallePublicacion/' + pub.publicaciones_id"
                            @click="$store.commit('clickLink')"
                          >
                            {{ pub.publicaciones_titulo }}
                          </router-link>
                        </h3>
                        <!--<div class="des" v-html="conv.con_descripcion"
                      v-if="tipo_conv != 'avisos'"
                      ></div>-->
                        <ul class="meta-part">
                          <li class="event-date">
                            <i class="fa fa-calendar-check-o"></i>{{ dmy(pub.publicaciones_fecha) }}
                          </li>
                          <li class="event-date">Por: {{ pub.publicaciones_autor }}</li>
                        </ul>
                        <div class="bottom-part d-flex align-items-center justify-content-center">
                          <div class="event-join">
                            <router-link
                              :to="'/detallePublicacion/' + pub.publicaciones_id"
                              class="readmore-text m-auto readon"
                            >
                              Leer mas<i class="flaticon flaticon-right-arrow"></i>
                            </router-link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
              <!-- Gaceta -->
              <swiper
                :modules="modules"
                :slidesPerView="3"
                :centeredSlides="true"
                :spaceBetween="30"
                :pagination="{
                  type: 'fraction'
                }"
                :navigation="true"
                :virtual="true"
                class="mySwiper grid-conv"
                @swiper="setSwiperRef"
                v-if="tipo_conv.toLowerCase() == 'gacetas'"
              >
                <swiper-slide
                  v-for="(gac, id_gac) in Gacetas"
                  :key="id_gac"
                  :virtualIndex="id_gac"
                  class="grid-conv-item"
                >
                  <div class="col-lg-12 col-md-6 mb-30 loadcourse addcourse">
                    <div class="events-item">
                      <div class="img-part">
                        <vue-pdf-embed
                          :source="url_api + '/Gaceta/' + gac.gaceta_documento"
                          :page="1"
                        />
                        <div class="event-price">
                          <span class="price">{{ tipo_conv }}</span>
                        </div>
                      </div>
                      <div class="content-part">
                        <h3 class="title">
                          <a>
                            {{ gac.gaceta_titulo }}
                          </a>
                        </h3>
                        <!--<div class="des" v-html="conv.con_descripcion"
                      v-if="tipo_conv != 'avisos'"
                      ></div>-->
                        <ul class="meta-part">
                          <li class="event-date">
                            <i class="fa fa-calendar-check-o"></i>{{ dmy(gac.gaceta_fecha) }}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
              <!-- Eventos -->
              <swiper
                :modules="modules"
                :slidesPerView="3"
                :centeredSlides="true"
                :spaceBetween="30"
                :pagination="{
                  type: 'fraction'
                }"
                :navigation="true"
                :virtual="true"
                class="mySwiper grid-conv"
                @swiper="setSwiperRef"
                v-if="tipo_conv.toLowerCase() == 'eventos'"
              >
                <swiper-slide
                  v-for="(ev, id_ev) in Eventos"
                  :key="id_ev"
                  :virtualIndex="id_ev"
                  class="grid-conv-item"
                >
                  <div class="col-lg-12 col-md-6 mb-30 loadcourse addcourse">
                    <div class="events-item">
                      <div class="img-part">
                        <router-link
                          :to="'/detalleEvento/' + ev.evento_id"
                          @click="$store.commit('clickLink')"
                        >
                          <img
                            :src="url_api + '/Eventos/' + ev.evento_imagen"
                            alt="img"
                            width="200"
                          />
                        </router-link>
                        <div class="event-price">
                          <span class="price">{{ tipo_conv }}</span>
                        </div>
                      </div>
                      <div class="content-part">
                        <h3 class="title">
                          <router-link
                            :to="'/detalleEvento/' + ev.evento_id"
                            @click="$store.commit('clickLink')"
                          >
                            {{ ev.evento_titulo }}
                          </router-link>
                        </h3>
                        <!--<div class="des" v-html="conv.con_descripcion"
                      v-if="tipo_conv != 'avisos'"
                      ></div>-->
                        <ul class="meta-part">
                          <li class="event-date">
                            <i class="fa fa-calendar-check-o"></i>{{ dmy(ev.evento_fecha) }}
                          </li>
                          <li class="event-date">
                            <i class="fa fa-map-marker"></i>{{ ev.evento_lugar }}
                          </li>
                        </ul>
                        <div class="bottom-part d-flex align-items-center justify-content-center">
                          <div class="event-join">
                            <router-link
                              :to="'/detalleEvento/' + ev.evento_id"
                              class="readmore-text m-auto readon"
                            >
                              Leer mas<i class="flaticon flaticon-right-arrow"></i>
                            </router-link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
              <!-- Videos -->
              <swiper
                :modules="modules"
                :slidesPerView="3"
                :centeredSlides="true"
                :spaceBetween="30"
                :pagination="{
                  type: 'fraction'
                }"
                :navigation="true"
                :virtual="true"
                class="mySwiper grid-conv"
                @swiper="setSwiperRef"
                v-if="tipo_conv.toLowerCase() == 'videos'"
              >
                <swiper-slide
                  v-for="(vid, id_vid) in Videos"
                  :key="id_vid"
                  :virtualIndex="id_vid"
                  class="grid-conv-item"
                >
                  <div class="col-lg-12 col-md-6 mb-30 loadcourse addcourse">
                    <div class="events-item">
                      <div class="img-part">
                        <router-link
                          :to="'/detalleVideo/' + vid.video_id"
                          @click="$store.commit('clickLink')"
                        >
                          <iframe
                            :src="vid.video_enlace"
                            frameborder="0"
                            style="border-radius: 5px"
                          />
                        </router-link>
                        <div class="event-price">
                          <span class="price">{{ tipo_conv }}</span>
                        </div>
                      </div>
                      <div class="content-part">
                        <h3 class="title">
                          <router-link
                            :to="'/detalleVideo/' + vid.video_id"
                            @click="$store.commit('clickLink')"
                          >
                            {{ vid.video_titulo }}
                          </router-link>
                        </h3>
                        <!--<div class="des" v-html="conv.con_descripcion"
                      v-if="tipo_conv != 'avisos'"
                      ></div>-->
                        <div class="bottom-part d-flex align-items-center justify-content-center">
                          <div class="event-join">
                            <router-link
                              :to="'/detalleVideo/' + vid.video_id"
                              class="readmore-text m-auto readon"
                            >
                              Leer mas<i class="flaticon flaticon-right-arrow"></i>
                            </router-link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>

          <!-- Course Section End -->
        </div>
        <div class="col-lg-3 col-md-12 md-mt-60">
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
        </div>
      </div>
    </div>
    <!-- Blog Single End -->
  </div>
  <!-- Main content End -->
</template>
<script>
import Services from '@/services/Services'
import { mapState } from 'vuex'

import { ref } from 'vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/virtual'

import VuePdfEmbed from 'vue-pdf-embed'

// import Swiper core and required modules
import { Pagination, Navigation, Virtual } from 'swiper'
export default {
  name: 'ConvocatoriasView',
  data() {
    return {
      tipo_conv: 'Upea',
      Convocatorias: [],
      Cursos: [],
      Servicios: [],
      OfertasAcademicas: [],
      Publicaciones: [],
      Gacetas: [],
      Eventos: [],
      Videos: []
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    VuePdfEmbed
  },
  setup() {
    // Create array with 500 slides
    const slides = ref(Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`))
    let swiperRef = null
    let appendNumber = 500
    let prependNumber = 1

    const setSwiperRef = (swiper) => {
      swiperRef = swiper
    }
    const slideTo = (index) => {
      swiperRef.slideTo(index - 1, 0)
    }
    const append = () => {
      slides.value = [...slides.value, 'Slide ' + ++appendNumber]
    }
    const prepend = () => {
      slides.value = [`Slide ${prependNumber - 2}`, `Slide ${prependNumber - 1}`, ...slides.value]
      prependNumber -= 2
      swiperRef.slideTo(swiperRef.activeIndex + 2, 0)
    }
    return {
      slides,
      swiperRef: null,
      appendNumber,
      prependNumber,
      setSwiperRef,
      slideTo,
      append,
      prepend,
      modules: [Pagination, Navigation, Virtual]
    }
  },
  computed: {
    ...mapState(['url_api'])
  },
  methods: {
    //optenemos los registros segun el tipo
    async getCategoria(tipo_conv) {
      this.tipo_conv = tipo_conv
      console.log('parametro: ' + tipo_conv)
      console.log('valor actual: ' + this.tipo_conv)
      try {
        if (this.tipo_conv != 'Upea') {
          switch (this.tipo_conv.toLowerCase()) {
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
    async getConvocatoriasAll() {
      try {
        const response = await Services.getConvocatoriasAll()
        this.Convocatorias = []
        response.data.forEach((conv) => {
          if (
            conv.con_estado == '1' &&
            conv.tipo_conv_comun.tipo_conv_comun_titulo == this.tipo_conv.toUpperCase()
          ) {
            this.Convocatorias.push(conv)
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
        this.Cursos = []
        console.log('cursos')
        console.log(response)
        response.data.forEach((conv) => {
          if (
            conv.tipo_curso_otro.tipo_conv_curso_estado == '1' &&
            conv.tipo_curso_otro.tipo_conv_curso_nombre == this.tipo_conv.toUpperCase()
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
    this.getCategoria(this.$route.params.tipo)
    /*console.log("created");
    console.log("name: "+this.$route.name)
    console.log("tipo_id: "+this.$route.params.tipo_id)*/
  },
  updated() {
    if (this.$route.params.tipo != this.tipo_conv) {
      this.getCategoria(this.$route.params.tipo)
    }
  }
  /*mounted() {
    this.getCategoria(this.$route.params.tipo_id)
  },*/
}
</script>
<style scoped>
.grid-conv {
  width: 100%;
  height: 110vh;
}
.grid-conv-item {
}

.title{
  text-align: center;
  font-size: 1em !important;
}
.price{  
  border-radius: 20px !important;
  background: var(--main-color) !important;
}
.event-date{
  text-align: center;
}
.breadcrumbs-img img {
  height: 300px;
  object-fit: cover;
  object-position: top;
}
.page-title {
  text-shadow: 0px 3px 15px rgba(0, 0, 0, 0.5);
}

.tipo_text {
  background: #fff;
}

/*==================== btn-page ============ */
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
/*================== card de comunicados cursos etc. ==============*/
.img-part img {
  height: 400px;
}

/* =========================== Boton Convocatorias ================= */
.btn-conv {
 position: relative;
 display: flex;
 justify-content: center;
 align-items: center;
 border-radius: 5px;
 background: var(--main-color-2);
 font-family: "Montserrat", sans-serif;
 box-shadow: 0px 6px 24px 0px rgba(0, 0, 0, 0.2);
 overflow: hidden;
 border: none;
}

.btn-conv:after {
 content: " ";
 width: 0%;
 height: 100%;
 background: var(--main-color);
 position: absolute;
 transition: all 0.4s ease-in-out;
 right: 0;
}

.btn-conv:hover::after {
 right: auto;
 left: 0;
 width: 100%;
}

.btn-conv span {
 text-align: center;
 text-decoration: none;
 width: 100%;
 padding: 10px 20px;
 color: #fff;
 font-size: 1em;
 font-weight: 700;
 letter-spacing: 0.1em;
 z-index: 20;
 transition: all 0.3s ease-in-out;
}

.btn-conv:hover span {
 color: #fff;
 animation: scaleUp 0.3s ease-in-out;
}

@keyframes scaleUp {
 0% {
  transform: scale(1);
 }

 50% {
  transform: scale(0.95);
 }

 100% {
  transform: scale(1);
 }
}

</style>
>
