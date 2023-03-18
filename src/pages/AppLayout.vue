<template>
  <header-comp-vue></header-comp-vue>
  <!--<content-comp-vue></content-comp-vue>-->
  <router-view></router-view>
  <footer-comp-vue></footer-comp-vue>
</template>
<script>
//import contentCompVue from '../components/contentComp.vue'
import FooterCompVue from '../components/FooterComp.vue'
import HeaderCompVue from '../components/HeaderComp.vue'
import { mapState } from 'vuex'
import Services from '@/services/Services'

export default {
  name: 'AppLayout',
  components: {
    HeaderCompVue,
    FooterCompVue
    //contentCompVue,
  },
  computed: {
    ...mapState([
      'url_api',
      'Institucion',
      'MenuConvocatorias', 
      'MenuCursos', 
      'Colors', 
      'statusImg'
    ]),
  },
  methods: {
    async getMenuConv() {
      try {
        const response = await Services.getMenuConvocatorias()
        const filterConv = []
        console.log(response)

        response.data.forEach((element) => {
          if (element.tipo_conv_comun_estado == '1') {
            filterConv.push(element)
          }
        })
        this.$store.state.MenuConv = filterConv
      } catch (e) {
        console.log(e)
      }
    },
    async getMenuCur() {
      try {
        const response = await Services.getMenuCusos()
        const filterCur = []
        response.data.forEach((element) => {
          if (element.tipo_conv_curso_estado == '1') {
            filterCur.push(element)
          }
        })
        this.$store.state.MenuCur = filterCur;
      } catch (e) {
        console.log(e)
      }
    },    
    async getLinks() {
      try {
        const response = await Services.getLinks()
        let filterLinks = [];        
        response.data.forEach((link) => {
          if (link.ei_estado == "1") {
            filterLinks.push(link);
          }
        });
        this.$store.state.Links = filterLinks;
      } catch (e) {
        console.log(e);
      }
    },
    async getInstitucion() {
      try {
        const response = await Services.getInstitucion()
        this.$store.state.Institucion = response.data.Descripcion;
        /*document
          .querySelector("#ico")
          .setAttribute(
            "href",
            this.url_api +
              "/InstitucionUpea/" +
              this.Institucion.institucion_logo
          );
        document.querySelector("#title-page").innerHTML =
          this.Institucion.institucion_nombre;*/

        // Colores CSS
        /*if (this.Institucion.colorinstitucion.length > 0) {
          document.documentElement.style.setProperty(
            "--main-color",
            this.Institucion.colorinstitucion[0].color_primario
          );
          document.documentElement.style.setProperty(
            "--main-color-2",
            this.Institucion.colorinstitucion[0].color_secundario
          );
          document.documentElement.style.setProperty(
            "--main-color-3",
            this.Institucion.colorinstitucion[0].color_terciario
          );
        }*/
        /*this.setImages(response.data.Descripcion.portada);*/
      } catch (e) {
        console.log(e);
        if (error.code == "ERR_NETWORK") {
          this.$router.push("/error_network");
        }
      }
    },
    setImages(images) {
      if (Object.keys(images).length > 0) {
        let count = images.length;
        let i = 1;
        let img =
          this.url_api + "/InstitucionUpea/Portada/" + images[0].portada_imagen;
        document
          .querySelector(".banner-img")
          .setAttribute("style", 'background-image: url("' + img + '");');

        setInterval(() => {
          if (i <= count) {
            let img =
              this.url_api +
              "/InstitucionUpea/Portada/" +
              images[i - 1].portada_imagen;
            document
              .querySelector(".banner-img")
              .setAttribute("style", 'background-image: url("' + img + '");');
            i++;
          } else {
            i = 1;
            let img =
              this.url_api +
              "/InstitucionUpea/Portada/" +
              images[0].portada_imagen;
            document
              .querySelector(".banner-img")
              .setAttribute("style", 'background-image: url("' + img + '");');
          }
        }, 5000);
      } else {
        document
          .querySelector(".banner-img")
          .setAttribute("style", "@/assets/upea_fondo.jpg");
      }
      this.$store.commit("loading");
    },

    createdComponent(){
      this.getInstitucion();
      this.getMenuConv();
      this.getMenuCur();
      this.getLinks();
    },

    created() {
      this.createdComponent();
    },
  }
}
</script>
