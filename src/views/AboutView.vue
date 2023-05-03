<template>
  <loading-page></loading-page>
  <!-- Main content Start -->
  <div class="main-content">
    <!-- Breadcrumbs Start -->
    <div class="sc-breadcrumbs breadcrumbs-overlay">
      <div class="breadcrumbs-img">
        <img src="../../../public/bgUpea.jpg" alt="Breadcrumbs Image" />
      </div>
      <div class="breadcrumbs-text white-color">
        <h1 class="page-title">
          Sobre Nosotros
        </h1>
        <ul>
          <router-link :to="{ name: 'home' }">
            <button class="btn-page mr-40">
              Home
            </button>
          </router-link>          
          <button class="btn-page">
            nosotros
          </button>
        </ul>
      </div>
    </div>
    <!-- Breadcrumbs End -->

    <!-- About Section Start -->
    <div
      id="sc-about"
      class="sc-about pt-80 pb-170 md-pt-40 md-pb-70 position-relative arrow-animation-1"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5 md-mb-115">
            <div class="img-part position-relative">
              <img :src="url_api + '/InstitucionUpea/' + Institucion.institucion_logo" alt="img" />
              <!--<div class="about-experience text-center">
                <span>22+</span>
                Años de Experiencia
              </div>-->
            </div>
          </div>
          <div class="col-lg-7 pl-90 md-pl-15">
            <div class="sec-title mb-20">
              <div class="sub-title position-relative">
                Sobre la Carrera <span class="heading-border-line"></span>
              </div>
              <h2 class="title mb-20">{{ Institucion.institucion_nombre }}</h2>
              <h3 class="title mb-10">Mision</h3>
              <div class="des" v-html="Institucion.institucion_mision"></div>
              <h3 class="title mb-10">Vision</h3>
              <div class="des" v-html="Institucion.institucion_vision"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="animated-arrow-1 animated-arrow left-right-new">
        <img src="src/assets/images/arrow-1.png" alt="" />
      </div>
      <div class="animated-arrow-2 animated-arrow up-down-new">
        <img src="src/assets/images/arrow-2.png" alt="" />
      </div>

      <div class="animated-arrow-3 animated-arrow up-down-new">
        <img src="src/assets/images/arrow-3.png" alt="" />
      </div>
      <div class="animated-arrow-4 animated-arrow left-right-new">
        <img src="src/assets/images/arrow-3.png" alt="" />
      </div>
    </div>
    <!-- About Section End -->

    <!-- Counter Section Start -->
    <div
      class="sc-counter style2-about pt-120 pb-115 md-pt-80 md-pb-50 counter-bg1 position-relative arrow-animation-1"
    >
      <div class="container">
        <div class="row couter-area">
          <div class="col-lg-3 col-md-6 md-mb-30">
            <div class="counter-item text-center">
              <div class="icon-part">
                <i class="flaticon flaticon-laptop"></i>
              </div>
              <h2 class="counter-title">
                <span class="sc-count">{{ Convocatorias.length }}</span
                ><span class="text">+</span>
              </h2>
              <h5 class="title mb-0">Convocatorias, Comunicados & Avisos</h5>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 md-mb-30">
            <div class="counter-item text-center ping-color">
              <div class="icon-part">
                <i class="flaticon flaticon-study"></i>
              </div>
              <h2 class="counter-title">
                <span class="sc-count">{{ Cursos.length }}</span
                ><span class="text">+</span>
              </h2>
              <h5 class="title mb-0">Cursos & Seminarios</h5>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 md-mb-30">
            <div class="counter-item text-center green-color">
              <div class="icon-part">
                <i class="flaticon flaticon-teacher"></i>
              </div>
              <h2 class="counter-title">
                <span class="sc-count">{{ Servicios.length }}</span
                ><span class="text">+</span>
              </h2>
              <h5 class="title mb-0">Servicios</h5>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 md-mb-30">
            <div class="counter-item text-center yellow-color">
              <div class="icon-part">
                <i class="flaticon flaticon-monitor"></i>
              </div>
              <h2 class="counter-title">
                <span class="sc-count">{{ Ofertas.length }}</span
                ><span class="text">+</span>
              </h2>
              <h5 class="title mb-0">Ofertas Academicas</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="animated-arrow-1 animated-arrow left-right-new">
        <img src="src/assets/images/arrow-5.png" alt="" />
      </div>
      <div class="animated-arrow-2 animated-arrow up-down-new">
        <img src="src/assets/images/arrow-2.png" alt="" />
      </div>

      <div class="animated-arrow-3 animated-arrow up-down-new">
        <img src="src/assets/images/arrow-4.png" alt="" />
      </div>
      <div class="animated-arrow-4 animated-arrow left-right-new">
        <img src="src/assets/images/arrow-3.png" alt="" />
      </div>
    </div>
    <!-- Counter Section End -->

    <!-- About Section Start -->
    <div id="sc-about" class="sc-about about-style2 pt-120 pb-120 md-pt-80 md-pb-70">
      <div class="container">
        <div class="row align-items-center">          
          <div class="col-lg-7 md-mt-50">
            <div class="sec-title mb-20">
              <div class="sub-title position-relative">
                {{ Institucion.institucion_nombre }} <span class="heading-border-line"></span>
              </div>
              <h2 class="title mb-20">
                Historia de la Institucion
              </h2>
              <div class="des mb-40" v-html="Institucion.institucion_historia"></div>
            </div>            
          </div>
          <div class="col-lg-5">
            <div class="img-part position-relative">
                <img
                :src="
                  url_api + '/InstitucionUpea/' + Institucion.institucion_logo
                "
                width="300"
                alt=""
              />
            </div>
            <div class="img-part position-relative">
                <img src="../assets/images/upea.png" alt="img" 
                width="300"
                />
            </div>
            <div class="img-part position-relative">
                <img src="../assets/images/sie.png" alt="img" 
                width="300"
                />
            </div>
          </div>
        </div>
        <img class="up-down-new" src="../assets/images/about/shap_image.png" alt="" />
      </div>
    </div>
    <!-- About Section End -->
  </div>
  <!-- Main content End -->
