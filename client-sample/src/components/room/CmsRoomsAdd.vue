<template>
  <div>
    <p>name</p>
    <input v-model="name" @input="sendName(name)" />
    <p>maxPeopleNum</p>
    <input v-model="maxPeopleNum" @input="sendMaxPeopleNum(maxPeopleNum)" />
    <p>roomSum</p>
    <input v-model="roomSum" @input="sendRoomSum(roomSum)" />
    <p>description</p>
    <input v-model="description" @input="sendDescription(description)" />
    <p>bedType</p>
    <input v-model="bedType" @input="sendBedType(bedType)" />
    <p>amenityIds</p>
    <input v-model="amenityIds" @input="sendAmenityIds(amenityIds)" />
    <p>imageIds</p>
    <input v-model="imageIds" @input="sendImageIds(imageIds)" />
    <button @click="cmsRoomsAddRequest">Check</button>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data () {
    return {
      name: null,
      maxPeopleNum: null,
      roomSum: null,
      description: null,
      bedType: null,
      amenityIds: null,
      imageIds: null
    }
  },
  computed: {
    ...mapGetters('room', [
      'getCmsRoomsAddResponse'
    ])
  },
  methods: {
    ...mapActions('room', [
      'setStatusCmsRoomsAddName',
      'setStatusCmsRoomsAddMaxPeopleNum',
      'setStatusCmsRoomsAddRoomSum',
      'setStatusCmsRoomsAddDescription',
      'setStatusCmsRoomsAddBedType',
      'setStatusCmsRoomsAddAmenityIds',
      'setStatusCmsRoomsAddImageIds',
      'cmsRoomsAddRequest'
    ]),
    sendName (name) {
      this.setStatusCmsRoomsAddName(name)
      this.name = name
    },
    sendMaxPeopleNum (maxPeopleNum) {
      this.setStatusCmsRoomsAddMaxPeopleNum(maxPeopleNum)
      this.maxPeopleNum = maxPeopleNum
    },
    sendRoomSum (roomSum) {
      this.setStatusCmsRoomsAddRoomSum(roomSum)
      this.roomSum = roomSum
    },
    sendDescription (description) {
      this.setStatusCmsRoomsAddDescription(description)
      this.description = description
    },
    sendBedType (bedType) {
      this.setStatusCmsRoomsAddBedType(bedType)
      this.bedType = bedType
    },
    sendAmenityIds (amenityIds) {
      this.setStatusCmsRoomsAddAmenityIds(amenityIds)
      this.amenityIds = amenityIds
    },
    sendImageIds (imageIds) {
      this.setStatusCmsRoomsAddImageIds(imageIds)
      this.imageIds = imageIds
    }
  }
}
</script>
