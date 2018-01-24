import manager from '@/api/hotel'
import base from '@/vuex/base'
import Vue from 'vue'

const state = {
  cmsHotelRegistryRequest: {
    name: null,
    companyName: null,
    eyecatchUrl: null,
    hashtag: null,
    twitter: null,
    address: null,
    location: null
  },
  cmsHotelRegistryResponse: {},
  cmsHotelEditRequest: {
    name: null,
    companyName: null,
    eyecatchUrl: null,
    hashtag: null,
    twitter: null,
    address: null,
    location: null
  },
  cmsHotelEditResponse: {},
  cmsHotelRequest: {
  },
  cmsHotelResponse: {}
}

const actions = {
  setStatusCmsHotelRegistryName (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_HOTEL_REGISTRY_NAME', params)
  },
  setStatusCmsHotelRegistryCompanyName (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_HOTEL_REGISTRY_COMPANY_NAME', params)
  },
  setStatusCmsHotelRegistryEyecatchUrl (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_HOTEL_REGISTRY_EYECATCH_URL', params)
  },
  setStatusCmsHotelRegistryHashtag (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_HOTEL_REGISTRY_HASHTAG', params)
  },
  setStatusCmsHotelRegistryTwitter (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_HOTEL_REGISTRY_TWITTER', params)
  },
  setStatusCmsHotelRegistryAddress (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_HOTEL_REGISTRY_ADDRESS', params)
  },
  setStatusCmsHotelRegistryLocation (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_HOTEL_REGISTRY_LOCATION', params)
  },
  cmsHotelRegistryRequest (
  {commit, state}
  ) {
    commit('START_CONNECTION', null, { root: true })
    if (base.nullCheck(state.cmsHotelRegistryRequest) === true) {
      manager.cmsHotelRegistry(
        state.cmsHotelRegistryRequest,
        response => {
          if (response.message === 'ok' || response.message === undefined || !response.message.match(/error/)) {
            if (response.accessToken) {
              sessionStorage.setItem('accessToken', response.accessToken)
            }
            commit('GOT_CMS_HOTEL_REGISTRY_RESPONSE', response)
            commit('END_CONNECTION', null, { root: true })
          } else {
            commit('GOT_ERROR', response.message, { root: true })
          }
        },
        error => {
          error = base.sessionExpired(error.toString())
          commit('GOT_ERROR', '通信エラーです' + '\n' + error, { root: true })
        }
      )
    } else {
      commit('GOT_ERROR', base.nullCheck(state.cmsHotelRegistryRequest) + 'のパラメーターが空です', { root: true })
    }
  },
  setStatusCmsHotelEditName (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_HOTEL_EDIT_NAME', params)
  },
  setStatusCmsHotelEditCompanyName (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_HOTEL_EDIT_COMPANY_NAME', params)
  },
  setStatusCmsHotelEditEyecatchUrl (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_HOTEL_EDIT_EYECATCH_URL', params)
  },
  setStatusCmsHotelEditHashtag (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_HOTEL_EDIT_HASHTAG', params)
  },
  setStatusCmsHotelEditTwitter (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_HOTEL_EDIT_TWITTER', params)
  },
  setStatusCmsHotelEditAddress (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_HOTEL_EDIT_ADDRESS', params)
  },
  setStatusCmsHotelEditLocation (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_HOTEL_EDIT_LOCATION', params)
  },
  cmsHotelEditRequest (
  {commit, state}
  ) {
    commit('START_CONNECTION', null, { root: true })
    if (base.nullCheck(state.cmsHotelEditRequest) === true) {
      manager.cmsHotelEdit(
        state.cmsHotelEditRequest,
        response => {
          if (response.message === 'ok' || response.message === undefined || !response.message.match(/error/)) {
            if (response.accessToken) {
              sessionStorage.setItem('accessToken', response.accessToken)
            }
            commit('GOT_CMS_HOTEL_EDIT_RESPONSE', response)
            commit('END_CONNECTION', null, { root: true })
          } else {
            commit('GOT_ERROR', response.message, { root: true })
          }
        },
        error => {
          error = base.sessionExpired(error.toString())
          commit('GOT_ERROR', '通信エラーです' + '\n' + error, { root: true })
        }
      )
    } else {
      commit('GOT_ERROR', base.nullCheck(state.cmsHotelEditRequest) + 'のパラメーターが空です', { root: true })
    }
  },
  cmsHotelRequest (
  {commit, state}
  ) {
    commit('START_CONNECTION', null, { root: true })
    if (base.nullCheck(state.cmsHotelRequest) === true) {
      manager.cmsHotel(
        state.cmsHotelRequest,
        response => {
          if (response.message === 'ok' || response.message === undefined || !response.message.match(/error/)) {
            if (response.accessToken) {
              sessionStorage.setItem('accessToken', response.accessToken)
            }
            commit('GOT_CMS_HOTEL_RESPONSE', response)
            commit('END_CONNECTION', null, { root: true })
          } else {
            commit('GOT_ERROR', response.message, { root: true })
          }
        },
        error => {
          error = base.sessionExpired(error.toString())
          commit('GOT_ERROR', '通信エラーです' + '\n' + error, { root: true })
        }
      )
    } else {
      commit('GOT_ERROR', base.nullCheck(state.cmsHotelRequest) + 'のパラメーターが空です', { root: true })
    }
  }
}

