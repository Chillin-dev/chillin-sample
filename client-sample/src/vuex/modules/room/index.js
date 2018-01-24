import manager from '@/api/room'
import base from '@/vuex/base'
import Vue from 'vue'

const state = {
  cmsRoomsRequest: {
  },
  cmsRoomsResponse: {},
  cmsRoomsAddRequest: {
    name: null,
    maxPeopleNum: null,
    roomSum: null,
    description: null,
    bedType: null,
    amenityIds: null,
    imageIds: null
  },
  cmsRoomsAddResponse: {},
  cmsAmenityRequest: {
  },
  cmsAmenityResponse: {}
}

const actions = {
  cmsRoomsRequest (
  {commit, state}
  ) {
    commit('START_CONNECTION', null, { root: true })
    if (base.nullCheck(state.cmsRoomsRequest) === true) {
      manager.cmsRooms(
        state.cmsRoomsRequest,
        response => {
          if (response.message === 'ok' || response.message === undefined || !response.message.match(/error/)) {
            if (response.accessToken) {
              sessionStorage.setItem('accessToken', response.accessToken)
            }
            commit('GOT_CMS_ROOMS_RESPONSE', response)
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
      commit('GOT_ERROR', base.nullCheck(state.cmsRoomsRequest) + 'のパラメーターが空です', { root: true })
    }
  },
  setStatusCmsRoomsAddName (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_ROOMS_ADD_NAME', params)
  },
  setStatusCmsRoomsAddMaxPeopleNum (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_ROOMS_ADD_MAX_PEOPLE_NUM', params)
  },
  setStatusCmsRoomsAddRoomSum (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_ROOMS_ADD_ROOM_SUM', params)
  },
  setStatusCmsRoomsAddDescription (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_ROOMS_ADD_DESCRIPTION', params)
  },
  setStatusCmsRoomsAddBedType (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_ROOMS_ADD_BED_TYPE', params)
  },
  setStatusCmsRoomsAddAmenityIds (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_ROOMS_ADD_AMENITY_IDS', params)
  },
  setStatusCmsRoomsAddImageIds (
    { commit, state },
      params
    ) {
    commit('SET_STATUS_CMS_ROOMS_ADD_IMAGE_IDS', params)
  },
  cmsRoomsAddRequest (
  {commit, state}
  ) {
    commit('START_CONNECTION', null, { root: true })
    if (base.nullCheck(state.cmsRoomsAddRequest) === true) {
      manager.cmsRoomsAdd(
        state.cmsRoomsAddRequest,
        response => {
          if (response.message === 'ok' || response.message === undefined || !response.message.match(/error/)) {
            if (response.accessToken) {
              sessionStorage.setItem('accessToken', response.accessToken)
            }
            commit('GOT_CMS_ROOMS_ADD_RESPONSE', response)
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
      commit('GOT_ERROR', base.nullCheck(state.cmsRoomsAddRequest) + 'のパラメーターが空です', { root: true })
    }
  },
  cmsAmenityRequest (
  {commit, state}
  ) {
    commit('START_CONNECTION', null, { root: true })
    if (base.nullCheck(state.cmsAmenityRequest) === true) {
      manager.cmsAmenity(
        state.cmsAmenityRequest,
        response => {
          if (response.message === 'ok' || response.message === undefined || !response.message.match(/error/)) {
            if (response.accessToken) {
              sessionStorage.setItem('accessToken', response.accessToken)
            }
            commit('GOT_CMS_AMENITY_RESPONSE', response)
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
      commit('GOT_ERROR', base.nullCheck(state.cmsAmenityRequest) + 'のパラメーターが空です', { root: true })
    }
  }
}

const getters = {
  getCmsRoomsResponse: state => {
    return state.cmsRoomsResponse
  },
  getCmsRoomsAddResponse: state => {
    return state.cmsRoomsAddResponse
  },
  getCmsAmenityResponse: state => {
    return state.cmsAmenityResponse
  }
}

const mutations = {
  GOT_CMS_ROOMS_RESPONSE (state, data) {
    state.cmsRoomsResponse = data
  },
  SET_STATUS_CMS_ROOMS_ADD_NAME (state, data) {
    Vue.set(state.cmsRoomsAddRequest, 'name', data)
  },
  SET_STATUS_CMS_ROOMS_ADD_MAX_PEOPLE_NUM (state, data) {
    Vue.set(state.cmsRoomsAddRequest, 'maxPeopleNum', data)
  },
  SET_STATUS_CMS_ROOMS_ADD_ROOM_SUM (state, data) {
    Vue.set(state.cmsRoomsAddRequest, 'roomSum', data)
  },
  SET_STATUS_CMS_ROOMS_ADD_DESCRIPTION (state, data) {
    Vue.set(state.cmsRoomsAddRequest, 'description', data)
  },
  SET_STATUS_CMS_ROOMS_ADD_BED_TYPE (state, data) {
    Vue.set(state.cmsRoomsAddRequest, 'bedType', data)
  },
  SET_STATUS_CMS_ROOMS_ADD_AMENITY_IDS (state, data) {
    Vue.set(state.cmsRoomsAddRequest, 'amenityIds', data)
  },
  SET_STATUS_CMS_ROOMS_ADD_IMAGE_IDS (state, data) {
    Vue.set(state.cmsRoomsAddRequest, 'imageIds', data)
  },
  GOT_CMS_ROOMS_ADD_RESPONSE (state, data) {
    state.cmsRoomsAddResponse = data
  },
  GOT_CMS_AMENITY_RESPONSE (state, data) {
    state.cmsAmenityResponse = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
