import {storiesOf} from '@storybook/vue'

const stories = storiesOf('Alert', module)
stories
  .add('Contextual', () => ({
    template: `
      <div>
        <v-alert color="success" icon="check_circle" value="true">
          This is a success alert.
        </v-alert>

        <v-alert color="info" icon="info" value="true">
          This is a info alert.
        </v-alert>

        <v-alert color="warning" icon="priority_high" value="true">
          This is a warning alert.
        </v-alert>

        <v-alert color="error" icon="warning" value="true">
          This is a error alert.
        </v-alert>
      </div>`
  }))
  .add('Closable', () => ({
    template: `
      <div>
        <v-alert color="info" icon="info" dismissible v-model="alert">
          This is a success alert that is closable.
        </v-alert>

        <div class="text-xs-center">
          <v-btn color="primary" dark v-if="!alert" v-on:click="alert = true">Reset</v-btn>
        </div>
      </div>`,
    data () {
      return {
        alert: true
      }
    }
  }))
  .add('Custom Icon / No Icon', () => ({
    template: `
      <div>
        <v-alert color="success" icon="new_releases" :value="true">
          This is a success alert with a custom icon.
        </v-alert>

        <v-alert color="error" :value="true">
          This is an error alert with no icon.
        </v-alert>
      </div>`
  }))
  .add('Display transition', () => ({
    template: `
      <div>
        <div class="text-xs-center">
          <v-btn color="primary" @click="alert = !alert">Toggle</v-btn>
        </div>
        <v-alert
          color="success"
          icon="check_circle"
          :value="alert"
          transition="scale-transition"
        >
          This is a success alert.
        </v-alert>
      </div>`,
    data: () => ({
      alert: true
    })
  }))
