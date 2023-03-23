<template>
    <content-comp :tipo="tipo"></content-comp>
</template>
<script>
import ContentComp from '@/components/ContentComp.vue'
export default {
    name : 'PublicacionesView',
    data() {
        return {
            tipo: 'publicaciones',
        };
    },
    components:{
        ContentComp
    }
}
</script>