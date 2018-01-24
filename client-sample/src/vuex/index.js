import Vue from 'vue'
import Vuex from 'vuex'

import auth from '@/vuex/modules/auth'
import price from '@/vuex/modules/price'
import calender from '@/vuex/modules/calender'
import image from '@/vuex/modules/image'
import plan from '@/vuex/modules/plan'
import room from '@/vuex/modules/room'
import rooms from '@/vuex/modules/rooms'
import hotel from '@/vuex/modules/hotel'
import registry from '@/vuex/modules/registry'

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
    price,
    calender,
    image,
    plan,
    room,
    rooms,
    hotel,
    registry
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
