<template>
  <content-comp :tipo_conv="tipo_conv" :Convocatorias="this.Convocatorias"></content-comp>
</template>
<script>
import ContentComp from '@/components/ContentComp.vue'
import { mapState } from 'vuex'
import Services from '@/services/Services'
export default {
  name: 'AvisosView',
  data() {
    return {
      tipo_conv: 'AVISOS',
      Convocatorias: []
    }
  },
  components: {
    ContentComp
  },
  computed: {
    ...mapState(['url_api', 'Institucion'])
  },
  methods: {
    async getConvocatorias() {
      try {
        const response = await Services.getConvocatoriasAll()        
        response.data.forEach((conv) => {
          if (conv.con_estado == '1' && conv.tipo_conv_comun.tipo_conv_comun_titulo == this.tipo_conv) {
            this.Convocatorias.push(conv)
          }          
        })        
      } catch (e) {
        console.log(e)
      }
    },    
  },
  created(){
    this.getConvocatorias();
    console.log(this.Convocatorias)
    console.log(typeof(this.Convocatorias))
  }

}
</script>
