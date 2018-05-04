/* eslint no-console:0 */

// import TurbolinksAdapter  from 'vue-turbolinks'
import Vue from "vue/dist/vue.esm"
import Component from "vue-class-component"

import Sample from "../components/Sample.vue"

import VueMq from "vue-mq"

Vue.use(VueMq, {
  breakpoints: {
    sm: 450,
    md: 1250,
    lg: Infinity,
  }
})

Vue.component("sample", Sample)

// document.addEventListener('turbolinks:load', () => {
document.addEventListener("DOMContentLoaded", () => {
  // tslint:disable-next-line:no-unused-expression
  new Vue({
    el: "#application"
  })
})
