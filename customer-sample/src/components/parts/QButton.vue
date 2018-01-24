<template>
  <v-btn @click="onclick" :color="color" :flat="flat||false" :disabled="disabled||false">
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  name: 'QButton',
  props: {
    color: {
      type: String,
      default: ''
    },
    flat: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
    // text: {
    //   type: String
    // },
    // kind: {
    //   type: String
    // },
    // ghost: {
    //   default: false
    // },
    // size: {
    //   type: String
    // },
    // disabled: {
    //   type: Boolean,
    //   default: false,
    // }
  },
  methods: {
    onclick(e) {
      this.$emit("click", e);
    }
  }
}
</script>
