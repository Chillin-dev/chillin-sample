import {storiesOf} from '@storybook/vue'

const stories = storiesOf('Card', module)
stories
  .add('Components', () => ({
    template: `
      <div>
        <v-layout>
          <v-flex xs12 sm6 offset-sm3>
            <v-card>
              <v-card-media src="/static/doc-images/cards/desert.jpg" height="200px">
              </v-card-media>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                  <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat color="orange">Share</v-btn>
                <v-btn flat color="orange">Explore</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </div>`,
    data () {
      return {
        card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
      }
    }
  }))
  .add('Media with text', () => ({
    template: `
      <div>
        <v-layout>
          <v-flex xs12 sm6 offset-sm3>
            <v-card>
              <v-card-media
                class="white--text"
                height="200px"
                src="/static/doc-images/cards/docks.jpg"
              >
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline">Top 10 Australian beaches</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>
              <v-card-title>
                <div>
                  <span class="grey--text">Number 10</span><br>
                  <span>Whitehaven Beach</span><br>
                  <span>Whitsunday Island, Whitsunday Islands</span>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat color="orange">Share</v-btn>
                <v-btn flat color="orange">Explore</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </div>`
  }))
  .add('Horizontal cards', () => ({
    template: `
      <div>
        <v-app id="e3" style="max-width: 400px; margin: auto;" standalone>
          <v-toolbar color="pink">
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title class="white--text">My Music</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>search</v-icon>
            </v-btn>
          </v-toolbar>
          <main>
            <v-container
              fluid
              style="min-height: 0;"
              grid-list-lg
            >
              <v-layout row wrap>
                <v-flex xs12>
                  <v-card color="blue-grey darken-2" class="white--text">
                    <v-card-title primary-title>
                      <div class="headline">Unlimited music now</div>
                      <div>Listen to your favorite artists and albums whenenver and wherever, online and offline.</div>
                    </v-card-title>
                    <v-card-actions>
                      <v-btn flat dark>Listen now</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-flex>
                <v-flex xs12>
                  <v-card color="cyan darken-2" class="white--text">
                    <v-container fluid grid-list-lg>
                      <v-layout row>
                        <v-flex xs7>
                          <div>
                            <div class="headline">Supermodel</div>
                            <div>Foster the People</div>
                          </div>
                        </v-flex>
                        <v-flex xs5>
                          <v-card-media
                            src="/static/doc-images/cards/foster.jpg"
                            height="125px"
                            contain
                          ></v-card-media>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card>
                </v-flex>
                <v-flex xs12>
                  <v-card color="purple" class="white--text">
                    <v-container fluid grid-list-lg>
                      <v-layout row>
                        <v-flex xs7>
                          <div>
                            <div class="headline">Halycon Days</div>
                            <div>Ellie Goulding</div>
                          </div>
                        </v-flex>
                        <v-flex xs5>
                           <v-card-media
                              src="/static/doc-images/cards/halcyon.png"
                              height="125px"
                              contain
                            ></v-card-media>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </main>
        </v-app>
      </div>`
  }))
  .add('Custom actions', () => ({
    template: `
      <div>
        <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
            <v-card>
              <v-card-media
                src="/static/doc-images/cards/sunshine.jpg"
                height="200px"
              >
              </v-card-media>
              <v-card-title primary-title>
                <div>
                  <div class="headline">Top western road trips</div>
                  <span class="grey--text">1,000 miles of wonder</span>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat>Share</v-btn>
                <v-btn flat color="purple">Explore</v-btn>
                <v-spacer></v-spacer>
                <v-btn icon @click.native="show = !show">
                  <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                </v-btn>
              </v-card-actions>
              <v-slide-y-transition>
                <v-card-text v-show="show">
                  I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                </v-card-text>
              </v-slide-y-transition>
            </v-card>
          </v-flex>
        </v-layout>
      </div>`,
    data: () => ({
      show: false
    })
  }))
