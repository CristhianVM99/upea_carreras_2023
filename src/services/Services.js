import Api from '@/services/Api'

function getMenuConvocatorias() {
  return Api().get('/api/Tipoconvocatorias')
}

function getMenuCursos() {
  return Api().get('/api/TipoCurso')
}

function getLinks() {
  return Api().get('/api/linksIntExtAll/' + import.meta.env.VUE_APP_ID_INSTITUCION)
}

function getInstitucion() {
  return Api().get('/api/InstitucionUPEA/' + import.meta.env.VUE_APP_ID_INSTITUCION)
}

function getConvocatoriasAll(){
    return Api().get('/api/convocatoriasAll/' + import.meta.env.VUE_APP_ID_CARRERA)
}

export default {
  getMenuConvocatorias,
  getMenuCursos,
  getLinks,
  getInstitucion,
  getConvocatoriasAll
}
