import manager from '@/api/hotel'
import base from '@/vuex/base'
import Vue from 'vue'

const state = {
  hotelMeRequest: {
    hotelId: null
  },
  hotelMeResponse: {},
  hotelPriceRequest: {
    date: null,
    peopleNum: null
  },
  hotelPriceResponse: {},
  hotelDayRequest: {
    peopleNum: null
  },
  hotelDayResponse: {},
  hotelPlanRequest: {
    peopleNum: null,
    checkin: null,
    checkout: null
  },
  hotelPlanResponse: {},
  hotelPlanDetailRequest: {
    planId: null,
    peopleNum: null
  },
  hotelPlanDetailResponse: {},
  hotelReservationRequest: {
    name: null,
    tel: null,
    address: null,
    mail: null,
    peopleNum: null,
    checkin: null,
    checkout: null,
    planId: null,
    comment: null
  },
  hotelReservationResponse: {}
}

const actions = {
  setStatusHotelMeHotelId (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_HOTEL_ME_HOTEL_ID', params)
  },
  hotelMeRequest (
  {commit, state}
  ) {
    commit('START_CONNECTION', null, { root: true })
    if (base.nullCheck(state.hotelMeRequest) === true) {
      manager.hotelMe(
        state.hotelMeRequest,
        response => {
          if (response.message === 'ok' || response.message === undefined || !response.message.match(/error/)) {
            if (response.accessToken) {
              sessionStorage.setItem('accessToken', response.accessToken)
            }
            commit('GOT_HOTEL_ME_RESPONSE', response)
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
      commit('GOT_ERROR', base.nullCheck(state.hotelMeRequest) + 'のパラメーターが空です', { root: true })
    }
  },
  setStatusHotelPriceDate (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_HOTEL_PRICE_DATE', params)
  },
  setStatusHotelPricePeopleNum (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_HOTEL_PRICE_PEOPLE_NUM', params)
  },
  hotelPriceRequest (
  {commit, state}
  ) {
    commit('START_CONNECTION', null, { root: true })
    if (base.nullCheck(state.hotelPriceRequest) === true) {
      manager.hotelPrice(
        state.hotelPriceRequest,
        response => {
          if (response.message === 'ok' || response.message === undefined || !response.message.match(/error/)) {
            if (response.accessToken) {
              sessionStorage.setItem('accessToken', response.accessToken)
            }
            commit('GOT_HOTEL_PRICE_RESPONSE', response)
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
      commit('GOT_ERROR', base.nullCheck(state.hotelPriceRequest) + 'のパラメーターが空です', { root: true })
    }
  },
  setStatusHotelDayPeopleNum (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_HOTEL_DAY_PEOPLE_NUM', params)
  },
  hotelDayRequest (
  {commit, state}
  ) {
    commit('START_CONNECTION', null, { root: true })
    if (base.nullCheck(state.hotelDayRequest) === true) {
      manager.hotelDay(
        state.hotelDayRequest,
        response => {
          if (response.message === 'ok' || response.message === undefined || !response.message.match(/error/)) {
            if (response.accessToken) {
              sessionStorage.setItem('accessToken', response.accessToken)
            }
            commit('GOT_HOTEL_DAY_RESPONSE', response)
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
      commit('GOT_ERROR', base.nullCheck(state.hotelDayRequest) + 'のパラメーターが空です', { root: true })
    }
  },
  setStatusHotelPlanPeopleNum (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_HOTEL_PLAN_PEOPLE_NUM', params)
  },
  setStatusHotelPlanCheckin (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_HOTEL_PLAN_CHECKIN', params)
  },
  setStatusHotelPlanCheckout (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_HOTEL_PLAN_CHECKOUT', params)
  },
  hotelPlanRequest (
  {commit, state}
  ) {
    commit('START_CONNECTION', null, { root: true })
    if (base.nullCheck(state.hotelPlanRequest) === true) {
      manager.hotelPlan(
        state.hotelPlanRequest,
        response => {
          if (response.message === 'ok' || response.message === undefined || !response.message.match(/error/)) {
            if (response.accessToken) {
              sessionStorage.setItem('accessToken', response.accessToken)
            }
            commit('GOT_HOTEL_PLAN_RESPONSE', response)
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
      commit('GOT_ERROR', base.nullCheck(state.hotelPlanRequest) + 'のパラメーターが空です', { root: true })
    }
  },
  setStatusHotelPlanDetailPlanId (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_HOTEL_PLAN_DETAIL_PLAN_ID', params)
  },
  setStatusHotelPlanDetailPeopleNum (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_HOTEL_PLAN_DETAIL_PEOPLE_NUM', params)
  },
  hotelPlanDetailRequest (
  {commit, state}
  ) {
    commit('START_CONNECTION', null, { root: true })
    if (base.nullCheck(state.hotelPlanDetailRequest) === true) {
      manager.hotelPlanDetail(
        state.hotelPlanDetailRequest,
        response => {
          if (response.message === 'ok' || response.message === undefined || !response.message.match(/error/)) {
            if (response.accessToken) {
              sessionStorage.setItem('accessToken', response.accessToken)
            }
            commit('GOT_HOTEL_PLAN_DETAIL_RESPONSE', response)
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
      commit('GOT_ERROR', base.nullCheck(state.hotelPlanDetailRequest) + 'のパラメーターが空です', { root: true })
    }
  },
  setStatusHotelReservationName (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_HOTEL_RESERVATION_NAME', params)
  },
  setStatusHotelReservationTel (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_HOTEL_RESERVATION_TEL', params)
  },
  setStatusHotelReservationAddress (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_HOTEL_RESERVATION_ADDRESS', params)
  },
  setStatusHotelReservationMail (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_HOTEL_RESERVATION_MAIL', params)
  },
  setStatusHotelReservationPeopleNum (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_HOTEL_RESERVATION_PEOPLE_NUM', params)
  },
  setStatusHotelReservationCheckin (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_HOTEL_RESERVATION_CHECKIN', params)
  },
  setStatusHotelReservationCheckout (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_HOTEL_RESERVATION_CHECKOUT', params)
  },
  setStatusHotelReservationPlanId (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_HOTEL_RESERVATION_PLAN_ID', params)
  },
  setStatusHotelReservationComment (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_HOTEL_RESERVATION_COMMENT', params)
  },
  hotelReservationRequest (
  {commit, state}
  ) {
    commit('START_CONNECTION', null, { root: true })
    if (base.nullCheck(state.hotelReservationRequest) === true) {
      manager.hotelReservation(
        state.hotelReservationRequest,
        response => {
          if (response.message === 'ok' || response.message === undefined || !response.message.match(/error/)) {
            if (response.accessToken) {
              sessionStorage.setItem('accessToken', response.accessToken)
            }
            commit('GOT_HOTEL_RESERVATION_RESPONSE', response)
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
      commit('GOT_ERROR', base.nullCheck(state.hotelReservationRequest) + 'のパラメーターが空です', { root: true })
    }
  }
}

const getters = {
  getHotelMeResponse: state => {
    return state.hotelMeResponse
  },
  getHotelPriceResponse: state => {
    return state.hotelPriceResponse
  },
  getHotelDayResponse: state => {
    return state.hotelDayResponse
  },
  getHotelPlanResponse: state => {
    return state.hotelPlanResponse
  },
  getHotelPlanDetailResponse: state => {
    return state.hotelPlanDetailResponse
  },
  getHotelReservationResponse: state => {
    return state.hotelReservationResponse
  }
}

const mutations = {
  SET_STATUS_HOTEL_ME_HOTEL_ID (state, data) {
    Vue.set(state.hotelMeRequest, 'hotelId', data)
  },
  GOT_HOTEL_ME_RESPONSE (state, data) {
    state.hotelMeResponse = data
  },
  SET_STATUS_HOTEL_PRICE_DATE (state, data) {
    Vue.set(state.hotelPriceRequest, 'date', data)
  },
  SET_STATUS_HOTEL_PRICE_PEOPLE_NUM (state, data) {
    Vue.set(state.hotelPriceRequest, 'peopleNum', data)
  },
  GOT_HOTEL_PRICE_RESPONSE (state, data) {
    state.hotelPriceResponse = data
  },
  SET_STATUS_HOTEL_DAY_PEOPLE_NUM (state, data) {
    Vue.set(state.hotelDayRequest, 'peopleNum', data)
  },
  GOT_HOTEL_DAY_RESPONSE (state, data) {
    state.hotelDayResponse = data
  },
  SET_STATUS_HOTEL_PLAN_PEOPLE_NUM (state, data) {
    Vue.set(state.hotelPlanRequest, 'peopleNum', data)
  },
  SET_STATUS_HOTEL_PLAN_CHECKIN (state, data) {
    Vue.set(state.hotelPlanRequest, 'checkin', data)
  },
  SET_STATUS_HOTEL_PLAN_CHECKOUT (state, data) {
    Vue.set(state.hotelPlanRequest, 'checkout', data)
  },
  GOT_HOTEL_PLAN_RESPONSE (state, data) {
    state.hotelPlanResponse = data
  },
  SET_STATUS_HOTEL_PLAN_DETAIL_PLAN_ID (state, data) {
    Vue.set(state.hotelPlanDetailRequest, 'planId', data)
  },
  SET_STATUS_HOTEL_PLAN_DETAIL_PEOPLE_NUM (state, data) {
    Vue.set(state.hotelPlanDetailRequest, 'peopleNum', data)
  },
  GOT_HOTEL_PLAN_DETAIL_RESPONSE (state, data) {
    state.hotelPlanDetailResponse = data
  },
  SET_STATUS_HOTEL_RESERVATION_NAME (state, data) {
    Vue.set(state.hotelReservationRequest, 'name', data)
  },
  SET_STATUS_HOTEL_RESERVATION_TEL (state, data) {
    Vue.set(state.hotelReservationRequest, 'tel', data)
  },
  SET_STATUS_HOTEL_RESERVATION_ADDRESS (state, data) {
    Vue.set(state.hotelReservationRequest, 'address', data)
  },
  SET_STATUS_HOTEL_RESERVATION_MAIL (state, data) {
    Vue.set(state.hotelReservationRequest, 'mail', data)
  },
  SET_STATUS_HOTEL_RESERVATION_PEOPLE_NUM (state, data) {
    Vue.set(state.hotelReservationRequest, 'peopleNum', data)
  },
  SET_STATUS_HOTEL_RESERVATION_CHECKIN (state, data) {
    Vue.set(state.hotelReservationRequest, 'checkin', data)
  },
  SET_STATUS_HOTEL_RESERVATION_CHECKOUT (state, data) {
    Vue.set(state.hotelReservationRequest, 'checkout', data)
  },
  SET_STATUS_HOTEL_RESERVATION_PLAN_ID (state, data) {
    Vue.set(state.hotelReservationRequest, 'planId', data)
  },
  SET_STATUS_HOTEL_RESERVATION_COMMENT (state, data) {
    Vue.set(state.hotelReservationRequest, 'comment', data)
  },
  GOT_HOTEL_RESERVATION_RESPONSE (state, data) {
    state.hotelReservationResponse = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
