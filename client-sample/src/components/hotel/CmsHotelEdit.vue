<template>
  <div>
    <p>name</p>
    <input v-model="name" @input="sendName(name)" />
    <p>companyName</p>
    <input v-model="companyName" @input="sendCompanyName(companyName)" />
    <p>eyecatchUrl</p>
    <input v-model="eyecatchUrl" @input="sendEyecatchUrl(eyecatchUrl)" />
    <p>hashtag</p>
    <input v-model="hashtag" @input="sendHashtag(hashtag)" />
    <p>twitter</p>
    <input v-model="twitter" @input="sendTwitter(twitter)" />
    <p>address</p>
    <input v-model="address" @input="sendAddress(address)" />
    <p>location</p>
    <input v-model="location" @input="sendLocation(location)" />
    <button @click="cmsHotelEditRequest">Check</button>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data () {
    return {
      name: null,
      companyName: null,
      eyecatchUrl: null,
      hashtag: null,
      twitter: null,
      address: null,
      location: null
    }
  },
  computed: {
    ...mapGetters('hotel', [
      'getCmsHotelEditResponse'
    ])
  },
  methods: {
    ...mapActions('hotel', [
      'setStatusCmsHotelEditName',
      'setStatusCmsHotelEditCompanyName',
      'setStatusCmsHotelEditEyecatchUrl',
      'setStatusCmsHotelEditHashtag',
      'setStatusCmsHotelEditTwitter',
      'setStatusCmsHotelEditAddress',
      'setStatusCmsHotelEditLocation',
      'cmsHotelEditRequest'
    ]),
    sendName (name) {
      this.setStatusCmsHotelEditName(name)
      this.name = name
    },
    sendCompanyName (companyName) {
      this.setStatusCmsHotelEditCompanyName(companyName)
      this.companyName = companyName
    },
    sendEyecatchUrl (eyecatchUrl) {
      this.setStatusCmsHotelEditEyecatchUrl(eyecatchUrl)
      this.eyecatchUrl = eyecatchUrl
    },
    sendHashtag (hashtag) {
      this.setStatusCmsHotelEditHashtag(hashtag)
      this.hashtag = hashtag
    },
    sendTwitter (twitter) {
      this.setStatusCmsHotelEditTwitter(twitter)
      this.twitter = twitter
    },
    sendAddress (address) {
      this.setStatusCmsHotelEditAddress(address)
      this.address = address
    },
    sendLocation (location) {
      this.setStatusCmsHotelEditLocation(location)
      this.location = location
    }
  }
}
</script>
