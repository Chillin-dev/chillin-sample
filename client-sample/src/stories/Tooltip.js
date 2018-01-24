import {storiesOf} from '@storybook/vue'

const stories = storiesOf('Tooltip', module)
stories
  .add('Default', () => ({
    template: `
      <div class="text-xs-center">
        <v-tooltip top>
          <v-btn dark color="primary" slot="activator">Top</v-btn>
          <span>Top tooltip</span>
        </v-tooltip>
        <v-tooltip right>
          <v-btn dark color="primary" slot="activator">Right</v-btn>
          <span>Right tooltip</span>
        </v-tooltip>
        <v-tooltip bottom>
          <v-btn dark color="primary" slot="activator">Bottom</v-btn>
          <span>Bottom tooltip</span>
        </v-tooltip>
        <v-tooltip left>
          <v-btn dark color="primary" slot="activator">Left</v-btn>
          <span>Left tooltip</span>
        </v-tooltip>
      </div>`
  }))
  .add('Visibility', () => ({
    template: `
      <v-container fluid class="text-xs-center">
        <v-layout flex wrap row justify-space-between>
          <v-flex xs12>
            <v-btn @click.native="show = !show">toggle</v-btn>
          </v-flex>
          <v-flex xs12 class="mt-5">
            <v-tooltip v-model="show" top>
              <v-btn icon slot="activator">
                <v-icon color="grey lighten-1">shopping_cart</v-icon>
              </v-btn>
              <span>Programmatic tooltip</span>
            </v-tooltip>
          </v-flex>
        </v-layout>
      </v-container>`,
    data () {
      return {
        show: false
      }
    }
  }))
