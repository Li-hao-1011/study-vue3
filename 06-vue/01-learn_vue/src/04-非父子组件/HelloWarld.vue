<template>
  <div>
    <h2>123465</h2>
    <h3>{{name}}:{{age}}->{{nameLength}}</h3>
  </div>
</template>
<script>
/* eslint-disable */
console.log(this)
export default {
  name: 'Helloworld',
  inject: ['name', 'age', 'nameLength'],
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>
<style scoped lang='less'>
</style>