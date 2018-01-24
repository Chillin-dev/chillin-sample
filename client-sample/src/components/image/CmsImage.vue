<template>
  <div>
    <button @click="cmsImageRequest">Check</button>
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
    ...mapGetters('image', [
      'getCmsImageResponse'
    ])
  },
  methods: {
    ...mapActions('image', [
      'cmsImageRequest'
    ])
  }
}
</script>
