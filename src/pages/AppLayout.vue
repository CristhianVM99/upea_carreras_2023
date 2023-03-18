<template>
  <header-comp-vue></header-comp-vue>
  <!--<content-comp-vue></content-comp-vue>-->
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
    ...mapState(['Institucion', 'MenuConvocatorias', 'MenuCursos', 'Colors', 'statusImg'])
  },
  methods: {
    async getMenuConv() {
      try {
        const response = await Services.getMenuConvocatorias()
        const filterConv = []

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
  }
}
</script>
