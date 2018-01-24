import {storiesOf} from '@storybook/vue'

const stories = storiesOf('Button', module)
stories
  .add('Flat', () => ({
    template: `
      <div>
        <v-btn flat>Normal</v-btn>
        <v-btn flat color="primary">primary</v-btn>
        <v-btn flat color="accent">accent</v-btn>
        <v-btn flat color="secondary">secondary</v-btn>
        <v-btn flat color="info">info</v-btn>
        <v-btn flat color="warning">warning</v-btn>
        <v-btn flat color="error">error</v-btn>
        <v-btn flat color="success">success</v-btn>
        <v-btn flat disabled>Disabled</v-btn>
      </div>`
  }))
  .add('Color', () => ({
    template: `
      <div>
        <v-btn>Normal</v-btn>
        <v-btn color="primary">primary</v-btn>
        <v-btn color="accent">accent</v-btn>
        <v-btn color="secondary">secondary</v-btn>
        <v-btn color="info">info</v-btn>
        <v-btn color="warning">warning</v-btn>
        <v-btn color="error">error</v-btn>
        <v-btn color="success">success</v-btn>
        <v-btn disabled>disabled</v-btn>
      </div>`
  }))
  .add('Button Toggle', () => ({
    template: `
      <div>
        <v-flex xs12 sm6 class="py-2">
          <p>Exclusive</p>
          <v-btn-toggle v-model="toggle_exclusive">
            <v-btn flat>
              <v-icon>format_align_left</v-icon>
            </v-btn>
            <v-btn flat>
              <v-icon>format_align_center</v-icon>
            </v-btn>
            <v-btn flat>
              <v-icon>format_align_right</v-icon>
            </v-btn>
            <v-btn flat>
              <v-icon>format_align_justify</v-icon>
            </v-btn>
          </v-btn-toggle>
        </v-flex>
        <v-flex xs12 sm6 class="py-2">
          <p>Multiple</p>
          <v-btn-toggle multiple v-model="toggle_multiple">
            <v-btn flat>
              <v-icon>format_bold</v-icon>
            </v-btn>
            <v-btn flat>
              <v-icon>format_italic</v-icon>
            </v-btn>
            <v-btn flat>
              <v-icon>format_underlined</v-icon>
            </v-btn>
            <v-btn flat>
              <v-icon>format_color_fill</v-icon>
            </v-btn>
          </v-btn-toggle>
        </v-flex>
        <v-flex xs12 sm6 class="py-2">
          <p>No Options Selected</p>
          <v-btn-toggle v-model="toggle_none">
            <v-btn flat>
              <v-icon>format_align_left</v-icon>
            </v-btn>
            <v-btn flat>
              <v-icon>format_align_center</v-icon>
            </v-btn>
            <v-btn flat>
              <v-icon>format_align_right</v-icon>
            </v-btn>
            <v-btn flat>
              <v-icon>format_align_justify</v-icon>
            </v-btn>
          </v-btn-toggle>
        </v-flex>
        <v-flex xs12 sm6 class="py-2">
          <p>Mandatory</p>
          <v-btn-toggle mandatory v-model="toggle_one">
            <v-btn flat>
              <v-icon>format_align_left</v-icon>
            </v-btn>
            <v-btn flat>
              <v-icon>format_align_center</v-icon>
            </v-btn>
            <v-btn flat>
              <v-icon>format_align_right</v-icon>
            </v-btn>
            <v-btn flat>
              <v-icon>format_align_justify</v-icon>
            </v-btn>
          </v-btn-toggle>
        </v-flex>
        <v-flex xs12 sm6 class="py-2">
          <p>Text Options</p>
          <v-btn-toggle v-model="text">
            <v-btn flat value="left">
              Left
            </v-btn>
            <v-btn flat value="center">
              Center
            </v-btn>
            <v-btn flat value="right">
              Right
            </v-btn>
            <v-btn flat value="justify">
              Justify
            </v-btn>
          </v-btn-toggle>
        </v-flex>
        <v-flex xs12 sm6 class="py-2">
          <p>Text & Icon Options</p>
          <v-btn-toggle v-model="icon">
            <v-btn flat value="left">
              <span>Left</span>
              <v-icon>format_align_left</v-icon>
            </v-btn>
            <v-btn flat value="center">
              <span>Center</span>
              <v-icon>format_align_center</v-icon>
            </v-btn>
            <v-btn flat value="right">
              <span>Right</span>
              <v-icon>format_align_right</v-icon>
            </v-btn>
            <v-btn flat value="justify">
              <span>Justify</span>
              <v-icon>format_align_justify</v-icon>
            </v-btn>
          </v-btn-toggle>
        </v-flex>
      </div>`,
    data () {
      return {
        text: 'center',
        icon: 'justify',
        toggle_none: null,
        toggle_one: 0,
        toggle_exclusive: 2,
        toggle_multiple: [0, 1, 2]
      }
    }
  }))
  .add('Icon', () => ({
    template: `
      <div>
        <v-flex xs12>
          <p>Normal</p>
        </v-flex>
        <v-flex xs12 sm3>
          <v-btn flat icon color="pink">
            <v-icon>favorite</v-icon>
          </v-btn>
        </v-flex>
        <v-flex xs12 sm3>
          <v-btn flat icon color="indigo">
            <v-icon>star</v-icon>
          </v-btn>
        </v-flex>
        <v-flex xs12 sm3>
          <v-btn flat icon color="green">
            <v-icon>cached</v-icon>
          </v-btn>
        </v-flex>
        <v-flex xs12 sm3>
          <v-btn flat icon color="deep-orange">
            <v-icon>thumb_up</v-icon>
          </v-btn>
        </v-flex>
        <v-flex xs12>
          <p>Disabled</p>
        </v-flex>
        <v-flex xs12 sm3>
          <v-btn icon disabled>
            <v-icon>favorite</v-icon>
          </v-btn>
        </v-flex>
        <v-flex xs12 sm3>
          <v-btn icon disabled>
            <v-icon>star</v-icon>
          </v-btn>
        </v-flex>
        <v-flex xs12 sm3>
          <v-btn icon disabled>
            <v-icon>cached</v-icon>
          </v-btn>
        </v-flex>
        <v-flex xs12 sm3>
          <v-btn icon disabled>
            <v-icon>thumb_up</v-icon>
          </v-btn>
        </v-flex>
      </div>`
  }))
  .add('Floating', () => ({
    template: `
      <div>
        <v-btn fab dark small color="primary">
          <v-icon dark>remove</v-icon>
        </v-btn>
        <v-btn fab dark small color="pink">
          <v-icon dark>favorite</v-icon>
        </v-btn>
        <v-btn fab dark color="indigo">
          <v-icon dark>add</v-icon>
        </v-btn>
        <v-btn fab dark color="teal">
          <v-icon dark>list</v-icon>
        </v-btn>
        <v-btn fab dark large color="cyan">
          <v-icon dark>edit</v-icon>
        </v-btn>
        <v-btn fab dark large color="purple">
          <v-icon dark>android</v-icon>
        </v-btn>
      </div>`
  }))
  .add('Loaders', () => ({
    template: `
      <div>
        <v-btn
          color="secondary"
          :loading="loading"
          @click.native="loader = 'loading'"
          :disabled="loading"
        >
          Accept Terms
        </v-btn>
        <v-btn
          :loading="loading3"
          @click.native="loader = 'loading3'"
          :disabled="loading3"
          color="blue-grey"
          dark
        >
          Upload
          <v-icon right dark>cloud_upload</v-icon>
        </v-btn>
        <v-btn
          color="success"
          :loading="loading2"
          @click.native="loader = 'loading2'"
          :disabled="loading2"
        >
          Custom Loader
          <span slot="loader">Loading...</span>
        </v-btn>
        <v-btn
          color="info"
          :loading="loading4"
          @click.native="loader = 'loading4'"
          :disabled="loading4"
        >
          Icon Loader
          <span slot="loader" class="custom-loader">
            <v-icon light>cached</v-icon>
          </span>
        </v-btn>
      </div>`,
    data () {
      return {
        loader: null,
        loading: false,
        loading2: false,
        loading3: false,
        loading4: false
      }
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      }
    }
  }))
  .add('Sizing', () => ({
    template: `
      <div>
        <v-flex xs12 sm6>
          <div class="text-xs-center">
            <v-card flat>
              <v-card-text>
                <div>
                  <v-btn small color="primary" dark>Small Button</v-btn>
                </div>
                <div>
                  <v-btn color="warning" dark>Normal Button</v-btn>
                </div>
                <div>
                  <v-btn color="error" dark large>Large Button</v-btn>
                </div>
              </v-card-text>
            </v-card>
          </div>
        </v-flex>
        <v-flex xs12 sm6>
          <div class="text-xs-center">
            <v-card flat>
              <v-card-text>
                <div>
                  <v-btn color="primary" fab small dark>
                    <v-icon>edit</v-icon>
                  </v-btn>
                </div>
                <div>
                  <v-btn color="warning" fab dark>
                    <v-icon>account_circle</v-icon>
                  </v-btn>
                </div>
                <div>
                  <v-btn color="error" fab large dark>
                    <v-icon>alarm</v-icon>
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </div>
        </v-flex>
      </div>`
  }))
  .add('Outline', () => ({
    template: `
      <div>
        <v-btn outline color="indigo">Outline Button</v-btn>
        <v-btn outline fab color="teal">
          <v-icon>list</v-icon>
        </v-btn>
        <v-btn outline large fab color="indigo">
          <v-icon>edit</v-icon>
        </v-btn>
      </div>`
  }))
  .add('Round', () => ({
    template: `
      <div>
        <v-btn round color="primary" dark>Rounded Button</v-btn>
      </div>`
  }))
  .add('Block', () => ({
    template: `
      <div>
        <v-btn block color="secondary" dark>Block Button</v-btn>
      </div>`
  }))
