<template>
  <!-- Footer Secton Start -->
  <footer id="sc-footer" class="sc-footer footer-style2 footer-bg-image arrow-animation-1 mt-20">
    <div class="container">
      <!--<div class="footer-newsletter subscribe-bg-image">
        <div class="row align-items-center">
          <div class="col-lg-6 md-text-center">
            <h3 class="title white-color mb-0">Subscribe Our Newsletter</h3>
            <div class="des">Excepteur sint occaecat cupidatat non proident, sunt in</div>
          </div>
          <div class="col-lg-6 text-right md-text-center">
            <form class="newsletter-form">
              <input type="email" name="email" placeholder="E-mail Address" required="" />
              <button type="submit">Subscribe <i class="flaticon flaticon-right-arrow"></i></button>
            </form>
          </div>
        </div>
      </div>-->
      <div class="footer-content pt-100 pb-70 md-pb-5">
        <div class="row">
          <div class="col-lg-3 footer-widget">
            <div class="about-widget pl-30">
              <div class="logo-part mb-30">
                <router-link :to="{ name: 'home' }">
                  <img
                    :src="url_api + '/InstitucionUpea/' + Institucion.institucion_logo"
                    alt="logo"
                    width="70"
                    height="70"
                  />
                </router-link>
              </div>
              <p class="desc">
                {{ Institucion.institucion_nombre }}
              </p>
              <h4 class="social-title white-color">Siguenos en:</h4>
              <ul class="footer-social">
                <li>
                  <a :href="Institucion.institucion_facebook" target="_blank"
                    ><i class="fa fa-facebook"></i
                  ></a>
                </li>
                <li>
                  <a :href="Institucion.institucion_twitter" target="_blank"
                    ><i class="fa fa-twitter"></i
                  ></a>
                </li>
                <li>
                  <a :href="Institucion.institucion_youtube" target="_blank"
                    ><i class="fa fa-youtube"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 md-mb-32 footer-widget md-mt-45">
            <h4 class="widget-title">
              Convocatorias <br />y<br />
              Cursos
            </h4>
            <ul class="widget-menu" v-if="this.carrera_id != 0">
              <li v-for="(link, id_conv) in MenuConvocatorias" :key="id_conv">
                <router-link
                  :to="{
                    name: 'convocatorias',
                    params: {
                      tipo: link.tipo_conv_comun_titulo.toLowerCase()
                    }
                  }"
                  >{{ link.tipo_conv_comun_titulo.toLowerCase() }}</router-link
                >
              </li>

              <li v-for="(link, id_conv) in MenuCursos" :key="id_conv">
                <router-link
                  :to="{
                    name: 'cursos',
                    params: {
                      tipo: link.tipo_conv_curso_nombre.toLowerCase()
                    }
                  }"
                  >{{ link.tipo_conv_curso_nombre.toLowerCase() }}</router-link
                >
              </li>
            </ul>
          </div>
          <div class="col-lg-3 md-mb-32 footer-widget">
            <h4 class="widget-title">Mas+</h4>
            <ul class="widget-menu" v-if="(this.carrera_id!=0)">
              <li>
                <router-link
                  :to="{
                    name: 'servicios',
                    params: {
                      tipo: 'servicios'
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
                      tipo: 'ofertasacademicas'
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
                      tipo: 'publicaciones'
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
                      tipo: 'gacetas'
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
                      tipo: 'eventos'
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
                      tipo: 'videos'
                    }
                  }"
                  >Videos</router-link
                >
              </li>
            </ul>
          </div>
          <div class="col-lg-3 md-mb-32 footer-widget">
            <h4 class="widget-title">Contactese con nosotros:</h4>
            <ul class="address-widget pr-40">
              <li>
                <i class="flaticon flaticon-call"></i>
                <a href="#">{{ Institucion.institucion_celular1 }}</a>
              </li>
              <li>
                <i class="flaticon flaticon-call"></i>
                <a href="#">{{ Institucion.institucion_celular2 }}</a>
              </li>
              <li>
                <i class="flaticon flaticon-mail"></i>
                <a href="#">{{ Institucion.institucion_correo1 }}</a>
              </li>
              <li>
                <i class="flaticon flaticon-mail"></i>
                <a href="#">{{ Institucion.institucion_correo2 }}</a>
              </li>
              <li>
                <i class="flaticon flaticon-maps-and-flags"></i>
                <a href="#">{{ Institucion.institucion_direccion }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 sm-mb-10 text-md-start">
            <div class="copyright">
              <p>© Copyright 2023 SIE_UPEA Todos los Derechos Reservados.</p>
            </div>
          </div>
          <div class="col-md-6 text-end">
            <ul class="copyright-menu">
              <img src="../../public/upea.png" width="100" alt="sie" />
              <li><a href="#">Cristhian Villca Mamani</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="animated-arrow-1 animated-arrow left-right-new">
      <img src="src/assets/images/arrow-8.png" alt="" />
    </div>
    <div class="animated-arrow-2 animated-arrow up-down-new">
      <img src="src/assets/images/arrow-9.png" alt="" />
    </div>

    <div class="animated-arrow-3 animated-arrow up-down-new">
      <img src="src/assets/images/arrow-3.png" alt="" />
    </div>
    <div class="animated-arrow-4 animated-arrow left-right-new">
      <img src="src/assets/images/arrow-7.png" alt="" />
    </div>
  </footer>
  <!-- Footer Secton End -->

  <!-- start scrollUp  -->
  <div id="scrollUp">
    <i class="fa fa-angle-up"></i>
  </div>
  <!-- End scrollUp  -->

  <!-- Search Modal Start -->
  <div
    aria-hidden="true"
    id="search-modal"
    class="modal fade search-modal"
    role="dialog"
    tabindex="-1"
  >
    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
      <i class="flaticon-close"></i>
    </button>

    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="search-block clearfix">
          <form>
            <div class="form-group">
              <input class="form-control" placeholder="Search Here..." type="text" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- Search Modal End -->
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'FooterComp',
  data() {
    return {
      sopen: false,
      Links: [],
      m_inicio: false,
      m_conv: false,
      m_cur: false,
      m_mas: false,
      m_link: false
    }
  },
  computed: {
    ...mapState([
      'url_api',
      'MenuConvocatorias',
      'MenuCursos',
      'Institucion',
      'getter',
      'carrera_id'
    ])
  }
}
</script>
