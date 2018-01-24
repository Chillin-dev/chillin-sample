<template>
  <div>
    <p>planId</p>
    <input v-model="planId" @input="sendPlanId(planId)" />
    <button @click="cmsPlanDetailRequest">Check</button>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data () {
    return {
      planId: null
    }
  },
  computed: {
    ...mapGetters('plan', [
      'getCmsPlanDetailResponse'
    ])
  },
  methods: {
    ...mapActions('plan', [
      'setStatusCmsPlanDetailPlanId',
      'cmsPlanDetailRequest'
    ]),
    sendPlanId (planId) {
      this.setStatusCmsPlanDetailPlanId(planId)
      this.planId = planId
    }
  }
}
</script>
