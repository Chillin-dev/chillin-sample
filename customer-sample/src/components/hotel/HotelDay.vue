<template>
  <div>
    <p>peopleNum</p>
    <input v-model="peopleNum" @input="sendPeopleNum(peopleNum)" />
    <button @click="hotelDayRequest">Check</button>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data () {
    return {
      peopleNum: null
    }
  },
  computed: {
    ...mapGetters('hotel', [
      'getHotelDayResponse'
    ])
  },
  methods: {
    ...mapActions('hotel', [
      'setStatusHotelDayPeopleNum',
      'hotelDayRequest'
    ]),
    sendPeopleNum (peopleNum) {
      this.setStatusHotelDayPeopleNum(peopleNum)
      this.peopleNum = peopleNum
    }
  }
}
</script>
