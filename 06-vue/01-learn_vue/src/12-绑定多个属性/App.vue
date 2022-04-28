<template>
  <div>
    <!-- <input type="text" v-model="msg" /> -->
    <!-- <nav-bar v-model="msg" ></nav-bar> -->

    <!-- 绑定两个 v-model -->
    <nav-bar v-model:msg="msg" v-model:title="title"></nav-bar>

    <h1>{{ msg }}</h1>
    <h1>{{ title }}</h1>
    <!-- <nav-bar :modelValue="msg" @update:module-value="msg = $event"> </nav-bar> -->
  </div>
</template>
<script>
/* eslint-disable */

import NavBar from "./NavBar.vue";

export default {
  name: "App",
  components: { NavBar },
  data() {
    return { msg: "123465",title:'HAHAHHA' };
  },
  created() {},
  methods: {},
};
</script>
<style scoped lang="less"></style>
