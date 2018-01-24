import manager from '@/api/user'
import base from '@/vuex/base'
import Vue from 'vue'

const state = {
  memberMeRequest: {
  },
  memberMeResponse: {},
  memberMeEditRequest: {
    name: null,
    birthday: null,
    gender: null,
    address: null,
    company: null
  },
  memberMeEditResponse: {}
}

const actions = {
  memberMeRequest (
  {commit, state}
  ) {
    commit('START_CONNECTION', null, { root: true })
    if (base.nullCheck(state.memberMeRequest) === true) {
      manager.memberMe(
        state.memberMeRequest,
        response => {
          if (response.message === 'ok' || response.message === undefined || !response.message.match(/error/)) {
            if (response.accessToken) {
              sessionStorage.setItem('accessToken', response.accessToken)
            }
            commit('GOT_MEMBER_ME_RESPONSE', response)
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
      commit('GOT_ERROR', base.nullCheck(state.memberMeRequest) + 'のパラメーターが空です', { root: true })
    }
  },
  setStatusMemberMeEditName (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_MEMBER_ME_EDIT_NAME', params)
  },
  setStatusMemberMeEditBirthday (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_MEMBER_ME_EDIT_BIRTHDAY', params)
  },
  setStatusMemberMeEditGender (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_MEMBER_ME_EDIT_GENDER', params)
  },
  setStatusMemberMeEditAddress (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_MEMBER_ME_EDIT_ADDRESS', params)
  },
  setStatusMemberMeEditCompany (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_MEMBER_ME_EDIT_COMPANY', params)
  },
  memberMeEditRequest (
  {commit, state}
  ) {
    commit('START_CONNECTION', null, { root: true })
    if (base.nullCheck(state.memberMeEditRequest) === true) {
      manager.memberMeEdit(
        state.memberMeEditRequest,
        response => {
          if (response.message === 'ok' || response.message === undefined || !response.message.match(/error/)) {
            if (response.accessToken) {
              sessionStorage.setItem('accessToken', response.accessToken)
            }
            commit('GOT_MEMBER_ME_EDIT_RESPONSE', response)
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
      commit('GOT_ERROR', base.nullCheck(state.memberMeEditRequest) + 'のパラメーターが空です', { root: true })
    }
  }
}

const getters = {
  getMemberMeResponse: state => {
    return state.memberMeResponse
  },
  getMemberMeEditResponse: state => {
    return state.memberMeEditResponse
  }
}

const mutations = {
  GOT_MEMBER_ME_RESPONSE (state, data) {
    state.memberMeResponse = data
  },
  SET_STATUS_MEMBER_ME_EDIT_NAME (state, data) {
    Vue.set(state.memberMeEditRequest, 'name', data)
  },
  SET_STATUS_MEMBER_ME_EDIT_BIRTHDAY (state, data) {
    Vue.set(state.memberMeEditRequest, 'birthday', data)
  },
  SET_STATUS_MEMBER_ME_EDIT_GENDER (state, data) {
    Vue.set(state.memberMeEditRequest, 'gender', data)
  },
  SET_STATUS_MEMBER_ME_EDIT_ADDRESS (state, data) {
    Vue.set(state.memberMeEditRequest, 'address', data)
  },
  SET_STATUS_MEMBER_ME_EDIT_COMPANY (state, data) {
    Vue.set(state.memberMeEditRequest, 'company', data)
  },
  GOT_MEMBER_ME_EDIT_RESPONSE (state, data) {
    state.memberMeEditResponse = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
