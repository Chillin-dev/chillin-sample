import manager from '@/api/calender'
import base from '@/vuex/base'
import Vue from 'vue'

const state = {
  cmsCarenderRequest: {
    year: null,
    month: null
  },
  cmsCarenderResponse: {},
  cmsCarenderRegisterRequest: {
    date: null
  },
  cmsCarenderRegisterResponse: {}
}

const actions = {
  setStatusCmsCarenderYear (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_CARENDER_YEAR', params)
  },
  setStatusCmsCarenderMonth (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_CARENDER_MONTH', params)
  },
  cmsCarenderRequest (
  {commit, state}
  ) {
    commit('START_CONNECTION', null, { root: true })
    if (base.nullCheck(state.cmsCarenderRequest) === true) {
      manager.cmsCarender(
        state.cmsCarenderRequest,
        response => {
          if (response.message === 'ok' || response.message === undefined || !response.message.match(/error/)) {
            if (response.accessToken) {
              sessionStorage.setItem('accessToken', response.accessToken)
            }
            commit('GOT_CMS_CARENDER_RESPONSE', response)
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
      commit('GOT_ERROR', base.nullCheck(state.cmsCarenderRequest) + 'のパラメーターが空です', { root: true })
    }
  },
  setStatusCmsCarenderRegisterDate (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_CARENDER_REGISTER_DATE', params)
  },
  cmsCarenderRegisterRequest (
  {commit, state}
  ) {
    commit('START_CONNECTION', null, { root: true })
    if (base.nullCheck(state.cmsCarenderRegisterRequest) === true) {
      manager.cmsCarenderRegister(
        state.cmsCarenderRegisterRequest,
        response => {
          if (response.message === 'ok' || response.message === undefined || !response.message.match(/error/)) {
            if (response.accessToken) {
              sessionStorage.setItem('accessToken', response.accessToken)
            }
            commit('GOT_CMS_CARENDER_REGISTER_RESPONSE', response)
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
      commit('GOT_ERROR', base.nullCheck(state.cmsCarenderRegisterRequest) + 'のパラメーターが空です', { root: true })
    }
  }
}

const getters = {
  getCmsCarenderResponse: state => {
    return state.cmsCarenderResponse
  },
  getCmsCarenderRegisterResponse: state => {
    return state.cmsCarenderRegisterResponse
  }
}

const mutations = {
  SET_STATUS_CMS_CARENDER_YEAR (state, data) {
    Vue.set(state.cmsCarenderRequest, 'year', data)
  },
  SET_STATUS_CMS_CARENDER_MONTH (state, data) {
    Vue.set(state.cmsCarenderRequest, 'month', data)
  },
  GOT_CMS_CARENDER_RESPONSE (state, data) {
    state.cmsCarenderResponse = data
  },
  SET_STATUS_CMS_CARENDER_REGISTER_DATE (state, data) {
    Vue.set(state.cmsCarenderRegisterRequest, 'date', data)
  },
  GOT_CMS_CARENDER_REGISTER_RESPONSE (state, data) {
    state.cmsCarenderRegisterResponse = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
