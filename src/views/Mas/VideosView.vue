<template>
    <content-comp :tipo="tipo"></content-comp>
</template>
<script>
import ContentComp from '@/components/ContentComp.vue'
export default {
    name : 'VideosView',
    data() {
        return {
            tipo: 'videos',
        };
    },
    components:{
        ContentComp
    }
}
</script>