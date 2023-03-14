<template>  
    <header-comp-vue></header-comp-vue>    
    <content-comp-vue></content-comp-vue>
    <footer-comp-vue></footer-comp-vue>
</template>
<script>
import contentCompVue from '../components/contentComp.vue'
import FooterCompVue from '../components/FooterComp.vue'
import HeaderCompVue from '../components/HeaderComp.vue'

export default {
    name : 'AppLayout',
    components: {
        HeaderCompVue,
        FooterCompVue,
        contentCompVue,
    }
}
</script>