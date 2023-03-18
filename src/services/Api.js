import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'https://serviciopagina.upea.bo',
    headers: {
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'application/json',
      Accept: 'application/json',
      'content-type': 'application/json'
    }
  })
}
