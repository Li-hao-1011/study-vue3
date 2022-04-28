<template>
  <div>NavBar <button @click="getParentCpn">获取父组件 parent</button></div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'NavBar',
  data() {
    return {}
  },
  created() {},
  methods: {
    message() {
      console.log('message')
      return 'awdwadwad'
    },
    getParentCpn() {
      console.log(this.$parent)
      console.log(this.$root)
    }
  }
}
</script>
<style scoped></style>
