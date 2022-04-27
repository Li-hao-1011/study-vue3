<template>
  <div>
    <h2>组件开始</h2>
    <slot>
      <h1>默认的插槽</h1>
    </slot>
    <h2>组件结束</h2>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'MySlotCpn',
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>
<style scoped >
</style>