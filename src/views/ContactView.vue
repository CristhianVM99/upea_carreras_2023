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
          Contacto
        </h1>
        <ul>
          <router-link :to="{ name: 'home' }">
            <button class="btn-page mr-40">
              Home
            </button>
          </router-link>          
          <button class="btn-page">
            contacto
          </button>
        </ul>
      </div>
    </div>
    <!-- Breadcrumbs End -->

    <!-- Contact Section Start -->
    <div class="contact-page-section pt-120 pb-120 md-pt-80 md-pb-80">
      <div class="container">
        <div class="row contact-address-section">
          <div class="col-lg-12 lg-pl-0 md-mb-30">
            <div class="contact-info contact-address mb-20">
              <div class="icon-part sky-color">
                <i class="flaticon flaticon-call"></i>
              </div>
              <div class="content-part">
                <h5 class="info-subtitle">Celulares y Telefonos</h5>
                <ul>
                  <li>
                    <span>Celular 1: </span
                    ><a href="#">(+591) {{ Institucion.institucion_celular1 }}</a>
                  </li>
                  <li>
                    <span>Celular 2: </span
                    ><a href="#">(+591) {{ Institucion.institucion_celular2 }}</a>
                  </li>
                  <li>
                    <span>Telefono 1: </span
                    ><a href="#"> (+591) {{ Institucion.institucion_telefono1 }}</a>
                  </li>
                  <li>
                    <span>Telefono 2: </span
                    ><a href="#"> (+591) {{ Institucion.institucion_telefono2 }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-12 md-mb-30">
            <div class="contact-info contact-mail mb-20">
              <div class="icon-part">
                <i class="flaticon flaticon-mail"></i>
              </div>
              <div class="content-part">
                <h5 class="info-subtitle">Correos Electronicos</h5>
                <ul>
                  <li>
                    <span>Email 1: </span>
                    <a href="#">{{ Institucion.institucion_correo1 }}</a>
                  </li>
                  <li>
                    <span>Email 2: </span>
                    <a href="#">{{ Institucion.institucion_correo2 }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-12 lg-pr-0">
            <div class="contact-info contact-phone">
              <div class="icon-part yellow-color">
                <i class="flaticon flaticon-maps-and-flags"></i>
              </div>
              <div class="content-part">
                <h5 class="info-subtitle">Redes Sociales</h5>
                <div class="address-des">
                  <ul>
                    <li>
                      <span>Facebook: </span>
                      <a href="#">{{ Institucion.institucion_facebook }}</a>
                    </li>
                    <li>
                      <span>Twitter: </span>
                      <a href="#">{{ Institucion.institucion_twitter }}</a>
                    </li>
                    <li>
                      <span>Youtube: </span>
                      <a href="#">{{ Institucion.institucion_youtube }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- CTA Section Start -->
      <div
        class="sc-cta-section cta-bg-image4 right-bg-image pt-110 pb-120 md-pt-75 md-pb-80 position-relative arrow-animation-1"
      >
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="2000ms">
              <div class="sec-title">
                <div class="sub-title position-relative">
                  upea<span class="heading-border-line"></span>
                </div>
                <h2 class="title mb-0 white-color">
                  La UPEA es una universidad que trabaja por una sociedad más justa, equitativa y solidaria a través de la formación de líderes
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div class="animated-arrow-1 animated-arrow left-right-new">
          <img src="../assets/images/arrow-1.png" alt="" />
        </div>
        <div class="animated-arrow-2 animated-arrow up-down-new">
          <img src="../assets/images/arrow-2.png" alt="" />
        </div>

        <div class="animated-arrow-3 animated-arrow up-down-new">
          <img src="../assets/images/arrow-3.png" alt="" />
        </div>
        <div class="animated-arrow-4 animated-arrow left-right-new">
          <img src="../assets/images/arrow-3.png" alt="" />
        </div>
        <div class="animated-arrow-6 animated-arrow left-right-new">
          <img src="../assets/images/arrow-7.png" alt="" />
        </div>
      </div>
      <!-- CTA Section End -->
      <div class="contact-g-map ml-40 mr-40 mt-30">
        <h2>O visítenos</h2>
        <h4><i class="fa fa-map-marker"></i> {{ Institucion.institucion_direccion }}</h4>
        <iframe :src="Institucion.institucion_api_google_map" width="100%" height="500px"></iframe>
      </div>
    </div>
    <!-- Contact Section End -->
  </div>
  <!-- Main content End -->
</template>
<script>
import { mapState } from 'vuex'
import LoadingPage from '../components/LoadingComp.vue';

export default {
  name: 'ContactView',
  computed: {
    ...mapState(['url_api', 'Institucion'])
  },
  components:{
    LoadingPage,
  },
  methods: {
    async getNull(){
      await console.log("todo bien");
    },  
    isLoad(){
      var load = document.getElementById("loading");
      load.style.display = "none";
    },
    async createdComponent(){
      await this.getNull()
      this.isLoad()
    }
  },
  created(){
    this.createdComponent()
  },
  mounted() {
  },
}
</script>
<style>
.breadcrumbs-img img {
  height: 300px;
  object-fit: cover;
  object-position: top;
}

.page-title {
  text-shadow: 0px 3px 15px rgba(0, 0, 0, 0.5);
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
</style>
