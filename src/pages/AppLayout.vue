<template>
  <header-comp-vue></header-comp-vue>  
  <router-view></router-view>
  <footer-comp-vue></footer-comp-vue>
</template>
<script>
import FooterCompVue from '../components/FooterComp.vue'
import HeaderCompVue from '../components/HeaderComp.vue'
import { mapState } from 'vuex'
import Services from '@/services/Services'

export default {
  name: 'AppLayout',
  components: {
    HeaderCompVue,
    FooterCompVue
  },
  computed: {
    ...mapState(['url_api', 'Institucion', 'MenuConvocatorias', 'MenuCursos','MenuAreasyCarreras','carrera_id'])
  },
  methods: {
    async getMenuConvocatorias() {
      try {
        //optencion de menu de convocatorias.
        const response = await Services.getMenuConvocatorias()

        //filtramos aquellos que siguen vigentes
        const filterConvocatorias = []
        response.data.forEach((data) => {
          if (data.tipo_conv_comun_estado == '1') {
            filterConvocatorias.push(data)
          }
        })
        this.$store.state.MenuConvocatorias = filterConvocatorias
      } catch (e) {
        console.log(e)
      }
    },

    async getMenuAreasyCarreras() {
      try {
        //optencion de menu de areas y carreras.
        const response = await Services.getMenuAreasyCarreras()        
        this.$store.state.MenuAreasyCarreras = response.data
        console.log(this.MenuAreasyCarreras)
      } catch (e) {
        console.log(e)
      }
    },

    async getMenuCursos() {
      try {
        //optencion del menu de los cursos.
        const response = await Services.getMenuCursos()

        //filtramos aquellos que siguen vigentes
        const filterCursos = []
        response.data.forEach((data) => {
          if (data.tipo_conv_curso_estado == '1') {
            filterCursos.push(data)
          }
        })
        this.$store.state.MenuCursos = filterCursos
      } catch (e) {
        console.log(e)
      }
    },

    async getLinks() {
      try {
        //optencion de menu de links.
        const response = await Services.getLinks()

        //filtramos aquellos que siguen vigentes
        let filterLinks = []
        response.data.forEach((data) => {
          if (data.ei_estado == '1') {
            filterLinks.push(data)
          }
        })
        this.$store.state.Links = filterLinks
      } catch (e) {
        console.log(e)
      }
    },

    async getInstitucion() {
      try {
        //optencion de los datos de la Institucion
        let response = await Services.getInstitucion()
        this.$store.state.Institucion = response.data.Descripcion        
        
        //asignacion de icon segun Institucion.
        this.setIconInstitucion()
        
        //asginacion de colores segun Institucion.
        this.setColorsInstitucion()

        /*this.setImages(response.data.Descripcion.portada); ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/        
      } catch (e) {
        console.log(e)
        if (e.code == 'ERR_NETWORK') {
          this.$router.push('/error_network')
        }
      }
    },

    setImages(images) {
      if (Object.keys(images).length > 0) {
        let count = images.length
        let i = 1
        let img = this.url_api + '/InstitucionUpea/Portada/' + images[0].portada_imagen
        document
          .querySelector('.banner-img')
          .setAttribute('style', 'background-image: url("' + img + '");')

        setInterval(() => {
          if (i <= count) {
            let img = this.url_api + '/InstitucionUpea/Portada/' + images[i - 1].portada_imagen
            document
              .querySelector('.banner-img')
              .setAttribute('style', 'background-image: url("' + img + '");')
            i++
          } else {
            i = 1
            let img = this.url_api + '/InstitucionUpea/Portada/' + images[0].portada_imagen
            document
              .querySelector('.banner-img')
              .setAttribute('style', 'background-image: url("' + img + '");')
          }
        }, 5000)
      } else {
        document.querySelector('.banner-img').setAttribute('style', '@/assets/upea_fondo.jpg')
      }
      this.$store.commit('loading')
    },

    setIconInstitucion(){
      document
          .querySelector('#icon')
          .setAttribute(
            'href',
            this.url_api + '/InstitucionUpea/' + this.Institucion.institucion_logo
          )      
    },

    setColorsInstitucion(){
      if (this.Institucion.colorinstitucion.length > 0) {
          document.documentElement.style.setProperty(
            '--main-color',
            this.Institucion.colorinstitucion[0].color_primario
          )
          document.documentElement.style.setProperty(
            '--main-color-2',
            this.Institucion.colorinstitucion[0].color_secundario
          )
        }
    },

    //metodo que ejecuta todos los demas
    createdComponent() {
      this.getInstitucion()
      this.getMenuAreasyCarreras()
      if(this.carrera_id!=0){
        this.getMenuConvocatorias()
        this.getMenuCursos()
        this.getLinks()
      }
    },

  },
  created() {
    //creamos el componente
    this.createdComponent()
  },    
}
</script>
