<template>
  <div>
    <p>uuid</p>
    <input v-model="uuid" @input="sendUuid(uuid)" />
    <p>cs</p>
    <input v-model="cs" @input="sendCs(cs)" />
    <button @click="cmsAuthSigninRequest">Check</button>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data () {
    return {
      uuid: null,
      cs: null
    }
  },
  computed: {
    ...mapGetters('auth', [
      'getCmsAuthSigninResponse'
    ])
  },
  methods: {
    ...mapActions('auth', [
      'setStatusCmsAuthSigninUuid',
      'setStatusCmsAuthSigninCs',
      'cmsAuthSigninRequest'
    ]),
    sendUuid (uuid) {
      this.setStatusCmsAuthSigninUuid(uuid)
      this.uuid = uuid
    },
    sendCs (cs) {
      this.setStatusCmsAuthSigninCs(cs)
      this.cs = cs
    }
  }
}
</script>
