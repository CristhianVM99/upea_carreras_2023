<template>
    <content-comp :tipo="tipo"></content-comp>
</template>
<script>
import ContentComp from '@/components/ContentComp.vue'
export default {
    name : 'OfertasAcademicasView',
    data() {
        return {
            tipo: 'ofertas Academicas',
        };
    },
    components:{
        ContentComp
    }
}
</script>