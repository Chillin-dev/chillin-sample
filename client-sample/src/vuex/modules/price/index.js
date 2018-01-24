import manager from '@/api/price'
import base from '@/vuex/base'
import Vue from 'vue'

const state = {
  cmsPriceRegistrationRequest: {
    prices: null
  },
  cmsPriceRegistrationResponse: {},
  cmsPriceRequest: {
  },
  cmsPriceResponse: {}
}

const actions = {
  setStatusCmsPriceRegistrationPrices (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_PRICE_REGISTRATION_PRICES', params)
  },
  cmsPriceRegistrationRequest (
  {commit, state}
  ) {
    commit('START_CONNECTION', null, { root: true })
    if (base.nullCheck(state.cmsPriceRegistrationRequest) === true) {
      manager.cmsPriceRegistration(
        state.cmsPriceRegistrationRequest,
        response => {
          if (response.message === 'ok' || response.message === undefined || !response.message.match(/error/)) {
            if (response.accessToken) {
              sessionStorage.setItem('accessToken', response.accessToken)
            }
            commit('GOT_CMS_PRICE_REGISTRATION_RESPONSE', response)
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
      commit('GOT_ERROR', base.nullCheck(state.cmsPriceRegistrationRequest) + 'のパラメーターが空です', { root: true })
    }
  },
  cmsPriceRequest (
  {commit, state}
  ) {
    commit('START_CONNECTION', null, { root: true })
    if (base.nullCheck(state.cmsPriceRequest) === true) {
      manager.cmsPrice(
        state.cmsPriceRequest,
        response => {
          if (response.message === 'ok' || response.message === undefined || !response.message.match(/error/)) {
            if (response.accessToken) {
              sessionStorage.setItem('accessToken', response.accessToken)
            }
            commit('GOT_CMS_PRICE_RESPONSE', response)
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
      commit('GOT_ERROR', base.nullCheck(state.cmsPriceRequest) + 'のパラメーターが空です', { root: true })
    }
  }
}

const getters = {
  getCmsPriceRegistrationResponse: state => {
    return state.cmsPriceRegistrationResponse
  },
  getCmsPriceResponse: state => {
    return state.cmsPriceResponse
  }
}

const mutations = {
  SET_STATUS_CMS_PRICE_REGISTRATION_PRICES (state, data) {
    Vue.set(state.cmsPriceRegistrationRequest, 'prices', data)
  },
  GOT_CMS_PRICE_REGISTRATION_RESPONSE (state, data) {
    state.cmsPriceRegistrationResponse = data
  },
  GOT_CMS_PRICE_RESPONSE (state, data) {
    state.cmsPriceResponse = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
