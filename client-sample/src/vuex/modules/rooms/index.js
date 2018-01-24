import manager from '@/api/rooms'
import base from '@/vuex/base'
import Vue from 'vue'

const state = {
  cmsAmenityAddRequest: {
    name: null
  },
  cmsAmenityAddResponse: {}
}

const actions = {
  setStatusCmsAmenityAddName (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_AMENITY_ADD_NAME', params)
  },
  cmsAmenityAddRequest (
  {commit, state}
  ) {
    commit('START_CONNECTION', null, { root: true })
    if (base.nullCheck(state.cmsAmenityAddRequest) === true) {
      manager.cmsAmenityAdd(
        state.cmsAmenityAddRequest,
        response => {
          if (response.message === 'ok' || response.message === undefined || !response.message.match(/error/)) {
            if (response.accessToken) {
              sessionStorage.setItem('accessToken', response.accessToken)
            }
            commit('GOT_CMS_AMENITY_ADD_RESPONSE', response)
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
      commit('GOT_ERROR', base.nullCheck(state.cmsAmenityAddRequest) + 'のパラメーターが空です', { root: true })
    }
  }
}

const getters = {
  getCmsAmenityAddResponse: state => {
    return state.cmsAmenityAddResponse
  }
}

const mutations = {
  SET_STATUS_CMS_AMENITY_ADD_NAME (state, data) {
    Vue.set(state.cmsAmenityAddRequest, 'name', data)
  },
  GOT_CMS_AMENITY_ADD_RESPONSE (state, data) {
    state.cmsAmenityAddResponse = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
