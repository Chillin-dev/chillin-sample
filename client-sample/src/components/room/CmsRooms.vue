<template>
  <div>
    <button @click="cmsRoomsRequest">Check</button>
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
      'getCmsRoomsResponse'
    ])
  },
  methods: {
    ...mapActions('room', [
      'cmsRoomsRequest'
    ])
  }
}
</script>
