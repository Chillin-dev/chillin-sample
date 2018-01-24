import manager from '@/api/auth'
import base from '@/vuex/base'
import Vue from 'vue'

const state = {
  cmsAuthCreateaccountRequest: {
    mail: null,
    password: null,
    name: null
  },
  cmsAuthCreateaccountResponse: {},
  cmsAuthSigninRequest: {
    uuid: null,
    cs: null
  },
  cmsAuthSigninResponse: {}
}

const actions = {
  setStatusCmsAuthCreateaccountMail (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_AUTH_CREATEACCOUNT_MAIL', params)
  },
  setStatusCmsAuthCreateaccountPassword (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_AUTH_CREATEACCOUNT_PASSWORD', params)
  },
  setStatusCmsAuthCreateaccountName (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_AUTH_CREATEACCOUNT_NAME', params)
  },
  cmsAuthCreateaccountRequest (
  {commit, state}
  ) {
    commit('START_CONNECTION', null, { root: true })
    if (base.nullCheck(state.cmsAuthCreateaccountRequest) === true) {
      manager.cmsAuthCreateaccount(
        state.cmsAuthCreateaccountRequest,
        response => {
          if (response.message === 'ok' || response.message === undefined || !response.message.match(/error/)) {
            if (response.accessToken) {
              sessionStorage.setItem('accessToken', response.accessToken)
            }
            commit('GOT_CMS_AUTH_CREATEACCOUNT_RESPONSE', response)
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
      commit('GOT_ERROR', base.nullCheck(state.cmsAuthCreateaccountRequest) + 'のパラメーターが空です', { root: true })
    }
  },
  setStatusCmsAuthSigninUuid (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_AUTH_SIGNIN_UUID', params)
  },
  setStatusCmsAuthSigninCs (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_AUTH_SIGNIN_CS', params)
  },
  cmsAuthSigninRequest (
  {commit, state}
  ) {
    commit('START_CONNECTION', null, { root: true })
    if (base.nullCheck(state.cmsAuthSigninRequest) === true) {
      manager.cmsAuthSignin(
        state.cmsAuthSigninRequest,
        response => {
          if (response.message === 'ok' || response.message === undefined || !response.message.match(/error/)) {
            if (response.accessToken) {
              sessionStorage.setItem('accessToken', response.accessToken)
            }
            commit('GOT_CMS_AUTH_SIGNIN_RESPONSE', response)
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
      commit('GOT_ERROR', base.nullCheck(state.cmsAuthSigninRequest) + 'のパラメーターが空です', { root: true })
    }
  }
}

const getters = {
  getCmsAuthCreateaccountResponse: state => {
    return state.cmsAuthCreateaccountResponse
  },
  getCmsAuthSigninResponse: state => {
    return state.cmsAuthSigninResponse
  }
}

const mutations = {
  SET_STATUS_CMS_AUTH_CREATEACCOUNT_MAIL (state, data) {
    Vue.set(state.cmsAuthCreateaccountRequest, 'mail', data)
  },
  SET_STATUS_CMS_AUTH_CREATEACCOUNT_PASSWORD (state, data) {
    Vue.set(state.cmsAuthCreateaccountRequest, 'password', data)
  },
  SET_STATUS_CMS_AUTH_CREATEACCOUNT_NAME (state, data) {
    Vue.set(state.cmsAuthCreateaccountRequest, 'name', data)
  },
  GOT_CMS_AUTH_CREATEACCOUNT_RESPONSE (state, data) {
    state.cmsAuthCreateaccountResponse = data
  },
  SET_STATUS_CMS_AUTH_SIGNIN_UUID (state, data) {
    Vue.set(state.cmsAuthSigninRequest, 'uuid', data)
  },
  SET_STATUS_CMS_AUTH_SIGNIN_CS (state, data) {
    Vue.set(state.cmsAuthSigninRequest, 'cs', data)
  },
  GOT_CMS_AUTH_SIGNIN_RESPONSE (state, data) {
    state.cmsAuthSigninResponse = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
