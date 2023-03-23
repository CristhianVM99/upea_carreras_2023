<template>
    <content-comp :tipo="tipo"></content-comp>
</template>
<script>
import ContentComp from '@/components/ContentComp.vue'
export default {
    name : 'AvisosView',
    data() {
        return {
            tipo: 'avisos',
        };
    },
    components:{
        ContentComp
    }
}
</script>