import { createStore } from 'vuex'

export default createStore({
  state: {
    url_api: import.meta.env.VUE_APP_ROOT_API,
    getter: true,
    MenuConvocatorias: [],
    MenuCursos: [],
    Links: [],
    Institucion: {},
    statusImg: true
  },
  getters: {
  },
  mutations: {
    /*loadOn() {
      document.querySelector("#preloader").style.visibility = "visible";
      window.scrollTo(0, 0);
    },
    loading() {
      document.querySelector("#preloader").style.visibility = "hidden";
    },
    clickLink(state) {
      state.getter = true
    },*/
  },
  actions: {
  },
  modules: {
  }
})
