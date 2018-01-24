<template>
  <div>
    <p>prices</p>
    <input v-model="prices" @input="sendPrices(prices)" />
    <button @click="cmsPriceRegistrationRequest">Check</button>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data () {
    return {
      prices: null
    }
  },
  computed: {
    ...mapGetters('price', [
      'getCmsPriceRegistrationResponse'
    ])
  },
  methods: {
    ...mapActions('price', [
      'setStatusCmsPriceRegistrationPrices',
      'cmsPriceRegistrationRequest'
    ]),
    sendPrices (prices) {
      this.setStatusCmsPriceRegistrationPrices(prices)
      this.prices = prices
    }
  }
}
</script>
