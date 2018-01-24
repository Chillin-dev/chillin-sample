import util from '@/api/common/util'
import * as url from '@/api/common/url'
import base from '@/api/common/apiBase'

export default {
  memberMe (
    params,
    callback,
    callbackFailed
  ) {
    return util.createMethod(params, url.ENDPOINTS.memberMe)
    .then(response => {
      let responseData = base.createCamel(response.data.data)
      callback(responseData)
    })
    .catch(error => { callbackFailed(error) })
  },
  memberMeEdit (
    params,
    callback,
    callbackFailed
  ) {
    return util.createMethod(params, url.ENDPOINTS.memberMeEdit)
    .then(response => {
      let responseData = base.createCamel(response.data.data)
      callback(responseData)
    })
    .catch(error => { callbackFailed(error) })
  }
}
