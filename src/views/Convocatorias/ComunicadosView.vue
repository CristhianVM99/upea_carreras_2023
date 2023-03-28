<template>
  <content-comp :tipo_conv="tipo_conv" :Comunicados="Comunicados"></content-comp>
</template>
<script>
import ContentComp from '@/components/ContentComp.vue'
import { mapState } from 'vuex'
import Services from '@/services/Services'
export default {
  name: 'ComunicadosView',
  data() {
    return {
      tipo_conv: 'comunicados',
      Comunicados: []
    }
  },
  components: {
    ContentComp
  },
  computed: {
    ...mapState(['url_api'])
  },
  methods: {
    async getConvocatorias() {
      try {
        const response = await Services.getConvocatoriasAll()
        response.data.forEach((conv) => {
          if (
            conv.con_estado == '1' &&
            conv.tipo_conv_comun.tipo_conv_comun_titulo == this.tipo_conv
          ) {
            this.Comunicados.push(conv)
          }
        })
      } catch (e) {
        console.log(e)
      }
    }
  },
  created() {
    this.getConvocatorias()
  }
}
</script>
