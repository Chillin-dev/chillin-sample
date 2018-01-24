<template>
  <div>
    <button @click="cmsAmenityRequest">Check</button>
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
    ...mapGetters('room', [
      'getCmsAmenityResponse'
    ])
  },
  methods: {
    ...mapActions('room', [
      'cmsAmenityRequest'
    ])
  }
}
</script>
