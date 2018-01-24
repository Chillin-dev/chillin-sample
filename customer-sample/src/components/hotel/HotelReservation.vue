<template>
  <div>
    <p>name</p>
    <input v-model="name" @input="sendName(name)" />
    <p>tel</p>
    <input v-model="tel" @input="sendTel(tel)" />
    <p>address</p>
    <input v-model="address" @input="sendAddress(address)" />
    <p>mail</p>
    <input v-model="mail" @input="sendMail(mail)" />
    <p>peopleNum</p>
    <input v-model="peopleNum" @input="sendPeopleNum(peopleNum)" />
    <p>checkin</p>
    <input v-model="checkin" @input="sendCheckin(checkin)" />
    <p>checkout</p>
    <input v-model="checkout" @input="sendCheckout(checkout)" />
    <p>planId</p>
    <input v-model="planId" @input="sendPlanId(planId)" />
    <p>comment</p>
    <input v-model="comment" @input="sendComment(comment)" />
    <button @click="hotelReservationRequest">Check</button>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data () {
    return {
      name: null,
      tel: null,
      address: null,
      mail: null,
      peopleNum: null,
      checkin: null,
      checkout: null,
      planId: null,
      comment: null
    }
  },
  computed: {
    ...mapGetters('hotel', [
      'getHotelReservationResponse'
    ])
  },
  methods: {
    ...mapActions('hotel', [
      'setStatusHotelReservationName',
      'setStatusHotelReservationTel',
      'setStatusHotelReservationAddress',
      'setStatusHotelReservationMail',
      'setStatusHotelReservationPeopleNum',
      'setStatusHotelReservationCheckin',
      'setStatusHotelReservationCheckout',
      'setStatusHotelReservationPlanId',
      'setStatusHotelReservationComment',
      'hotelReservationRequest'
    ]),
    sendName (name) {
      this.setStatusHotelReservationName(name)
      this.name = name
    },
    sendTel (tel) {
      this.setStatusHotelReservationTel(tel)
      this.tel = tel
    },
    sendAddress (address) {
      this.setStatusHotelReservationAddress(address)
      this.address = address
    },
    sendMail (mail) {
      this.setStatusHotelReservationMail(mail)
      this.mail = mail
    },
    sendPeopleNum (peopleNum) {
      this.setStatusHotelReservationPeopleNum(peopleNum)
      this.peopleNum = peopleNum
    },
    sendCheckin (checkin) {
      this.setStatusHotelReservationCheckin(checkin)
      this.checkin = checkin
    },
    sendCheckout (checkout) {
      this.setStatusHotelReservationCheckout(checkout)
      this.checkout = checkout
    },
    sendPlanId (planId) {
      this.setStatusHotelReservationPlanId(planId)
      this.planId = planId
    },
    sendComment (comment) {
      this.setStatusHotelReservationComment(comment)
      this.comment = comment
    }
  }
}
</script>
