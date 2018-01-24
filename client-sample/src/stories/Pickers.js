import {storiesOf} from '@storybook/vue'

const stories = storiesOf('Pickers', module)
stories
  .add('Date pickers - Light', () => ({
    template: `
      <v-layout row wrap>
        <v-flex md12 lg4>
          <v-date-picker v-model="picker"></v-date-picker>
        </v-flex>
        <v-flex md12 lg8 class="hidden-xs-only">
          <v-date-picker v-model="picker2" landscape></v-date-picker>
        </v-flex>
      </v-layout>`,
    data () {
      return {
        picker: null,
        picker2: null
      }
    }
  }))
  .add('Date pickers - Dark', () => ({
    template: `
      <v-layout row wrap>
        <v-flex md12 lg4>
          <v-date-picker v-model="e2" actions dark></v-date-picker>
        </v-flex>
        <v-flex md12 lg8 class="hidden-xs-only">
          <v-date-picker v-model="e2" actions landscape dark></v-date-picker>
        </v-flex>
      </v-layout>`,
    data () {
      return {
        e2: null
      }
    }
  }))
  .add('Date pickers - In dialog and menu', () => ({
    template: `
      <v-layout row wrap>
        <v-flex xs11 sm5>
          <v-menu
            lazy
            :close-on-content-click="false"
            v-model="menu"
            transition="scale-transition"
            offset-y
            full-width
            :nudge-right="40"
            max-width="290px"
            min-width="290px"
          >
            <v-text-field
              slot="activator"
              label="Picker in menu"
              v-model="date"
              prepend-icon="event"
              readonly
            ></v-text-field>
            <v-date-picker v-model="date" no-title scrollable actions>
              <template scope="{ save, cancel }">
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                  <v-btn flat color="primary" @click="save">OK</v-btn>
                </v-card-actions>
              </template>
            </v-date-picker>
          </v-menu>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs11 sm5>
          <v-dialog
            persistent
            v-model="modal"
            lazy
            full-width
          >
            <v-text-field
              slot="activator"
              label="Picker in dialog"
              v-model="date"
              prepend-icon="event"
              readonly
            ></v-text-field>
            <v-date-picker v-model="date" scrollable actions>
              <template scope="{ save, cancel }">
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                  <v-btn flat color="primary" @click="save">OK</v-btn>
                </v-card-actions>
              </template>
            </v-date-picker>
          </v-dialog>
        </v-flex>
      </v-layout>`,
    data () {
      return {
        date: null,
        menu: false,
        modal: false
      }
    }
  }))
  .add('Date pickers - Allowed dates', () => ({
    template: `
      <v-layout row wrap>
        <v-flex xs12>
          <v-btn
            :color="allowedDates === everyOtherDay ? 'primary' : ''"
            :class="{ 'white--text': allowedDates === everyOtherDay }"
            @click.native="allowedDates = everyOtherDay"
          >Function</v-btn>
          <v-btn
            :color="allowedDates === randomDays ? 'primary' : ''"
            :class="{ 'white--text': allowedDates === randomDays }"
            @click.native="allowedDates = randomDays"
          >Array</v-btn>
          <v-btn
            :color="allowedDates === lastFiveDays ? 'primary' : ''"
            :class="{ 'white--text': allowedDates === lastFiveDays }"
            @click.native="allowedDates = lastFiveDays"
          >Object</v-btn>
          <v-date-picker
            class="mt-3"
            v-model="date"
            :allowed-dates="allowedDates"
          ></v-date-picker>
        </v-flex>
      </v-layout>`,
    data () {
      return {
        date: null,
        allowedDates: null,
        everyOtherDay: function (date) {
          return date.getDay() % 2 === 0
        },
        randomDays: [],
        lastFiveDays: {
          min: null,
          max: null
        }
      }
    },
    mounted () {
      const date = new Date()
      this.randomDays = [...Array(10)].map(() => {
        const day = Math.floor(Math.random() * 30)
        const d = new Date()
        d.setDate(day)
        return d
      })

      const d = new Date()
      d.setDate(date.getDate() - 5)
      this.lastFiveDays.min = d
      this.lastFiveDays.max = date

      this.allowedDates = this.everyOtherDay
    }
  }))
  .add('Date pickers - Custom format', () => ({
    template: `
      <v-layout row wrap>
        <v-flex md12 lg4>
          <table class="table text-xs-left" style="width: 300px;">
            <tbody>
              <tr>
                <th>Original</th>
                <td>
                  <strong>{{ picker || "No date" }}</strong>
                </td>
              </tr>
              <tr>
                <th>Formatted</th>
                <td>
                  <strong>{{ formatted || "No date" }}</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </v-flex>
        <v-flex md12 lg4>
          <v-date-picker
            v-model="picker"
            :date-format="date => new Date(date).toDateString()"
            :formatted-value.sync="formatted"
          ></v-date-picker>
        </v-flex>
      </v-layout>`,
    data () {
      return {
        picker: null,
        formatted: null
      }
    }
  }))
