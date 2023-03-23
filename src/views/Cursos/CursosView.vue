<template>
    <content-comp :tipo="tipo"></content-comp>
</template>
<script>
import ContentComp from '@/components/ContentComp.vue'
export default {
    name : 'CursosView',
    data() {
        return {
            tipo: 'cursos',
        };
    },
    components:{
        ContentComp
    }
}
</script>