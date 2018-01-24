<template>
  <div>
    <button @click="cmsPlanRequest">Check</button>
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
    ...mapGetters('plan', [
      'getCmsPlanResponse'
    ])
  },
  methods: {
    ...mapActions('plan', [
      'cmsPlanRequest'
    ])
  }
}
</script>
