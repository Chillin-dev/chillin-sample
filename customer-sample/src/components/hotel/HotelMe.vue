<template>
  <div>
    <p>hotelId</p>
    <input v-model="hotelId" @input="sendHotelId(hotelId)" />
    <button @click="hotelMeRequest">Check</button>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data () {
    return {
      hotelId: null
    }
  },
  computed: {
    ...mapGetters('hotel', [
      'getHotelMeResponse'
    ])
  },
  methods: {
    ...mapActions('hotel', [
      'setStatusHotelMeHotelId',
      'hotelMeRequest'
    ]),
    sendHotelId (hotelId) {
      this.setStatusHotelMeHotelId(hotelId)
      this.hotelId = hotelId
    }
  }
}
</script>
