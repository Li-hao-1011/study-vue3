<template>
  <div>{{ msg }} <button @click="getParentCpn">获取父组件 parent</button></div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'NavBar',
  data() {
    return { msg: '123' }
  },
  beforeCreate() {
    console.log('NavBar', 'beforeCreate')
  },
  created() {
    console.log('NavBar', 'created')
  },
  beforeMount() {
    console.log('NavBar', 'beforeMount')
  },
  mounted() {
    console.log('NavBar', 'mounted')
  },
  beforeUpdate() {
    console.log('改变 msg 前', this.msg)

    console.log('NavBar', 'beforeUpdate')
  },
  updated() {
    console.log('改变 msg 后', this.msg)

    console.log('NavBar', 'updated')
  },
  beforeUnmount() {
    console.log('NavBar', 'beforeUnmount')
  },
  unmounted() {
    console.log('NavBar', 'unmounted')
  },
  methods: {
    getParentCpn() {
      this.msg = '456'
    }
  }
}
</script>
<style scoped></style>
