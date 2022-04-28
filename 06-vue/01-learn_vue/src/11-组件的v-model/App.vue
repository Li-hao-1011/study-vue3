<template>
  <div>
    <!-- <input type="text" v-model="msg" /> -->
    <nav-bar v-model="msg"></nav-bar>
    <h1>{{ msg }}</h1>
    <!-- <nav-bar :modelValue="msg" @update:module-value="msg = $event"> </nav-bar> -->
  </div>
</template>
<script>
/* eslint-disable */

import NavBar from './NavBar.vue'

export default {
  name: 'App',
  components: { NavBar },
  data() {
    return { msg: '123465' }
  },
  created() {},
  methods: {}
}
</script>
<style scoped lang="less"></style>
