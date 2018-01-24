import util from '@/api/common/util'
import * as url from '@/api/common/url'
import base from '@/api/common/apiBase'

export default {
  hotelMe (
    params,
    callback,
    callbackFailed
  ) {
    return util.createMethod(params, url.ENDPOINTS.hotelMe)
    .then(response => {
      let responseData = base.createCamel(response.data.data)
      callback(responseData)
    })
    .catch(error => { callbackFailed(error) })
  },
  hotelPrice (
    params,
    callback,
    callbackFailed
  ) {
    return util.createMethod(params, url.ENDPOINTS.hotelPrice)
    .then(response => {
      let responseData = base.createCamel(response.data.data)
      callback(responseData)
    })
    .catch(error => { callbackFailed(error) })
  },
  hotelDay (
    params,
    callback,
    callbackFailed
  ) {
    return util.createMethod(params, url.ENDPOINTS.hotelDay)
    .then(response => {
      let responseData = base.createCamel(response.data.data)
      callback(responseData)
    })
    .catch(error => { callbackFailed(error) })
  },
  hotelPlan (
    params,
    callback,
    callbackFailed
  ) {
    return util.createMethod(params, url.ENDPOINTS.hotelPlan)
    .then(response => {
      let responseData = base.createCamel(response.data.data)
      callback(responseData)
    })
    .catch(error => { callbackFailed(error) })
  },
  hotelPlanDetail (
    params,
    callback,
    callbackFailed
  ) {
    return util.createMethod(params, url.ENDPOINTS.hotelPlanDetail)
    .then(response => {
      let responseData = base.createCamel(response.data.data)
      callback(responseData)
    })
    .catch(error => { callbackFailed(error) })
  },
  hotelReservation (
    params,
    callback,
    callbackFailed
  ) {
    return util.createMethod(params, url.ENDPOINTS.hotelReservation)
    .then(response => {
      let responseData = base.createCamel(response.data.data)
      callback(responseData)
    })
    .catch(error => { callbackFailed(error) })
  }
}
