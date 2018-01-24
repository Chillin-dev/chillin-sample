<template>
  <div>
    <p>date</p>
    <input v-model="date" @input="sendDate(date)" />
    <button @click="cmsCarenderRegisterRequest">Check</button>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data () {
    return {
      date: null
    }
  },
  computed: {
    ...mapGetters('calender', [
      'getCmsCarenderRegisterResponse'
    ])
  },
  methods: {
    ...mapActions('calender', [
      'setStatusCmsCarenderRegisterDate',
      'cmsCarenderRegisterRequest'
    ]),
    sendDate (date) {
      this.setStatusCmsCarenderRegisterDate(date)
      this.date = date
    }
  }
}
</script>
