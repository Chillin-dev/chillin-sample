import {storiesOf} from '@storybook/vue'

const stories = storiesOf('Select', module)
stories
  .add('Default', () => ({
    template: `
      <v-card color="grey lighten-4" flat>
        <v-card-text>
          <v-container fluid>
            <v-layout row wrap>
              <v-flex xs6>
                <v-subheader>Standard</v-subheader>
              </v-flex>
              <v-flex xs6>
                <v-select
                  v-bind:items="items"
                  v-model="e1"
                  label="Select"
                  single-line
                  bottom
                ></v-select>
              </v-flex>
              <v-flex xs6>
                <v-subheader>Standard with focus</v-subheader>
              </v-flex>
              <v-flex xs6>
                <v-select
                  v-bind:items="items"
                  v-model="e2"
                  label="Select"
                  class="input-group--focused"
                  item-value="text"
                ></v-select>
              </v-flex>
              <v-flex xs6>
                <v-subheader>Error</v-subheader>
              </v-flex>
              <v-flex xs6>
                <v-select
                  label="Select"
                  v-bind:items="items"
                  v-model="e3"
                  v-bind:error-messages="['Please select an option']"
                  item-value="text"
                ></v-select>
              </v-flex>
              <v-flex xs6>
                <v-subheader>Disabled</v-subheader>
              </v-flex>
              <v-flex xs6>
                <v-select
                  label="Select"
                  v-bind:items="items"
                  v-model="e4"
                  disabled
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
      </v-card>`,
    data () {
      return {
        e1: null,
        e2: null,
        e3: null,
        e4: null,
        items: [
          { text: 'State 1' },
          { text: 'State 2' },
          { text: 'State 3' },
          { text: 'State 4' },
          { text: 'State 5' },
          { text: 'State 6' },
          { text: 'State 7' }
        ],
        states: [
          'Alabama', 'Alaska', 'American Samoa', 'Arizona',
          'Arkansas', 'California', 'Colorado', 'Connecticut',
          'Delaware', 'District of Columbia', 'Federated States of Micronesia',
          'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
          'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
          'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
          'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
          'Missouri', 'Montana', 'Nebraska', 'Nevada',
          'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
          'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
          'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
          'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
          'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
          'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ]
      }
    }
  }))
  .add('Icons', () => ({
    template: `
      <v-card color="grey lighten-4" flat>
        <v-card-text>
          <v-container fluid>
            <v-layout row wrap>
              <v-flex xs6>
                <v-subheader>Prepended icon</v-subheader>
              </v-flex>
              <v-flex xs6>
                <v-select
                  v-bind:items="states"
                  v-model="e1"
                  label="Select"
                  single-line
                  auto
                  prepend-icon="map"
                  hide-details
                ></v-select>
              </v-flex>
              <v-flex xs6>
                <v-subheader>Appended icon</v-subheader>
              </v-flex>
              <v-flex xs6>
                <v-select
                  v-bind:items="states"
                  v-model="e2"
                  label="Select"
                  single-line
                  auto
                  append-icon="map"
                  hide-details
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
      </v-card>`,
    data () {
      return {
        e1: null,
        e2: 'Arkansas',
        e3: null,
        e4: null,
        items: [
          { text: 'State 1' },
          { text: 'State 2' },
          { text: 'State 3' },
          { text: 'State 4' },
          { text: 'State 5' },
          { text: 'State 6' },
          { text: 'State 7' }
        ],
        states: [
          'Alabama', 'Alaska', 'American Samoa', 'Arizona',
          'Arkansas', 'California', 'Colorado', 'Connecticut',
          'Delaware', 'District of Columbia', 'Federated States of Micronesia',
          'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
          'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
          'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
          'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
          'Missouri', 'Montana', 'Nebraska', 'Nevada',
          'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
          'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
          'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
          'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
          'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
          'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ]
      }
    }
  }))
  .add('Multiple', () => ({
    template: `
      <v-card color="grey lighten-4" flat>
        <v-card-text>
          <v-container fluid>
            <v-layout row wrap>
              <v-flex xs12 sm6>
                <v-subheader v-text="'Multiple with persistent hint'"></v-subheader>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  label="Select"
                  v-bind:items="states"
                  v-model="e6"
                  multiple
                  max-height="400"
                  hint="Pick your favorite states"
                  persistent-hint
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <v-subheader v-text="'Multiple (Chips) with persistent hint'"></v-subheader>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  label="Select"
                  v-bind:items="states"
                  v-model="e7"
                  multiple
                  chips
                  hint="What are the target regions"
                  persistent-hint
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
      </v-card>`,
    data () {
      return {
        e6: [],
        e7: [],
        states: [
          'Alabama', 'Alaska', 'American Samoa', 'Arizona',
          'Arkansas', 'California', 'Colorado', 'Connecticut',
          'Delaware', 'District of Columbia', 'Federated States of Micronesia',
          'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
          'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
          'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
          'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
          'Missouri', 'Montana', 'Nebraska', 'Nevada',
          'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
          'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
          'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
          'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
          'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
          'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ]
      }
    }
  }))
  .add('Autocomplete', () => ({
    template: `
      <v-card color="grey lighten-4" flat>
        <v-card-text>
          <v-container fluid>
            <v-layout row wrap>
              <v-flex xs12 sm6>
                <v-subheader v-text="'Autocomplete'"></v-subheader>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  v-bind:items="states"
                  v-model="a1"
                  label="Select"
                  autocomplete
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
      </v-card>`,
    data () {
      return {
        a1: null,
        states: [
          'Alabama', 'Alaska', 'American Samoa', 'Arizona',
          'Arkansas', 'California', 'Colorado', 'Connecticut',
          'Delaware', 'District of Columbia', 'Federated States of Micronesia',
          'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
          'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
          'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
          'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
          'Missouri', 'Montana', 'Nebraska', 'Nevada',
          'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
          'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
          'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
          'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
          'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
          'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ]
      }
    }
  }))
