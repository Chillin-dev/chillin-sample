import {storiesOf} from '@storybook/vue'

const stories = storiesOf('Carousel', module)
stories
  .add('Default', () => ({
    template: `
      <div style="margin-top: 50px;">
        <v-carousel>
          <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
        </v-carousel>
      </div>`,
    data () {
      return {
        items: [
          {
            src: 'https://pbs.twimg.com/media/DMlQB-zUMAEIqYl.jpg:large'
          },
          {
            src: 'https://pbs.twimg.com/media/DNDYu5PVAAAQt-1.jpg:large'
          },
          {
            src: 'https://pbs.twimg.com/media/DNDYu5NVAAAQi2J.jpg:large'
          }
        ]
      }
    }
  }))
  .add('Custom delimiter', () => ({
    template: `
      <v-carousel icon="stop">
        <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
      </v-carousel>`,
    data () {
      return {
        items: [
          {
            src: 'https://pbs.twimg.com/media/DMlQB-zUMAEIqYl.jpg:large'
          },
          {
            src: 'https://pbs.twimg.com/media/DNDYu5PVAAAQt-1.jpg:large'
          },
          {
            src: 'https://pbs.twimg.com/media/DNDYu5NVAAAQi2J.jpg:large'
          }
        ]
      }
    }
  }))
  .add('Hide controls', () => ({
    template: `
      <v-carousel hide-controls>
        <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
      </v-carousel>`,
    data () {
      return {
        items: [
          {
            src: 'https://pbs.twimg.com/media/DMlQB-zUMAEIqYl.jpg:large'
          },
          {
            src: 'https://pbs.twimg.com/media/DNDYu5PVAAAQt-1.jpg:large'
          },
          {
            src: 'https://pbs.twimg.com/media/DNDYu5NVAAAQi2J.jpg:large'
          }
        ]
      }
    }
  }))
