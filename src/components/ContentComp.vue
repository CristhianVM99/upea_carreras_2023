<template>
  <!-- Main content Start -->
  <div class="main-content">
    <!-- Breadcrumbs Start -->
    <div class="sc-breadcrumbs breadcrumbs-overlay">
      <div class="breadcrumbs-img">
        <img src="../assets/images/breadcrumbs/1.jpg" alt="Breadcrumbs Image" />
      </div>
      <div class="breadcrumbs-text white-color">
        <h1 class="page-title">{{ tipo_conv.toUpperCase() }} <br> VIGENTES EN LA CARRERA</h1>
        <ul>
          <li>
            <router-link :to="{ name : 'home' }" class="active">Home ></router-link>
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
            <div class="blog-deatails">
              <div class="sc-gallery-section pt-30 pb-30 md-pt-80 md-pb-80">
                <div class="container">
                  <div class="row masonry-grid">
                    <div class="col-lg-4 col-md-6 loadgallery addgallery"
                    v-if="Convocatorias.length != 0"
                    >
                      <div class="gallery-item mb-30"
                      v-for="(conv, id_conv) of Convocatorias"
                      :key="id_conv"
                      >
                        <img 
                        :src="url_api + '/Convocatorias/' + conv.con_foto_portada"
                        alt="img"
                        />
                        <router-link
                          class="popup-galley"
                          :href="url_api + '/Convocatorias/' + conv.con_foto_portada"
                          title="Overall Rolling trophy"
                        >
                          <i class="flaticon flaticon-magnifying-glass"></i>
                        </router-link>
                      </div>                      
                    </div>
                    <!--
                    <div class="col-lg-4 col-md-6 loadgallery addgallery"
                    v-if="Comunicados.length != 0"
                    >
                      <div class="gallery-item mb-30"
                      v-for="(conv, id_conv) of Comunicados"
                      :key="id_conv"
                      >
                        <img 
                        :src="url_api + '/Convocatorias/' + conv.con_foto_portada"
                        alt="img"
                        />
                        <router-link
                          class="popup-galley"
                          :href="url_api + '/Convocatorias/' + conv.con_foto_portada"
                          alt="img"
                          title="Overall Rolling trophy"
                        >
                          <i class="flaticon flaticon-magnifying-glass"></i>
                        </router-link>
                      </div>                      
                    </div>                      
                    -->
                  </div>
                  <!--<div id="loadmore" class="text-center mt-30">
                    <a class="readon" href="#"
                      >Learn More <i class="flaticon flaticon-right-arrow"></i>
                    </a>
                  </div>-->
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 md-mt-60">
            <div class="widget-area">
              <div class="search-widget mb-50">
                <div class="search-wrap">
                  <input
                    type="search"
                    placeholder="Searching..."
                    name=""
                    class="search-input"
                    value=""
                  />
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
import { mapState } from 'vuex'
export default {
  name: 'ContentComp',
  props: {
    tipo_conv: {
      type: String,
      default: ''
    },
    Convocatorias:{
      type: Object,
      default: ()=>({})
    },
    Comunicados:{
      type: Object,
      default: ()=>({})
    }
  },
  computed: {
    ...mapState(['url_api'])
  },
  methods:{
    dmy(fecha) {
      const meses = [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre",
      ];
      let fechaCadena = fecha.substr(0, 10);
      let fechaArray = fechaCadena.split("-");
      return (
        fechaArray[2] +
        " de " +
        meses[fechaArray[1] - 1] +
        " de " +
        fechaArray[0]
      );
    },
  },
  mounted(){
  }

}
</script>
