<template>
    <content-comp :tipo="tipo"></content-comp>
</template>
<script>
import ContentComp from '@/components/ContentComp.vue'
export default {
    name : 'GacetasView',
    data() {
        return {
            tipo: 'gacetas',
        };
    },
    components:{
        ContentComp
    }
}
</script>