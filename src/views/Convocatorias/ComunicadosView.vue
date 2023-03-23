<template>
    <content-comp :tipo="tipo"></content-comp>
</template>
<script>
import ContentComp from '@/components/ContentComp.vue'
export default {
    name : 'ComunicadosView',
    data() {
        return {
            tipo: 'comunicados',
        };
    },
    components:{
        ContentComp
    }
}
</script>