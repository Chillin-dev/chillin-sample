<template>
  <div>
    <p>name</p>
    <input v-model="name" @input="sendName(name)" />
    <p>birthday</p>
    <input v-model="birthday" @input="sendBirthday(birthday)" />
    <p>gender</p>
    <input v-model="gender" @input="sendGender(gender)" />
    <p>address</p>
    <input v-model="address" @input="sendAddress(address)" />
    <p>company</p>
    <input v-model="company" @input="sendCompany(company)" />
    <button @click="memberMeEditRequest">Check</button>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data () {
    return {
      name: null,
      birthday: null,
      gender: null,
      address: null,
      company: null
    }
  },
  computed: {
    ...mapGetters('user', [
      'getMemberMeEditResponse'
    ])
  },
  methods: {
    ...mapActions('user', [
      'setStatusMemberMeEditName',
      'setStatusMemberMeEditBirthday',
      'setStatusMemberMeEditGender',
      'setStatusMemberMeEditAddress',
      'setStatusMemberMeEditCompany',
      'memberMeEditRequest'
    ]),
    sendName (name) {
      this.setStatusMemberMeEditName(name)
      this.name = name
    },
    sendBirthday (birthday) {
      this.setStatusMemberMeEditBirthday(birthday)
      this.birthday = birthday
    },
    sendGender (gender) {
      this.setStatusMemberMeEditGender(gender)
      this.gender = gender
    },
    sendAddress (address) {
      this.setStatusMemberMeEditAddress(address)
      this.address = address
    },
    sendCompany (company) {
      this.setStatusMemberMeEditCompany(company)
      this.company = company
    }
  }
}
</script>
