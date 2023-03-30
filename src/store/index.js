import { createStore } from 'vuex'

export default createStore({
  //variables globales para todos los componentes.
  state: {
    url_api: import.meta.env.VITE_VUE_APP_ROOT_API,
    getter: true,
    MenuConvocatorias: [],
    MenuCursos: [],
    Links: [],
    Institucion: {},
    //no uso
    statusImg: true
  },
  getters: {
  },
  mutations: {
    //no uso
    loadOn() {
      document.querySelector("#preloader").style.visibility = "visible";
      window.scrollTo(0, 0);
    },
    loading() {
      document.querySelector("#preloader").style.visibility = "hidden";
    },
    clickLink(state) {
      state.getter = true
    },
  },
  actions: {
  },
  modules: {
  }
})
