<template>
  <div>
    About
    <button @click="counter++">{{ counter }}</button>
    <ul>
      <li>{{ name }}</li>
      <li>{{ age }} -888</li>
    </ul>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'About',
  props: ['name', 'age'],

  data() {
    return { counter: 1 }
  },
  created() {},
  methods: {},
  activated() {
    console.log('about', 'activated')
  },
  deactivated() {
    console.log('about', 'deactivated')
  }
}
</script>
<style scoped lang="less"></style>
