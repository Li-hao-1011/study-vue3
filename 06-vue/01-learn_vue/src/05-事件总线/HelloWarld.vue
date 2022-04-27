<template>
  <div>
    <h2>123465</h2>
    <h3>{{name}}:{{age}}->{{nameLength}}</h3>
  </div>
</template>
<script>
/* eslint-disable */

import eventbus from './eventbus'

export default {
  name: 'Helloworld',
  inject: ['name', 'age', 'nameLength'],
  data() {
    return {}
  },
  created() {
    eventbus.on('lihhh', (info) => {
      console.log('lihhh', info)
    })
    // 监听所有事件
    eventbus.on('*', (type, info) => {
      console.log('*', type, info)
    })

    // 取消监听
    eventbus.off()
    // 取消所有监听
    eventbus.all.clear()
  },
  methods: {}
}
</script>
<style scoped lang='less'>
</style>