<template>
  <div>
    <p>checkinDt</p>
    <input v-model="checkinDt" @input="sendCheckinDt(checkinDt)" />
    <p>checkoutDt</p>
    <input v-model="checkoutDt" @input="sendCheckoutDt(checkoutDt)" />
    <p>lodgingDt</p>
    <input v-model="lodgingDt" @input="sendLodgingDt(lodgingDt)" />
    <p>regDt</p>
    <input v-model="regDt" @input="sendRegDt(regDt)" />
    <p>regNum</p>
    <input v-model="regNum" @input="sendRegNum(regNum)" />
    <p>name</p>
    <input v-model="name" @input="sendName(name)" />
    <p>roomTypeId</p>
    <input v-model="roomTypeId" @input="sendRoomTypeId(roomTypeId)" />
    <button @click="cmsRegistryRequest">Check</button>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data () {
    return {
      checkinDt: null,
      checkoutDt: null,
      lodgingDt: null,
      regDt: null,
      regNum: null,
      name: null,
      roomTypeId: null
    }
  },
  computed: {
    ...mapGetters('registry', [
      'getCmsRegistryResponse'
    ])
  },
  methods: {
    ...mapActions('registry', [
      'setStatusCmsRegistryCheckinDt',
      'setStatusCmsRegistryCheckoutDt',
      'setStatusCmsRegistryLodgingDt',
      'setStatusCmsRegistryRegDt',
      'setStatusCmsRegistryRegNum',
      'setStatusCmsRegistryName',
      'setStatusCmsRegistryRoomTypeId',
      'cmsRegistryRequest'
    ]),
    sendCheckinDt (checkinDt) {
      this.setStatusCmsRegistryCheckinDt(checkinDt)
      this.checkinDt = checkinDt
    },
    sendCheckoutDt (checkoutDt) {
      this.setStatusCmsRegistryCheckoutDt(checkoutDt)
      this.checkoutDt = checkoutDt
    },
    sendLodgingDt (lodgingDt) {
      this.setStatusCmsRegistryLodgingDt(lodgingDt)
      this.lodgingDt = lodgingDt
    },
    sendRegDt (regDt) {
      this.setStatusCmsRegistryRegDt(regDt)
      this.regDt = regDt
    },
    sendRegNum (regNum) {
      this.setStatusCmsRegistryRegNum(regNum)
      this.regNum = regNum
    },
    sendName (name) {
      this.setStatusCmsRegistryName(name)
      this.name = name
    },
    sendRoomTypeId (roomTypeId) {
      this.setStatusCmsRegistryRoomTypeId(roomTypeId)
      this.roomTypeId = roomTypeId
    }
  }
}
</script>
