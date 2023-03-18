import Api from "@/services/Api";

function getMenuConvocatorias(){
    return Api().get("/api/Tipoconvocatorias");
}

function getMenuCursos(){
    return Api().get("/api/TipoCurso");
}

function getLinks(){
    return Api().get("/api/linksIntExtAll");
}

export default {
 getMenuConvocatorias,
 getMenuCursos,
 getLinks,   
}
