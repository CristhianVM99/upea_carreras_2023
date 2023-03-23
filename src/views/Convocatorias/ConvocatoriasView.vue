<template>
    <content-comp :tipo="tipo"></content-comp>
</template>
<script>
import ContentComp from '@/components/ContentComp.vue'
export default {
    name : 'ConvocatoriasView',
    data() {
        return {
            tipo: 'convocatorias',
        };
    },
    components:{
        ContentComp
    }
}
</script>