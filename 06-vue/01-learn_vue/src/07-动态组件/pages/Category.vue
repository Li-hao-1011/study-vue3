<template>
  <div>
    Category
    <button @click="counter--">{{ counter }}</button>

    <ul>
      <li>{{ name }}</li>
      <li>{{ age }} +888</li>
    </ul>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'Category',
  props: ['name', 'age'],

  data() {
    return { counter: 0 }
  },
  created() {},
  methods: {}
}
</script>
<style scoped lang="less"></style>
