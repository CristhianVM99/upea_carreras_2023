import Api from '@/services/Api'

function getMenuConvocatorias() {
  return Api().get('/api/Tipoconvocatorias')
}

function getMenuCursos() {
  return Api().get('/api/TipoCurso')
}

function getLinks() {
  return Api().get('/api/linksIntExtAll/' + import.meta.env.VITE_VUE_APP_ID_INSTITUCION)
}

function getInstitucion() {
  return Api().get('/api/InstitucionUPEA/'+import.meta.env.VITE_VUE_APP_ID_INSTITUCION)
}

//Home View 
function getConvocatoriasAll(){
    return Api().get('/api/convocatoriasAll/' + import.meta.env.VITE_VUE_APP_ID_CARRERA)
}

function getCursosAll(){
  return Api().get('/api/cursosAll/' + import.meta.env.VITE_VUE_APP_ID_CARRERA)
}

function getServiciosAll(){
  return Api().get('/api/ServicioAll/' + import.meta.env.VITE_VUE_APP_ID_CARRERA)
}

function getOfertasAll(){
  return Api().get('/api/OfertasAcademicasAll/' + import.meta.env.VITE_VUE_APP_ID_CARRERA)
}

function getPublicaciones(){
  return Api().get('/api/publicacionesAll/'+ import.meta.env.VITE_VUE_APP_ID_INSTITUCION)
}

function getGacetaAll(){
  return Api().get('/api/gacetaunivAll' + import.meta.env.VITE_VUE_APP_ID_INSTITUCION)
}

function getEventos(){
  return Api().get('/api/eventoAll/' + import.meta.env.VITE_VUE_APP_ID_INSTITUCION)
}

function getVideos(){
  return Api().get('/api/VideosAll' + import.meta.env.VITE_VUE_APP_ID_INSTITUCION)
}

export default {
  getMenuConvocatorias,
  getMenuCursos,
  getLinks,
  getInstitucion,
  //Home View
  getConvocatoriasAll,
  getCursosAll,
  getServiciosAll,
  getOfertasAll,
  getPublicaciones,
  getGacetaAll,
  getEventos,
  getVideos
  
}
