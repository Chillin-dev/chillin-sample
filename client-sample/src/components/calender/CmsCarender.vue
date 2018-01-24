<template>
  <div>
    <p>year</p>
    <input v-model="year" @input="sendYear(year)" />
    <p>month</p>
    <input v-model="month" @input="sendMonth(month)" />
    <button @click="cmsCarenderRequest">Check</button>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data () {
    return {
      year: null,
      month: null
    }
  },
  computed: {
    ...mapGetters('calender', [
      'getCmsCarenderResponse'
    ])
  },
  methods: {
    ...mapActions('calender', [
      'setStatusCmsCarenderYear',
      'setStatusCmsCarenderMonth',
      'cmsCarenderRequest'
    ]),
    sendYear (year) {
      this.setStatusCmsCarenderYear(year)
      this.year = year
    },
    sendMonth (month) {
      this.setStatusCmsCarenderMonth(month)
      this.month = month
    }
  }
}
</script>
