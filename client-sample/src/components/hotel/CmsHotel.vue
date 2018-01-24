<template>
  <div>
    <button @click="cmsHotelRequest">Check</button>
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
    ...mapGetters('hotel', [
      'getCmsHotelResponse'
    ])
  },
  methods: {
    ...mapActions('hotel', [
      'cmsHotelRequest'
    ])
  }
}
</script>
