import axios from 'axios'
import * as url from './url'
import base from './apiBase'

export default {
  createMethod (data, endpoint) {
    let params = new URLSearchParams()
    params.append('session', sessionStorage.getItem('accessToken'))
    params.append('application_key', '8BCBE0C8BB19BFE21AEAF6C9B792A270BFFB27F2F4A41B5F710CC84F044E515D')
    base.nullCheck(data)
    params.append('data', base.createJson(data))
    return axios({
      method: 'post',
      url: url.BASE_URL + endpoint,
      data: params
    })
  }
}
