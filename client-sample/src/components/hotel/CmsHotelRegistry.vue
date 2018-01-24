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
    <button @click="cmsHotelRegistryRequest">Check</button>
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
      'getCmsHotelRegistryResponse'
    ])
  },
  methods: {
    ...mapActions('hotel', [
      'setStatusCmsHotelRegistryName',
      'setStatusCmsHotelRegistryCompanyName',
      'setStatusCmsHotelRegistryEyecatchUrl',
      'setStatusCmsHotelRegistryHashtag',
      'setStatusCmsHotelRegistryTwitter',
      'setStatusCmsHotelRegistryAddress',
      'setStatusCmsHotelRegistryLocation',
      'cmsHotelRegistryRequest'
    ]),
    sendName (name) {
      this.setStatusCmsHotelRegistryName(name)
      this.name = name
    },
    sendCompanyName (companyName) {
      this.setStatusCmsHotelRegistryCompanyName(companyName)
      this.companyName = companyName
    },
    sendEyecatchUrl (eyecatchUrl) {
      this.setStatusCmsHotelRegistryEyecatchUrl(eyecatchUrl)
      this.eyecatchUrl = eyecatchUrl
    },
    sendHashtag (hashtag) {
      this.setStatusCmsHotelRegistryHashtag(hashtag)
      this.hashtag = hashtag
    },
    sendTwitter (twitter) {
      this.setStatusCmsHotelRegistryTwitter(twitter)
      this.twitter = twitter
    },
    sendAddress (address) {
      this.setStatusCmsHotelRegistryAddress(address)
      this.address = address
    },
    sendLocation (location) {
      this.setStatusCmsHotelRegistryLocation(location)
      this.location = location
    }
  }
}
</script>
