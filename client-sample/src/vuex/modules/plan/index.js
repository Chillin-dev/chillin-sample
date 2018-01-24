import manager from '@/api/plan'
import base from '@/vuex/base'
import Vue from 'vue'

const state = {
  cmsPlanAddRequest: {
    name: null,
    summary: null,
    detail: null,
    priceType: null,
    price: null,
    periodType: null,
    startDt: null,
    endDt: null,
    eyecatchUrl: null,
    imageUrls: null,
    roomIds: null
  },
  cmsPlanAddResponse: {},
  cmsPlanDetailRequest: {
    planId: null
  },
  cmsPlanDetailResponse: {},
  cmsPlanRequest: {
  },
  cmsPlanResponse: {}
}

const actions = {
  setStatusCmsPlanAddName (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_PLAN_ADD_NAME', params)
  },
  setStatusCmsPlanAddSummary (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_PLAN_ADD_SUMMARY', params)
  },
  setStatusCmsPlanAddDetail (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_PLAN_ADD_DETAIL', params)
  },
  setStatusCmsPlanAddPriceType (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_PLAN_ADD_PRICE_TYPE', params)
  },
  setStatusCmsPlanAddPrice (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_PLAN_ADD_PRICE', params)
  },
  setStatusCmsPlanAddPeriodType (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_PLAN_ADD_PERIOD_TYPE', params)
  },
  setStatusCmsPlanAddStartDt (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_PLAN_ADD_START_DT', params)
  },
  setStatusCmsPlanAddEndDt (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_PLAN_ADD_END_DT', params)
  },
  setStatusCmsPlanAddEyecatchUrl (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_PLAN_ADD_EYECATCH_URL', params)
  },
  setStatusCmsPlanAddImageUrls (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_PLAN_ADD_IMAGE_URLS', params)
  },
  setStatusCmsPlanAddRoomIds (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_PLAN_ADD_ROOM_IDS', params)
  },
  cmsPlanAddRequest (
  {commit, state}
  ) {
    commit('START_CONNECTION', null, { root: true })
    if (base.nullCheck(state.cmsPlanAddRequest) === true) {
      manager.cmsPlanAdd(
        state.cmsPlanAddRequest,
        response => {
          if (response.message === 'ok' || response.message === undefined || !response.message.match(/error/)) {
            if (response.accessToken) {
              sessionStorage.setItem('accessToken', response.accessToken)
            }
            commit('GOT_CMS_PLAN_ADD_RESPONSE', response)
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
      commit('GOT_ERROR', base.nullCheck(state.cmsPlanAddRequest) + 'のパラメーターが空です', { root: true })
    }
  },
  setStatusCmsPlanDetailPlanId (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_PLAN_DETAIL_PLAN_ID', params)
  },
  cmsPlanDetailRequest (
  {commit, state}
  ) {
    commit('START_CONNECTION', null, { root: true })
    if (base.nullCheck(state.cmsPlanDetailRequest) === true) {
      manager.cmsPlanDetail(
        state.cmsPlanDetailRequest,
        response => {
          if (response.message === 'ok' || response.message === undefined || !response.message.match(/error/)) {
            if (response.accessToken) {
              sessionStorage.setItem('accessToken', response.accessToken)
            }
            commit('GOT_CMS_PLAN_DETAIL_RESPONSE', response)
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
      commit('GOT_ERROR', base.nullCheck(state.cmsPlanDetailRequest) + 'のパラメーターが空です', { root: true })
    }
  },
  cmsPlanRequest (
  {commit, state}
  ) {
    commit('START_CONNECTION', null, { root: true })
    if (base.nullCheck(state.cmsPlanRequest) === true) {
      manager.cmsPlan(
        state.cmsPlanRequest,
        response => {
          if (response.message === 'ok' || response.message === undefined || !response.message.match(/error/)) {
            if (response.accessToken) {
              sessionStorage.setItem('accessToken', response.accessToken)
            }
            commit('GOT_CMS_PLAN_RESPONSE', response)
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
      commit('GOT_ERROR', base.nullCheck(state.cmsPlanRequest) + 'のパラメーターが空です', { root: true })
    }
  }
}

const getters = {
  getCmsPlanAddResponse: state => {
    return state.cmsPlanAddResponse
  },
  getCmsPlanDetailResponse: state => {
    return state.cmsPlanDetailResponse
  },
  getCmsPlanResponse: state => {
    return state.cmsPlanResponse
  }
}

const mutations = {
  SET_STATUS_CMS_PLAN_ADD_NAME (state, data) {
    Vue.set(state.cmsPlanAddRequest, 'name', data)
  },
  SET_STATUS_CMS_PLAN_ADD_SUMMARY (state, data) {
    Vue.set(state.cmsPlanAddRequest, 'summary', data)
  },
  SET_STATUS_CMS_PLAN_ADD_DETAIL (state, data) {
    Vue.set(state.cmsPlanAddRequest, 'detail', data)
  },
  SET_STATUS_CMS_PLAN_ADD_PRICE_TYPE (state, data) {
    Vue.set(state.cmsPlanAddRequest, 'priceType', data)
  },
  SET_STATUS_CMS_PLAN_ADD_PRICE (state, data) {
    Vue.set(state.cmsPlanAddRequest, 'price', data)
  },
  SET_STATUS_CMS_PLAN_ADD_PERIOD_TYPE (state, data) {
    Vue.set(state.cmsPlanAddRequest, 'periodType', data)
  },
  SET_STATUS_CMS_PLAN_ADD_START_DT (state, data) {
    Vue.set(state.cmsPlanAddRequest, 'startDt', data)
  },
  SET_STATUS_CMS_PLAN_ADD_END_DT (state, data) {
    Vue.set(state.cmsPlanAddRequest, 'endDt', data)
  },
  SET_STATUS_CMS_PLAN_ADD_EYECATCH_URL (state, data) {
    Vue.set(state.cmsPlanAddRequest, 'eyecatchUrl', data)
  },
  SET_STATUS_CMS_PLAN_ADD_IMAGE_URLS (state, data) {
    Vue.set(state.cmsPlanAddRequest, 'imageUrls', data)
  },
  SET_STATUS_CMS_PLAN_ADD_ROOM_IDS (state, data) {
    Vue.set(state.cmsPlanAddRequest, 'roomIds', data)
  },
  GOT_CMS_PLAN_ADD_RESPONSE (state, data) {
    state.cmsPlanAddResponse = data
  },
  SET_STATUS_CMS_PLAN_DETAIL_PLAN_ID (state, data) {
    Vue.set(state.cmsPlanDetailRequest, 'planId', data)
  },
  GOT_CMS_PLAN_DETAIL_RESPONSE (state, data) {
    state.cmsPlanDetailResponse = data
  },
  GOT_CMS_PLAN_RESPONSE (state, data) {
    state.cmsPlanResponse = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
