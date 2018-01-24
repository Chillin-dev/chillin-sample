<template>
  <div>
    <p>uuid</p>
    <input v-model="uuid" @input="sendUuid(uuid)" />
    <p>cs</p>
    <input v-model="cs" @input="sendCs(cs)" />
    <button @click="authCreatesessionRequest">Check</button>
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
      'getAuthCreatesessionResponse'
    ])
  },
  methods: {
    ...mapActions('auth', [
      'setStatusAuthCreatesessionUuid',
      'setStatusAuthCreatesessionCs',
      'authCreatesessionRequest'
    ]),
    sendUuid (uuid) {
      this.setStatusAuthCreatesessionUuid(uuid)
      this.uuid = uuid
    },
    sendCs (cs) {
      this.setStatusAuthCreatesessionCs(cs)
      this.cs = cs
    }
  }
}
</script>
