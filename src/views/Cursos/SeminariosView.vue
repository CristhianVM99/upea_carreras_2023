<template>
    <content-comp :tipo="tipo"></content-comp>
</template>
<script>
import ContentComp from '@/components/ContentComp.vue'
export default {
    name : 'SeminariosView',
    data() {
        return {
            tipo: 'seminarios',
        };
    },
    components:{
        ContentComp
    }
}
</script>