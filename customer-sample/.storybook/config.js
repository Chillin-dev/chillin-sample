import { configure } from '@storybook/vue'

import Vue from 'vue';
// import Vuex from 'vuex' // Vue plugins
import Vuetify from 'vuetify'

import '@/stylus/main.styl'

Vue.use(Vuetify)
// Vue.use(Vuex)

function loadStories() {
  require('../src/stories')
  require('../src/stories/General')
  require("../src/stories/Button")
  require("../src/stories/Card")
  require("../src/stories/Alert")
  require("../src/stories/Badge")
  require("../src/stories/Carousel")
  require("../src/stories/Chip")
  require("../src/stories/Icon")
  require("../src/stories/Tooltip")
  require("../src/stories/Form")
  require("../src/stories/Pagenation")
  require("../src/stories/Pickers")
  require("../src/stories/Select")
}

configure(loadStories, module)
