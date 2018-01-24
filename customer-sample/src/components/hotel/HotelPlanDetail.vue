<template>
  <div>
    <p>planId</p>
    <input v-model="planId" @input="sendPlanId(planId)" />
    <p>peopleNum</p>
    <input v-model="peopleNum" @input="sendPeopleNum(peopleNum)" />
    <button @click="hotelPlanDetailRequest">Check</button>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data () {
    return {
      planId: null,
      peopleNum: null
    }
  },
  computed: {
    ...mapGetters('hotel', [
      'getHotelPlanDetailResponse'
    ])
  },
  methods: {
    ...mapActions('hotel', [
      'setStatusHotelPlanDetailPlanId',
      'setStatusHotelPlanDetailPeopleNum',
      'hotelPlanDetailRequest'
    ]),
    sendPlanId (planId) {
      this.setStatusHotelPlanDetailPlanId(planId)
      this.planId = planId
    },
    sendPeopleNum (peopleNum) {
      this.setStatusHotelPlanDetailPeopleNum(peopleNum)
      this.peopleNum = peopleNum
    }
  }
}
</script>
