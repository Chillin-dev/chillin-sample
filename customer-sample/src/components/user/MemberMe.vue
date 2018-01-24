<template>
  <div>
    <button @click="memberMeRequest">Check</button>
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
    ...mapGetters('user', [
      'getMemberMeResponse'
    ])
  },
  methods: {
    ...mapActions('user', [
      'memberMeRequest'
    ])
  }
}
</script>
