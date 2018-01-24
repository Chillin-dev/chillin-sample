import manager from '@/api/image'
import base from '@/vuex/base'
import Vue from 'vue'

const state = {
  cmsImageUploadRequest: {
    file: null
  },
  cmsImageUploadResponse: {},
  cmsImageRequest: {
  },
  cmsImageResponse: {}
}

const actions = {
  setStatusCmsImageUploadFile (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_IMAGE_UPLOAD_FILE', params)
  },
  cmsImageUploadRequest (
  {commit, state}
  ) {
    commit('START_CONNECTION', null, { root: true })
    if (base.nullCheck(state.cmsImageUploadRequest) === true) {
      manager.cmsImageUpload(
        state.cmsImageUploadRequest,
        response => {
          if (response.message === 'ok' || response.message === undefined || !response.message.match(/error/)) {
            if (response.accessToken) {
              sessionStorage.setItem('accessToken', response.accessToken)
            }
            commit('GOT_CMS_IMAGE_UPLOAD_RESPONSE', response)
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
      commit('GOT_ERROR', base.nullCheck(state.cmsImageUploadRequest) + 'のパラメーターが空です', { root: true })
    }
  },
  cmsImageRequest (
  {commit, state}
  ) {
    commit('START_CONNECTION', null, { root: true })
    if (base.nullCheck(state.cmsImageRequest) === true) {
      manager.cmsImage(
        state.cmsImageRequest,
        response => {
          if (response.message === 'ok' || response.message === undefined || !response.message.match(/error/)) {
            if (response.accessToken) {
              sessionStorage.setItem('accessToken', response.accessToken)
            }
            commit('GOT_CMS_IMAGE_RESPONSE', response)
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
      commit('GOT_ERROR', base.nullCheck(state.cmsImageRequest) + 'のパラメーターが空です', { root: true })
    }
  }
}

const getters = {
  getCmsImageUploadResponse: state => {
    return state.cmsImageUploadResponse
  },
  getCmsImageResponse: state => {
    return state.cmsImageResponse
  }
}

const mutations = {
  SET_STATUS_CMS_IMAGE_UPLOAD_FILE (state, data) {
    Vue.set(state.cmsImageUploadRequest, 'file', data)
  },
  GOT_CMS_IMAGE_UPLOAD_RESPONSE (state, data) {
    state.cmsImageUploadResponse = data
  },
  GOT_CMS_IMAGE_RESPONSE (state, data) {
    state.cmsImageResponse = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
