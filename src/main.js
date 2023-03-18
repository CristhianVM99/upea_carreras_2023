import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import vueAxios from 'vue-axios';

//import './assets/main.css'

const app = createApp(App);
app.use(router);
app.use(store);
app.use(vueAxios, axios);
app.mount('#app');
