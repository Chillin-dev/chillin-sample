import util from '@/api/common/util'
import * as url from '@/api/common/url'
import base from '@/api/common/apiBase'

export default {
  cmsHotelRegistry (
    params,
    callback,
    callbackFailed
  ) {
    return util.createMethod(params, url.ENDPOINTS.cmsHotelRegistry)
    .then(response => {
      let responseData = base.createCamel(response.data.data)
      callback(responseData)
    })
    .catch(error => { callbackFailed(error) })
  },
  cmsHotelEdit (
    params,
    callback,
    callbackFailed
  ) {
    return util.createMethod(params, url.ENDPOINTS.cmsHotelEdit)
    .then(response => {
      let responseData = base.createCamel(response.data.data)
      callback(responseData)
    })
    .catch(error => { callbackFailed(error) })
  },
  cmsHotel (
    params,
    callback,
    callbackFailed
  ) {
    return util.createMethod(params, url.ENDPOINTS.cmsHotel)
    .then(response => {
      let responseData = base.createCamel(response.data.data)
      callback(responseData)
    })
    .catch(error => { callbackFailed(error) })
  }
}
