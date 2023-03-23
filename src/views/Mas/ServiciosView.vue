<template>
    <content-comp :tipo="tipo"></content-comp>
</template>
<script>
import ContentComp from '@/components/ContentComp.vue'
export default {
    name : 'ServiciosView',
    data() {
        return {
            tipo: 'Servicios',
        };
    },
    components:{
        ContentComp
    }
}
</script>