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
                  <router-link :to="{ name: 'login' }">Login</router-link> /
                  <router-link :to="{ name: 'register' }">Register</router-link>
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
                  <router-link :to="{ name: 'home' }"
                  class="logo-content"
                  >
                    <img
                      :src="url_api + '/InstitucionUpea/' + Institucion.institucion_logo"
                      alt="logo"
                    />
                    <span class="txt_logo">{{ Institucion.institucion_nombre }}</span>
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

                      <li class="menu-item-has-children" id="menu_convocatorias"
                      >
                        <a href="#">Convocatorias </a>
                        <ul class="sub-menu">
                          <li v-for="(link, id_conv) in MenuConvocatorias" :key="id_conv">
                            <router-link
                              :to="{
                                name: 'convocatorias',
                                params: {
                                  tipo_id: link.idtipo_conv_comun
                                }
                              }"
                              >{{ link.tipo_conv_comun_titulo.toLowerCase() }}</router-link
                            >
                          </li>
                        </ul>
                      </li>

                      <li class="menu-item-has-children"
                      v-if="Object.keys(MenuCursos).length != 0"
                      >
                        <a href="#">Cursos</a>
                        <ul class="sub-menu">
                          <li v-for="(link, id_conv) in MenuCursos" :key="id_conv">
                            <router-link
                              :to="{
                                name: 'cursos',
                                params: {
                                  tipo_id: link.idtipo_curso_otros
                                }
                              }"
                              >{{ link.tipo_conv_curso_nombre.toLowerCase() }}</router-link
                            >
                          </li>
                        </ul>
                      </li>

                      <li class="menu-item-has-children"
                      v-if="(Object.keys(MenuConvocatorias).length != 0 && Object.keys(MenuCursos).length != 0)"
                      >
                        <a href="#">Mas</a>
                        <ul class="sub-menu">
                          <li>
                            <router-link
                              :to="{
                                name: 'servicios',
                                params: {
                                  tipo_id: 'servicios'
                                }
                              }"
                              >Servicios</router-link
                            >
                          </li>
                          <li>
                            <router-link
                              :to="{
                                name: 'ofertasacademicas',
                                params: {
                                  tipo_id: 'convocatorias'
                                }
                              }"
                              >Ofertas Academicas</router-link
                            >
                          </li>
                          <li>
                            <router-link
                              :to="{
                                name: 'publicaciones',
                                params: {
                                  tipo_id: 'convocatorias'
                                }
                              }"
                              >Publicaciones</router-link
                            >
                          </li>
                          <li>
                            <router-link
                              :to="{
                                name: 'gacetas',
                                params: {
                                  tipo_id: 'convocatorias'
                                }
                              }"
                              >Gaceta</router-link
                            >
                          </li>
                          <li>
                            <router-link
                              :to="{
                                name: 'eventos',
                                params: {
                                  tipo_id: 'convocatorias'
                                }
                              }"
                              >Eventos</router-link
                            >
                          </li>
                          <li>
                            <router-link
                              :to="{
                                name: 'videos',
                                params: {
                                  tipo_id: 'convocatorias'
                                }
                              }"
                              >Videos</router-link
                            >
                          </li>
                        </ul>
                      </li>

                      <li class="menu-item-has-children"
                      v-if="(Object.keys(MenuConvocatorias).length != 0 && Object.keys(MenuCursos).length != 0)"
                      >
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
            </li>console.log(this.MenuConvocatorias.length)
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

  computed: {
    ...mapState(['url_api', 'MenuConvocatorias', 'MenuCursos', 'Institucion', 'Links'])
  },
  methods: {},
  created() {
    if(this.MenuConvocatorias.length != 0){
      let menu_conv = document.getElementById('menu_convocatorias');
      menu_conv.style.display = 'none';
    }
  }
}
</script>
<style scoped>

.logo-content{
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-content img {
  width: 100px;
  display: block;
}
.txt_logo {
  color: #000;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1em;
  font-family: fantasy;
  text-align: center;
  display: block;
  border-left: 3px solid var(--main-color-2);
  padding-left: 5px;
  margin-left: 5px;
}

.txt_logo::first-letter{
  font-size: 1.5em;
  color: var(--main-color-2);
}
#nav-expander {
  visibility: hidden;
}
</style>