</template>
<script>
import { mapState } from 'vuex'
import Services from '@/services/Services'
import LoadingPage from '../components/LoadingComp.vue'

export default {
  name: 'AboutView',
  data() {
    return {
      Convocatorias: [],
      Cursos: [],
      Servicios: [],
      Ofertas: [],
    }
  },
  components:{
    LoadingPage
  },
  computed: {
    ...mapState(['Institucion', 'url_api'])
  },
  methods: {
    async getConvocatoriasAll() {
      try {
        //optenemos todas la convocatorias, comunicados y avisos.
        const response = await Services.getConvocatoriasAll()
        this.Convocatorias = response.data        
      } catch (e) {
        console.log(e)
      }
    },
    async getCursosAll() {
      try {
        //optenemos todos los cursos y seminarios.
        const response = await Services.getCursosAll()
        this.Cursos = response.data
      } catch (e) {
        console.log(e)
      }
    },
    async getServiciosAll() {
      try {
        //optenemos todos los servicios
        const response = await Services.getServiciosAll()
        this.Servicios = response.data
      } catch (e) {
        console.log(e)
      }
    },
    async getOfertasAll() {
      try {
        //optenemos todas las ofertas
        const response = await Services.getOfertasAll()
        this.Ofertas = response.data
      } catch (e) {
        console.log(e)
      }
    },
    isLoad(){
      var load = document.getElementById("loading");
      load.style.display = "none";
    },
    //metodo que ejecuta los demas
    async createdComponent(){
      await this.getConvocatoriasAll()
      await this.getCursosAll()
      await this.getServiciosAll()
      await this.getOfertasAll()
      this.isLoad()
    }
  },
  created(){
    this.createdComponent()
  }
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
