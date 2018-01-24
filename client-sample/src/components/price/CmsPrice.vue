<template>
  <div>
    <button @click="cmsPriceRequest">Check</button>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data () {
    return 
    }
  },
  computed: {
    ...mapGetters('price', [
      'getCmsPriceResponse'
    ])
  },
  methods: {
    ...mapActions('price', [
      'cmsPriceRequest'
    ])
  }
}
</script>
