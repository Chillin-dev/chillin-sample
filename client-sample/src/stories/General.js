import {storiesOf} from '@storybook/vue'

const stories = storiesOf('General', module)
stories
  .add('General', () => ({
    template: `
      <v-app>

        <v-toolbar color="primary" dark app>
          <v-toolbar-title>Toolbar color: primary</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat>Link One</v-btn>
            <v-btn flat>Link Two</v-btn>
            <v-btn flat>Link Three</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <main>
          <v-content>
            <v-container fluid
            style="min-height: 0;"
            grid-list-lg>
            <!-- アラート -->
            <h3>アラート</h3>
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
            </div>
            <!-- Card -->
            <h3>カード</h3>
            <v-layout row wrap>
              <v-flex xs12>
                <v-card color="primary" class="white--text">
                  <v-card-title primary-title>
                    <div class="headline">Primary Card</div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat dark>Listen now</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <v-flex xs12>
                <v-card color="original1" class="white--text">
                  <v-card-title primary-title>
                    <div class="headline">Original 1</div>
                  </v-card-title>
                  <v-card-text>オリジナルの色名も定義可能</v-card-text>
                  <v-card-actions>
                    <v-btn flat dark>Listen now</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
            <!-- Buttons -->
            <h3>ボタン</h3>
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
            </div>
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
            </div>
          </v-container>
        </v-content>
      </main>
      <v-footer app></v-footer>
    </v-app>
    `
  }))