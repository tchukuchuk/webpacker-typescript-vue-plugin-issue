<template>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"
import { Prop } from "vue-property-decorator"

// it works with :

/*
import VueMq from "vue-mq"

Vue.use(VueMq, {
  breakpoints: {
    sm: 450,
    md: 1250,
    lg: Infinity,
  }
})
*/

@Component({})
export default class Sample extends Vue {
  $mq: string

  mounted() {
    // this.$mq must be different than undefined
    console.log("this.$mq=", this.$mq)
  }
}
</script>
