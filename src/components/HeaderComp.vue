<template>
  <!--Preloader area start here-->
  <!--<section class="loader_first">
    <div class="circular-spinner"></div>
  </section>-->
  <!--Preloader area End here-->

  <!--Full width header Start-->
  <div class="sc-header-section">
    <!--Header Start-->
    <header id="sc-header" class="sc-header">
      <!-- Topbar Area Start -->
      <div class="topbar-area">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-7">
              <ul class="topbar-contact">
                <li>
                  <i class="flaticon flaticon-call"></i>
                  <a href="tel:+(111)256352">+591 {{ Institucion.institucion_telefono1 }} </a>
                </li>
                <li>
                  <i class="flaticon flaticon-mail"></i>
                  <a href="mailto:support@rstheme.com">{{ Institucion.institucion_correo1 }} </a>
                </li>
              </ul>
            </div>
            <div class="col-md-5 text-end">
              <ul class="topbar-right">
                <li class="login-register">
                  <i class="fa fa-sign-in"></i>
                  <router-link :to="{ name : 'login' }">Login</router-link> / <router-link :to="{ name : 'register' }">Register</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- Topbar Area End -->

      <!-- Menu Start -->
      <div class="menu-area menu-sticky">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-3">
              <div class="logo-cat-wrap">
                <div class="logo-part">
                  <router-link :to="{ name: 'home' }" href="index.html">
                    <img
                      :src="url_api + '/InstitucionUpea/' + Institucion.institucion_logo"
                      alt="logo"
                      width="70"
                      height="70"
                    />
                    <span class="txt_logo">Ingenieria de Sistemas</span>
                  </router-link>
                </div>
              </div>
            </div>
            <div class="col-lg-9 align-items-center d-flex text-end justify-content-end">
              <div class="sc-menu-area">
                <div class="main-menu">
                  <div class="mobile-menu">
                    <a class="sc-menu-toggle">
                      <i class="fa fa-bars"></i>
                    </a>
                  </div>
                  <nav class="sc-menu">
                    <ul class="nav-menu">
                      <li class="menu-item-has-children">
                        <a href="#">Inicio</a>
                        <ul class="sub-menu">
                          <li>
                            <router-link :to="{ name: 'about' }">Sobre Nosotros</router-link>
                          </li>
                        </ul>
                      </li>

                      <li class="menu-item-has-children">
                        <a href="#">Convocatorias</a>
                        <ul class="sub-menu">
                          <li><router-link :to="{ name: 'avisos' }">Avisos</router-link></li>
                          <li>
                            <router-link :to="{ name: 'comunicados' }">Comunicados</router-link>
                          </li>
                          <li>
                            <router-link :to="{ name: 'convocatorias' }">Convocatorias</router-link>
                          </li>
                        </ul>
                      </li>

                      <li class="menu-item-has-children">
                        <a href="#">Cursos</a>
                        <ul class="sub-menu">
                          <li><router-link :to="{ name: 'cursos' }">Cursos</router-link></li>
                          <li>
                            <router-link :to="{ name: 'seminarios' }">Seminarios</router-link>
                          </li>
                        </ul>
                      </li>

                      <li class="menu-item-has-children">
                        <a href="#">Mas</a>
                        <ul class="sub-menu">
                          <li><router-link :to="{ name: 'servicios' }">Servicios</router-link></li>
                          <li>
                            <router-link :to="{ name: 'ofertasacademicas' }"
                              >Ofertas Academicas</router-link
                            >
                          </li>
                          <li>
                            <router-link :to="{ name: 'publicaciones' }">Publicaciones</router-link>
                          </li>
                          <li><router-link :to="{ name: 'gacetas' }">Gaceta</router-link></li>
                          <li><router-link :to="{ name: 'eventos' }">Eventos</router-link></li>
                          <li><router-link :to="{ name: 'videos' }">Videos</router-link></li>
                        </ul>
                      </li>

                      <li class="menu-item-has-children">
                        <a href="#">Links</a>
                        <ul class="sub-menu">
                          <li><a href="#">Pagina Web</a></li>
                          <li><a href="#">Inscripciones</a></li>
                          <li><a href="#">Campus Virtual</a></li>
                        </ul>
                      </li>

                      <li><router-link :to="{ name: 'contacto' }">Contacto</router-link></li>
                    </ul>
                    <!-- //.nav-menu -->
                  </nav>
                </div>
                <!-- //.main-menu -->
              </div>
              <div class="expand-btn-inner text-end">
                <ul>
                  <li>
                    <a
                      class="hidden-xs sc-search"
                      data-bs-target="#search-modal"
                      data-bs-toggle="modal"
                      href="#"
                    >
                      <i class="flaticon flaticon-magnifying-glass"></i>
                    </a>
                  </li>
                </ul>
                <span>
                  <a id="nav-expander" class="nav-expander">
                    <span class="dot1"></span>
                    <span class="dot2"></span>
                    <span class="dot3"></span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Menu End -->

      <!-- Canvas Menu start -->
      <nav class="right_menu_togle hidden-md">
        <div class="close-btn">
          <div id="nav-close">
            <div class="line"><span class="line1"></span><span class="line2"></span></div>
          </div>
        </div>
        <div class="canvas-logo">
          <router-link :to="{ name: 'home' }"
            ><img
              :src="url_api + '/InstitucionUpea/' + Institucion.institucion_logo"
              alt="logo"
              width="70"
              height="70"
          /></router-link>
        </div>
        <div class="offcanvas-text">
          <p>
            Many desktop publishing packages and web page editors now use Lorem Ipsum as their
            default model text, and a search for web sites still in their infancy.
          </p>
        </div>

        <ul class="address-widget">
          <li>
            <i class="flaticon flaticon-call"></i>
            <a href="tel:+(111)256352">Call: +(111)256 352</a>
          </li>
          <li>
            <i class="flaticon flaticon-mail"></i>
            <a href="mailto:infosimple@gmail.com">infosimple@gmail.com</a>
          </li>
          <li>
            <div class="desc">
              <i class="flaticon flaticon-maps-and-flags"></i>
              202 Raffles Ave, Carlisle CA2 7EF, United Kingdon
            </div>
          </li>
        </ul>
        <div class="canvas-contact">
          <ul class="social">
            <li>
              <a href="#"><i class="fa fa-facebook"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa fa-twitter"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa fa-pinterest-p"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa fa-linkedin"></i></a>
            </li>
          </ul>
        </div>
      </nav>
      <!-- Canvas Menu end -->
    </header>
    <!--Header End-->
  </div>
  <!--Full width header End-->
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'HeaderComp',
  data() {
    return {
      sopen: false,
      LInks: [],
      m_inicio: false,
      m_conv: false,
      m_cur: false,
      m_mas: false,
      m_link: false
    }
  },
  computed: {
    ...mapState(['url_api', 'MenuConv', 'MenuCur', 'Institucion', 'getter'])
  },
  methods: {
    click_m() {
      this.$store.commit('clickLink')
      this.openMenu()
    },
    showSubMenu(id) {
      switch (id) {
        case 'm_inicio':
          this.m_inicio = !this.m_inicio
          this.m_conv = false
          this.m_cur = false
          this.m_mas = false
          this.m_link = false
          break
        case 'm_conv':
          this.m_inicio = false
          this.m_conv = !this.m_conv
          this.m_cur = false
          this.m_mas = false
          this.m_link = false
          break
        case 'm_cur':
          this.m_inicio = false
          this.m_conv = false
          this.m_cur = !this.m_cur
          this.m_mas = false
          this.m_link = false
          break
        case 'm_mas':
          this.m_inicio = false
          this.m_conv = false
          this.m_cur = false
          this.m_mas = !this.m_mas
          this.m_link = false
          break
        case 'm_link':
          this.m_inicio = false
          this.m_conv = false
          this.m_cur = false
          this.m_mas = false
          this.m_link = !this.m_link
          break

        default:
          console.log('')
          break
      }
    },
    openMenu() {
      this.sopen = !this.sopen
    }
    /*async getLinks() {
      try {
        let res = await this.axios.get(
          "/api/linksIntExtAll/" + import.meta.env.VITE_VUE_APP_ID_INSTITUCION
        );
        this.Links = res.data;
      } catch (error) {
        console.log(error);
      }
    },*/
  },
  created() {
    //this.getLinks();
  },
  mounted() {
    /*if (this.getter) {
      this.getLinks();
      this.$store.state.getter = false;
    }*/
  }
}
</script>
<style scoped>
.txt_logo {
  color: #000;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.8em;
}
</style>
