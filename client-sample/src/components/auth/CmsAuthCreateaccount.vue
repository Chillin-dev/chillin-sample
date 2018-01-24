<template>
  <div>
    <p>mail</p>
    <input v-model="mail" @input="sendMail(mail)" />
    <p>password</p>
    <input v-model="password" @input="sendPassword(password)" />
    <p>name</p>
    <input v-model="name" @input="sendName(name)" />
    <button @click="cmsAuthCreateaccountRequest">Check</button>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data () {
    return {
      mail: null,
      password: null,
      name: null
    }
  },
  computed: {
    ...mapGetters('auth', [
      'getCmsAuthCreateaccountResponse'
    ])
  },
  methods: {
    ...mapActions('auth', [
      'setStatusCmsAuthCreateaccountMail',
      'setStatusCmsAuthCreateaccountPassword',
      'setStatusCmsAuthCreateaccountName',
      'cmsAuthCreateaccountRequest'
    ]),
    sendMail (mail) {
      this.setStatusCmsAuthCreateaccountMail(mail)
      this.mail = mail
    },
    sendPassword (password) {
      this.setStatusCmsAuthCreateaccountPassword(password)
      this.password = password
    },
    sendName (name) {
      this.setStatusCmsAuthCreateaccountName(name)
      this.name = name
    }
  }
}
</script>
