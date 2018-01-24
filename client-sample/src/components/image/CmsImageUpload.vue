<template>
  <div>
    <p>file</p>
    <input v-model="file" @input="sendFile(file)" />
    <button @click="cmsImageUploadRequest">Check</button>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data () {
    return {
      file: null
    }
  },
  computed: {
    ...mapGetters('image', [
      'getCmsImageUploadResponse'
    ])
  },
  methods: {
    ...mapActions('image', [
      'setStatusCmsImageUploadFile',
      'cmsImageUploadRequest'
    ]),
    sendFile (file) {
      this.setStatusCmsImageUploadFile(file)
      this.file = file
    }
  }
}
</script>
