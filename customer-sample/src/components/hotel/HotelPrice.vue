<template>
  <div>
    <p>date</p>
    <input v-model="date" @input="sendDate(date)" />
    <p>peopleNum</p>
    <input v-model="peopleNum" @input="sendPeopleNum(peopleNum)" />
    <button @click="hotelPriceRequest">Check</button>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data () {
    return {
      date: null,
      peopleNum: null
    }
  },
  computed: {
    ...mapGetters('hotel', [
      'getHotelPriceResponse'
    ])
  },
  methods: {
    ...mapActions('hotel', [
      'setStatusHotelPriceDate',
      'setStatusHotelPricePeopleNum',
      'hotelPriceRequest'
    ]),
    sendDate (date) {
      this.setStatusHotelPriceDate(date)
      this.date = date
    },
    sendPeopleNum (peopleNum) {
      this.setStatusHotelPricePeopleNum(peopleNum)
      this.peopleNum = peopleNum
    }
  }
}
</script>
