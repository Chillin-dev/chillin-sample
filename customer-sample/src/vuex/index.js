import Vue from 'vue'
import Vuex from 'vuex'

import auth from '@/vuex/modules/auth'
import user from '@/vuex/modules/user'
import hotel from '@/vuex/modules/hotel'

Vue.use(Vuex)
export default new Vuex.Store({
  state: { // 全体で使うやつ
    accesstoken: sessionStorage.accesstoken,
    isLoading: false,
    error: false,
    errorMessage: ''
  },
  modules: {
    auth,
    user,
    hotel
  },
  getters: {
    getErrorMessage: state => {
      return state.errorMessage
    }
  },
  actions: {
    errorReset (
      {commit, state}
    ) {
      commit('GOT_ERROR', '')
    }
  },
  mutations: {
    GOT_ACCESS_TOKEN (state, accessToken) {
      console.log(accessToken)
      state.isLoading = false
      state.accessToken = accessToken
    },
    START_CONNECTION (state) {
      state.isLoading = true
    },
    END_CONNECTION (state) {
      state.isLoading = false
    },
    GOT_ERROR (state, message) {
      state.isLoading = false
      state.error = true
      state.errorMessage = message
      console.log(state.errorMessage)
    }
  }
})
