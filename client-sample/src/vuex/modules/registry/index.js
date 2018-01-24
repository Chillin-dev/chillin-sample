import manager from '@/api/registry'
import base from '@/vuex/base'
import Vue from 'vue'

const state = {
  cmsRegistryRequest: {
    checkinDt: null,
    checkoutDt: null,
    lodgingDt: null,
    regDt: null,
    regNum: null,
    name: null,
    roomTypeId: null
  },
  cmsRegistryResponse: {}
}

const actions = {
  setStatusCmsRegistryCheckinDt (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_REGISTRY_CHECKIN_DT', params)
  },
  setStatusCmsRegistryCheckoutDt (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_REGISTRY_CHECKOUT_DT', params)
  },
  setStatusCmsRegistryLodgingDt (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_REGISTRY_LODGING_DT', params)
  },
  setStatusCmsRegistryRegDt (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_REGISTRY_REG_DT', params)
  },
  setStatusCmsRegistryRegNum (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_REGISTRY_REG_NUM', params)
  },
  setStatusCmsRegistryName (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_REGISTRY_NAME', params)
  },
  setStatusCmsRegistryRoomTypeId (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_REGISTRY_ROOM_TYPE_ID', params)
  },
  cmsRegistryRequest (
  {commit, state}
  ) {
    commit('START_CONNECTION', null, { root: true })
    if (base.nullCheck(state.cmsRegistryRequest) === true) {
      manager.cmsRegistry(
        state.cmsRegistryRequest,
        response => {
          if (response.message === 'ok' || response.message === undefined || !response.message.match(/error/)) {
            if (response.accessToken) {
              sessionStorage.setItem('accessToken', response.accessToken)
            }
            commit('GOT_CMS_REGISTRY_RESPONSE', response)
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
      commit('GOT_ERROR', base.nullCheck(state.cmsRegistryRequest) + 'のパラメーターが空です', { root: true })
    }
  }
}

const getters = {
  getCmsRegistryResponse: state => {
    return state.cmsRegistryResponse
  }
}

const mutations = {
  SET_STATUS_CMS_REGISTRY_CHECKIN_DT (state, data) {
    Vue.set(state.cmsRegistryRequest, 'checkinDt', data)
  },
  SET_STATUS_CMS_REGISTRY_CHECKOUT_DT (state, data) {
    Vue.set(state.cmsRegistryRequest, 'checkoutDt', data)
  },
  SET_STATUS_CMS_REGISTRY_LODGING_DT (state, data) {
    Vue.set(state.cmsRegistryRequest, 'lodgingDt', data)
  },
  SET_STATUS_CMS_REGISTRY_REG_DT (state, data) {
    Vue.set(state.cmsRegistryRequest, 'regDt', data)
  },
  SET_STATUS_CMS_REGISTRY_REG_NUM (state, data) {
    Vue.set(state.cmsRegistryRequest, 'regNum', data)
  },
  SET_STATUS_CMS_REGISTRY_NAME (state, data) {
    Vue.set(state.cmsRegistryRequest, 'name', data)
  },
  SET_STATUS_CMS_REGISTRY_ROOM_TYPE_ID (state, data) {
    Vue.set(state.cmsRegistryRequest, 'roomTypeId', data)
  },
  GOT_CMS_REGISTRY_RESPONSE (state, data) {
    state.cmsRegistryResponse = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
