<template>
  <div>
    <template
      v-for="(item,index) in names"
      :key="item"
    >
      <!-- name="lhhh" -->
      <slot
        :item="item"
        :index="index"
      > </slot>
    </template>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'ShowName',
  props: ['names'],
  data() {
    return {}
  },
  created() {
    console.log(this.names)
  },
  methods: {}
}
</script>
<style scoped lang='less'>
</style>