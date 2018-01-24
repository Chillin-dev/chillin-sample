import util from '@/api/common/util'
import * as url from '@/api/common/url'
import base from '@/api/common/apiBase'

export default {
  cmsRegistry (
    params,
    callback,
    callbackFailed
  ) {
    return util.createMethod(params, url.ENDPOINTS.cmsRegistry)
    .then(response => {
      let responseData = base.createCamel(response.data.data)
      callback(responseData)
    })
    .catch(error => { callbackFailed(error) })
  }
}