const getters = {
  getCmsHotelRegistryResponse: state => {
    return state.cmsHotelRegistryResponse
  },
  getCmsHotelEditResponse: state => {
    return state.cmsHotelEditResponse
  },
  getCmsHotelResponse: state => {
    return state.cmsHotelResponse
  }
}

const mutations = {
  SET_STATUS_CMS_HOTEL_REGISTRY_NAME (state, data) {
    Vue.set(state.cmsHotelRegistryRequest, 'name', data)
  },
  SET_STATUS_CMS_HOTEL_REGISTRY_COMPANY_NAME (state, data) {
    Vue.set(state.cmsHotelRegistryRequest, 'companyName', data)
  },
  SET_STATUS_CMS_HOTEL_REGISTRY_EYECATCH_URL (state, data) {
    Vue.set(state.cmsHotelRegistryRequest, 'eyecatchUrl', data)
  },
  SET_STATUS_CMS_HOTEL_REGISTRY_HASHTAG (state, data) {
    Vue.set(state.cmsHotelRegistryRequest, 'hashtag', data)
  },
  SET_STATUS_CMS_HOTEL_REGISTRY_TWITTER (state, data) {
    Vue.set(state.cmsHotelRegistryRequest, 'twitter', data)
  },
  SET_STATUS_CMS_HOTEL_REGISTRY_ADDRESS (state, data) {
    Vue.set(state.cmsHotelRegistryRequest, 'address', data)
  },
  SET_STATUS_CMS_HOTEL_REGISTRY_LOCATION (state, data) {
    Vue.set(state.cmsHotelRegistryRequest, 'location', data)
  },
  GOT_CMS_HOTEL_REGISTRY_RESPONSE (state, data) {
    state.cmsHotelRegistryResponse = data
  },
  SET_STATUS_CMS_HOTEL_EDIT_NAME (state, data) {
    Vue.set(state.cmsHotelEditRequest, 'name', data)
  },
  SET_STATUS_CMS_HOTEL_EDIT_COMPANY_NAME (state, data) {
    Vue.set(state.cmsHotelEditRequest, 'companyName', data)
  },
  SET_STATUS_CMS_HOTEL_EDIT_EYECATCH_URL (state, data) {
    Vue.set(state.cmsHotelEditRequest, 'eyecatchUrl', data)
  },
  SET_STATUS_CMS_HOTEL_EDIT_HASHTAG (state, data) {
    Vue.set(state.cmsHotelEditRequest, 'hashtag', data)
  },
  SET_STATUS_CMS_HOTEL_EDIT_TWITTER (state, data) {
    Vue.set(state.cmsHotelEditRequest, 'twitter', data)
  },
  SET_STATUS_CMS_HOTEL_EDIT_ADDRESS (state, data) {
    Vue.set(state.cmsHotelEditRequest, 'address', data)
  },
  SET_STATUS_CMS_HOTEL_EDIT_LOCATION (state, data) {
    Vue.set(state.cmsHotelEditRequest, 'location', data)
  },
  GOT_CMS_HOTEL_EDIT_RESPONSE (state, data) {
    state.cmsHotelEditResponse = data
  },
  GOT_CMS_HOTEL_RESPONSE (state, data) {
    state.cmsHotelResponse = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
