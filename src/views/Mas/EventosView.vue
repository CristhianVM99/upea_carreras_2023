<template>
    <content-comp :tipo="tipo"></content-comp>
</template>
<script>
import ContentComp from '@/components/ContentComp.vue'
export default {
    name : 'EventosView',
    data() {
        return {
            tipo: 'eventos',
        };
    },
    components:{
        ContentComp
    }
}
</script>