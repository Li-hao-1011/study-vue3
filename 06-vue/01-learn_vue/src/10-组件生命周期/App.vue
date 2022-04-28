<template>
  <div>
    <h2 ref="h2">哈哈哈哈</h2>
    <button @click="btnClick">v-if</button>
    <nav-bar v-if="isShow" ref="nav-bar"></nav-bar>
  </div>
</template>
<script>
/* eslint-disable */

import NavBar from './NavBar.vue'

export default {
  name: 'App',
  components: { NavBar },
  data() {
    return { isShow: true }
  },
  created() {},
  methods: {
    btnClick() {
      // console.log(this.$refs.h2)
      // console.log(this.$refs['nav-bar'])
      // console.log(this.$refs['nav-bar'].message())
      this.isShow = !this.isShow
    }
  }
}
</script>
<style scoped lang="less"></style>
