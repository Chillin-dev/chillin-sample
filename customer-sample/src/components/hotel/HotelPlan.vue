<template>
  <div>
    <p>peopleNum</p>
    <input v-model="peopleNum" @input="sendPeopleNum(peopleNum)" />
    <p>checkin</p>
    <input v-model="checkin" @input="sendCheckin(checkin)" />
    <p>checkout</p>
    <input v-model="checkout" @input="sendCheckout(checkout)" />
    <button @click="hotelPlanRequest">Check</button>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data () {
    return {
      peopleNum: null,
      checkin: null,
      checkout: null
    }
  },
  computed: {
    ...mapGetters('hotel', [
      'getHotelPlanResponse'
    ])
  },
  methods: {
    ...mapActions('hotel', [
      'setStatusHotelPlanPeopleNum',
      'setStatusHotelPlanCheckin',
      'setStatusHotelPlanCheckout',
      'hotelPlanRequest'
    ]),
    sendPeopleNum (peopleNum) {
      this.setStatusHotelPlanPeopleNum(peopleNum)
      this.peopleNum = peopleNum
    },
    sendCheckin (checkin) {
      this.setStatusHotelPlanCheckin(checkin)
      this.checkin = checkin
    },
    sendCheckout (checkout) {
      this.setStatusHotelPlanCheckout(checkout)
      this.checkout = checkout
    }
  }
}
</script>
