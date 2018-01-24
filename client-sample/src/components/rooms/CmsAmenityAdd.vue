<template>
  <div>
    <p>name</p>
    <input v-model="name" @input="sendName(name)" />
    <button @click="cmsAmenityAddRequest">Check</button>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data () {
    return {
      name: null
    }
  },
  computed: {
    ...mapGetters('rooms', [
      'getCmsAmenityAddResponse'
    ])
  },
  methods: {
    ...mapActions('rooms', [
      'setStatusCmsAmenityAddName',
      'cmsAmenityAddRequest'
    ]),
    sendName (name) {
      this.setStatusCmsAmenityAddName(name)
      this.name = name
    }
  }
}
</script>
