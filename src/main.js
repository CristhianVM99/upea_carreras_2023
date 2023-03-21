import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vueAxios from 'vue-axios'

//import './assets/main.css'

axios.defaults.headers = {
  'Access-Control-Allow-Credentials': true,
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'application/json',
  Accept: 'application/json',
  'content-type': 'application/json'
}

const app = createApp(App)
app.use(router)
app.use(store)
app.use(vueAxios, axios)
app.mount('#app')
