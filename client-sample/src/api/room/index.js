import util from '@/api/common/util'
import * as url from '@/api/common/url'
import base from '@/api/common/apiBase'

export default {
  cmsRooms (
    params,
    callback,
    callbackFailed
  ) {
    return util.createMethod(params, url.ENDPOINTS.cmsRooms)
    .then(response => {
      let responseData = base.createCamel(response.data.data)
      callback(responseData)
    })
    .catch(error => { callbackFailed(error) })
  },
  cmsRoomsAdd (
    params,
    callback,
    callbackFailed
  ) {
    return util.createMethod(params, url.ENDPOINTS.cmsRoomsAdd)
    .then(response => {
      let responseData = base.createCamel(response.data.data)
      callback(responseData)
    })
    .catch(error => { callbackFailed(error) })
  },
  cmsAmenity (
    params,
    callback,
    callbackFailed
  ) {
    return util.createMethod(params, url.ENDPOINTS.cmsAmenity)
    .then(response => {
      let responseData = base.createCamel(response.data.data)
      callback(responseData)
    })
    .catch(error => { callbackFailed(error) })
  }
}
