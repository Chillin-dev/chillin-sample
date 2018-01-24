import {storiesOf} from '@storybook/vue'

const stories = storiesOf('Icon', module)
stories
  .add('Standard', () => ({
    template: `
      <v-container fluid>
        <v-layout justify-space-around class="mb-2">
          <span class="group pa-2">
            <v-icon>home</v-icon>
            <v-icon>event</v-icon>
            <v-icon>info</v-icon>
          </span>

          <span class="group pa-2 teal">
            <v-icon dark>folder_open</v-icon>
            <v-icon dark>widgets</v-icon>
            <v-icon dark>gavel</v-icon>
          </span>
        </v-layout>

        <v-layout justify-space-around class="mb-2">
          <span class="group pa-2">
            <v-icon medium>home</v-icon>
            <v-icon medium>event</v-icon>
            <v-icon medium>info</v-icon>
          </span>

          <span class="group pa-2 teal">
            <v-icon medium dark>folder_open</v-icon>
            <v-icon medium dark>widgets</v-icon>
            <v-icon medium dark>gavel</v-icon>
          </span>
        </v-layout>

        <v-layout justify-space-around class="mb-2">
          <span class="group pa-2">
            <v-icon large>home</v-icon>
            <v-icon large>event</v-icon>
            <v-icon large>info</v-icon>
          </span>

          <span class="group pa-2 teal">
            <v-icon large dark>folder_open</v-icon>
            <v-icon large dark>widgets</v-icon>
            <v-icon large dark>gavel</v-icon>
          </span>
        </v-layout>

        <v-layout justify-space-around>
          <span class="group pa-2">
            <v-icon x-large>home</v-icon>
            <v-icon x-large>event</v-icon>
            <v-icon x-large>info</v-icon>
          </span>

          <span class="group pa-2 teal">
            <v-icon x-large dark>folder_open</v-icon>
            <v-icon x-large dark>widgets</v-icon>
            <v-icon x-large dark>gavel</v-icon>
          </span>
        </v-layout>
      </v-container>`
  }))
  .add('Color', () => ({
    template: `
      <v-layout justify-space-around>
        <v-icon large color="green darken-2">business</v-icon>

        <v-icon large color="blue darken-2">chat</v-icon>

        <v-icon large color="purple darken-2">dialpad</v-icon>

        <v-icon large color="teal darken-2">email</v-icon>

        <v-icon large color="blue-grey darken-2">call_split</v-icon>

        <v-icon large color="orange darken-2">present_to_all</v-icon>
      </v-layout>`
  }))
  .add('Buttons', () => ({
    template: `
      <div class="text-xs-center">
        <v-btn color="primary" dark>Accept
          <v-icon dark right>check_circle</v-icon>
        </v-btn>

        <v-btn color="red" dark>Decline
          <v-icon dark right>block</v-icon>
        </v-btn>

        <v-btn dark>
          <v-icon dark left>remove_circle</v-icon>Cancel
        </v-btn>

        <v-btn color="orange darken-2" dark>
          <v-icon dark left>arrow_back</v-icon>Back
        </v-btn>

        <v-btn color="purple" dark>
          <v-icon dark>build</v-icon>
        </v-btn>

        <v-btn color="indigo" dark>
          <v-icon dark>backup</v-icon>
        </v-btn>

        <v-btn flat icon color="blue lighten-2">
          <v-icon>thumb_up</v-icon>
        </v-btn>

        <v-btn flat icon color="red lighten-2">
          <v-icon>thumb_down</v-icon>
        </v-btn>
      </div>`
  }))
