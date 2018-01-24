<template>
  <div>
    <p>mail</p>
    <input v-model="mail" @input="sendMail(mail)" />
    <p>password</p>
    <input v-model="password" @input="sendPassword(password)" />
    <button @click="authCreateuuidRequest">Check</button>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data () {
    return {
      mail: null,
      password: null
    }
  },
  computed: {
    ...mapGetters('auth', [
      'getAuthCreateuuidResponse'
    ])
  },
  methods: {
    ...mapActions('auth', [
      'setStatusAuthCreateuuidMail',
      'setStatusAuthCreateuuidPassword',
      'authCreateuuidRequest'
    ]),
    sendMail (mail) {
      this.setStatusAuthCreateuuidMail(mail)
      this.mail = mail
    },
    sendPassword (password) {
      this.setStatusAuthCreateuuidPassword(password)
      this.password = password
    }
  }
}
</script>
