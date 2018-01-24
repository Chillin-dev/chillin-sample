<template>
  <div>
    <p>name</p>
    <input v-model="name" @input="sendName(name)" />
    <p>summary</p>
    <input v-model="summary" @input="sendSummary(summary)" />
    <p>detail</p>
    <input v-model="detail" @input="sendDetail(detail)" />
    <p>priceType</p>
    <input v-model="priceType" @input="sendPriceType(priceType)" />
    <p>price</p>
    <input v-model="price" @input="sendPrice(price)" />
    <p>periodType</p>
    <input v-model="periodType" @input="sendPeriodType(periodType)" />
    <p>startDt</p>
    <input v-model="startDt" @input="sendStartDt(startDt)" />
    <p>endDt</p>
    <input v-model="endDt" @input="sendEndDt(endDt)" />
    <p>eyecatchUrl</p>
    <input v-model="eyecatchUrl" @input="sendEyecatchUrl(eyecatchUrl)" />
    <p>imageUrls</p>
    <input v-model="imageUrls" @input="sendImageUrls(imageUrls)" />
    <p>roomIds</p>
    <input v-model="roomIds" @input="sendRoomIds(roomIds)" />
    <button @click="cmsPlanAddRequest">Check</button>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data () {
    return {
      name: null,
      summary: null,
      detail: null,
      priceType: null,
      price: null,
      periodType: null,
      startDt: null,
      endDt: null,
      eyecatchUrl: null,
      imageUrls: null,
      roomIds: null
    }
  },
  computed: {
    ...mapGetters('plan', [
      'getCmsPlanAddResponse'
    ])
  },
  methods: {
    ...mapActions('plan', [
      'setStatusCmsPlanAddName',
      'setStatusCmsPlanAddSummary',
      'setStatusCmsPlanAddDetail',
      'setStatusCmsPlanAddPriceType',
      'setStatusCmsPlanAddPrice',
      'setStatusCmsPlanAddPeriodType',
      'setStatusCmsPlanAddStartDt',
      'setStatusCmsPlanAddEndDt',
      'setStatusCmsPlanAddEyecatchUrl',
      'setStatusCmsPlanAddImageUrls',
      'setStatusCmsPlanAddRoomIds',
      'cmsPlanAddRequest'
    ]),
    sendName (name) {
      this.setStatusCmsPlanAddName(name)
      this.name = name
    },
    sendSummary (summary) {
      this.setStatusCmsPlanAddSummary(summary)
      this.summary = summary
    },
    sendDetail (detail) {
      this.setStatusCmsPlanAddDetail(detail)
      this.detail = detail
    },
    sendPriceType (priceType) {
      this.setStatusCmsPlanAddPriceType(priceType)
      this.priceType = priceType
    },
    sendPrice (price) {
      this.setStatusCmsPlanAddPrice(price)
      this.price = price
    },
    sendPeriodType (periodType) {
      this.setStatusCmsPlanAddPeriodType(periodType)
      this.periodType = periodType
    },
    sendStartDt (startDt) {
      this.setStatusCmsPlanAddStartDt(startDt)
      this.startDt = startDt
    },
    sendEndDt (endDt) {
      this.setStatusCmsPlanAddEndDt(endDt)
      this.endDt = endDt
    },
    sendEyecatchUrl (eyecatchUrl) {
      this.setStatusCmsPlanAddEyecatchUrl(eyecatchUrl)
      this.eyecatchUrl = eyecatchUrl
    },
    sendImageUrls (imageUrls) {
      this.setStatusCmsPlanAddImageUrls(imageUrls)
      this.imageUrls = imageUrls
    },
    sendRoomIds (roomIds) {
      this.setStatusCmsPlanAddRoomIds(roomIds)
      this.roomIds = roomIds
    }
  }
}
</script>
