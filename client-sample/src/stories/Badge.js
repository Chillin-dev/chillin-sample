import {storiesOf} from '@storybook/vue'

const stories = storiesOf('Badge', module)
stories
  .add('Character', () => ({
    template: `
      <div style="margin-top: 50px;">
        <div class="text-xs-center">
          <v-badge left>
            <span slot="badge">6</span>
            <v-icon large color="grey lighten-1">shopping_cart</v-icon>
          </v-badge>

          <v-badge color="red">
            <span slot="badge">!</span>
            <v-icon large color="grey">mail</v-icon>
          </v-badge>
        </div>
      </div>`
  }))
  .add('Icon', () => ({
    template: `
      <div style="margin-top: 50px;">
        <div class="text-xs-center">
          <v-badge overlay left color="purple" overlap>
            <v-icon slot="badge" dark>done</v-icon>
            <v-icon
              large
              color="grey lighten-1"
            >
              account_circle
            </v-icon>
          </v-badge>

          <v-badge overlap color="orange">
            <v-icon slot="badge" dark>notifications</v-icon>
            <v-icon
              large
              color="grey darken-1"
            >
              account_box
            </v-icon>
          </v-badge>
        </div>
      </div>`
  }))
  .add('Inline', () => ({
    template: `
      <div style="margin-top: 50px;">
        <div class="text-xs-center">
          <v-badge left>
            <span slot="badge">2</span>
            <span>Examples</span>
          </v-badge>

          <v-badge color="green">
            <v-icon slot="badge" dark>list</v-icon>
            <span>Lists</span>
          </v-badge>
        </div>
      </div>`
  }))
  .add('Visibility', () => ({
    template: `
      <div>
        <v-container fluid class="text-xs-center">
          <v-layout flex wrap row justify-space-between>
            <v-flex xs12>
              <v-btn @click.native="show = !show">toggle</v-btn>
            </v-flex>
            <v-flex xs12 class="mt-5">
              <v-badge color="cyan" v-model="show" left>
                <span slot="badge">6</span>
                <v-icon large color="grey lighten-1">shopping_cart</v-icon>
              </v-badge>
              <v-badge color="indigo" v-model="show">
                <span slot="badge">6</span>
                <v-icon large color="grey">mail</v-icon>
              </v-badge>
            </v-flex>
          </v-layout>
        </v-container>
      </div>`,
    data () {
      return {
        show: true,
        badgeData: { value: '!' }
      }
    },
    computed: {
      badge () {
        return this.show ? this.badgeData : null
      }
    }
  }))
