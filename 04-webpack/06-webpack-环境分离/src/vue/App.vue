<template>
  <h2>Vue3</h2>
  <h3>Vue3</h3>
  <h4>{{ title }}</h4>
  <h5>使用 SFC 文件 .vue</h5>
  <hello-world></hello-world>
  <nav-bar></nav-bar>
</template>

<script>
import HelloWorld from "./HelloWorld.vue";
import NavBar from "./NavBar.vue";
export default {
  components: { HelloWorld, NavBar },
  data() {
    return {
      title: "手动下载Vue3",
    };
  },
};
</script>

<style>
h2 {
  color: pink;
}
</style>
