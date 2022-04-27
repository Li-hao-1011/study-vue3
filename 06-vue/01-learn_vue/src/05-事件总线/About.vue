<template>
  <div>
    <h1>About</h1>
    <button @click="clickBtn">按钮点击</button>
  </div>
</template>
<script>
/* eslint-disable */

import emitter from './eventbus'

export default {
  name: 'About',
  data() {
    return {}
  },
  created() {},
  methods: {
    clickBtn() {
      emitter.emit('lihhh', { name: 'lhgggggg', age: 18 })
      emitter.emit('kobe', { name: 'kobe', age: 30 })
    }
  }
}
</script>
<style scoped lang='less'>
</style>