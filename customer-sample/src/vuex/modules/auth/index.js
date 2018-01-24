import manager from '@/api/auth'
import base from '@/vuex/base'
import Vue from 'vue'

const state = {
  authCreateuuidRequest: {
    mail: null,
    password: null
  },
  authCreateuuidResponse: {},
  authCreatesessionRequest: {
    uuid: null,
    cs: null
  },
  authCreatesessionResponse: {}
}

const actions = {
  setStatusAuthCreateuuidMail (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_AUTH_CREATEUUID_MAIL', params)
  },
  setStatusAuthCreateuuidPassword (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_AUTH_CREATEUUID_PASSWORD', params)
  },
  authCreateuuidRequest (
  {commit, state}
  ) {
    commit('START_CONNECTION', null, { root: true })
    if (base.nullCheck(state.authCreateuuidRequest) === true) {
      manager.authCreateuuid(
        state.authCreateuuidRequest,
        response => {
          if (response.message === 'ok' || response.message === undefined || !response.message.match(/error/)) {
            if (response.accessToken) {
              sessionStorage.setItem('accessToken', response.accessToken)
            }
            commit('GOT_AUTH_CREATEUUID_RESPONSE', response)
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
      commit('GOT_ERROR', base.nullCheck(state.authCreateuuidRequest) + 'のパラメーターが空です', { root: true })
    }
  },
  setStatusAuthCreatesessionUuid (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_AUTH_CREATESESSION_UUID', params)
  },
  setStatusAuthCreatesessionCs (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_AUTH_CREATESESSION_CS', params)
  },
  authCreatesessionRequest (
  {commit, state}
  ) {
    commit('START_CONNECTION', null, { root: true })
    if (base.nullCheck(state.authCreatesessionRequest) === true) {
      manager.authCreatesession(
        state.authCreatesessionRequest,
        response => {
          if (response.message === 'ok' || response.message === undefined || !response.message.match(/error/)) {
            if (response.accessToken) {
              sessionStorage.setItem('accessToken', response.accessToken)
            }
            commit('GOT_AUTH_CREATESESSION_RESPONSE', response)
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
      commit('GOT_ERROR', base.nullCheck(state.authCreatesessionRequest) + 'のパラメーターが空です', { root: true })
    }
  }
}

const getters = {
  getAuthCreateuuidResponse: state => {
    return state.authCreateuuidResponse
  },
  getAuthCreatesessionResponse: state => {
    return state.authCreatesessionResponse
  }
}

const mutations = {
  SET_STATUS_AUTH_CREATEUUID_MAIL (state, data) {
    Vue.set(state.authCreateuuidRequest, 'mail', data)
  },
  SET_STATUS_AUTH_CREATEUUID_PASSWORD (state, data) {
    Vue.set(state.authCreateuuidRequest, 'password', data)
  },
  GOT_AUTH_CREATEUUID_RESPONSE (state, data) {
    state.authCreateuuidResponse = data
  },
  SET_STATUS_AUTH_CREATESESSION_UUID (state, data) {
    Vue.set(state.authCreatesessionRequest, 'uuid', data)
  },
  SET_STATUS_AUTH_CREATESESSION_CS (state, data) {
    Vue.set(state.authCreatesessionRequest, 'cs', data)
  },
  GOT_AUTH_CREATESESSION_RESPONSE (state, data) {
    state.authCreatesessionResponse = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
