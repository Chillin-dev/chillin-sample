import {storiesOf} from '@storybook/vue'

const stories = storiesOf('Chip', module)
stories
  .add('Default', () => ({
    template: `
      <div>
        <v-container fluid class="pa-0">
          <v-layout row wrap>
            <v-flex md6 sm12>
              <div class="text-xs-center">
                <v-chip close>Example Chip</v-chip>
              </div>
              <div class="text-xs-center">
                <v-chip>Example Chip</v-chip>
              </div>
            </v-flex>
            <v-flex md6 sm12 xs12>
              <div class="text-xs-center">
                <v-chip close>
                  <v-avatar>
                    <img src="https://randomuser.me/api/portraits/men/35.jpg" alt="trevor">
                  </v-avatar>
                  Trevor Hansen
                </v-chip>
              </div>
              <div class="text-xs-center">
                <v-chip>
                  <v-avatar class="teal">A</v-avatar>
                  ANZ Bank
                </v-chip>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </div>`
  }))
  .add('Colored', () => ({
    template: `
      <div class="text-xs-center">
        <v-chip outline color="secondary">Outline</v-chip>

        <v-chip outline color="primary">Colored</v-chip>

        <v-chip outline color="red">
          <v-icon left>build</v-icon>Icon
        </v-chip>
      </div>`
  }))
  .add('Label', () => ({
    template: `
      <div class="text-xs-center">
        <v-chip label>Label</v-chip>

        <v-chip label color="pink" text-color="white">
          <v-icon left>label</v-icon>Tags
        </v-chip>

        <v-chip label outline color="red">Outline</v-chip>
      </div>`
  }))
  .add('Closable', () => ({
    template: `
      <div class="text-xs-center">
        <div class="text-xs-center">
          <v-btn
            v-on:click="chip1 = true, chip2 = true, chip3 = true, chip4= true"
            v-if="!chip1 && !chip2 && !chip3 && !chip4"
            color="primary"
            dark
          >
            Reset Chips
          </v-btn>
        </div>
        <v-chip close v-model="chip1">Closable</v-chip>

        <v-chip close v-model="chip2" color="red" text-color="white">Remove</v-chip>

        <v-chip close v-model="chip3" outline color="green">Success</v-chip>

        <v-chip close v-model="chip4" outline label color="orange">Complete</v-chip>
      </div>`,
    data () {
      return {
        chip1: true,
        chip2: true,
        chip3: true,
        chip4: true
      }
    }
  }))
  .add('In selects', () => ({
    template: `
      <v-select
        label="Your favorite hobbies"
        chips
        tags
        solo
        prepend-icon="filter_list"
        append-icon=""
        clearable
        v-model="chips"
        >
          <template slot="selection" scope="data">
            <v-chip
              close
              @input="remove(data.item)"
              :selected="data.selected"
            >
              <strong>{{ data.item }}</strong>
              <span>(interest)</span>
            </v-chip>
          </template>
        </v-select>`,
    data () {
      return {
        chips: ['Progamming', 'Playing video games', 'Watching', 'Sleeping']
      }
    },
    methods: {
      remove (item) {
        this.chips.splice(this.chips.indexOf(item), 1)
        this.chips = [...this.chips]
      }
    }
  }))
