<template>
  <div @click="divClick">
    Home
    <ul>
      <li>{{ name }}</li>
      <li>{{ age }} *888</li>
    </ul>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'Home',
  props: ['name', 'age'],
  emit: ['pageClick'],
  data() {
    return {}
  },
  created() {},
  methods: {
    divClick() {
      this.$emit('pageClick')
    }
  }
}
</script>
<style scoped lang="less"></style>
