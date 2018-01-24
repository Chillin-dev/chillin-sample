import {storiesOf} from '@storybook/vue'

const stories = storiesOf('Pagenation', module)
stories
  .add('Short', () => ({
    template: `
      <div class="text-xs-center">
        <v-pagination :length="6" v-model="page"></v-pagination>
      </div>`,
    data () {
      return {
        page: 1
      }
    }
  }))
  .add('Long', () => ({
    template: `
      <div class="text-xs-center">
        <v-container>
          <v-layout justify-center>
            <v-flex xs8>
              <v-card>
                <v-card-text>
                  <v-pagination v-bind:length.number="15" v-model="page"></v-pagination>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </div>`,
    data () {
      return {
        page: 1
      }
    }
  }))
  .add('Limit', () => ({
    template: `
      <div class="text-xs-center">
        <v-pagination :length="15" v-model="page" :total-visible="7"></v-pagination>
      </div>`,
    data () {
      return {
        page: 1
      }
    }
  }))
  .add('Round', () => ({
    template: `
      <div class="text-xs-center">
        <v-pagination :length="4" v-model="page" circle></v-pagination>
      </div>`,
    data () {
      return {
        page: 1
      }
    }
  }))
  .add('Disabled', () => ({
    template: `
      <div class="text-xs-center">
        <v-pagination :length="3" disabled></v-pagination>
      </div>`
  }))
