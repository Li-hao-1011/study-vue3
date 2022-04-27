<template>
  <div class="nav-bar">
    <slot></slot>
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>

    <div class="addition">
      <slot :name="name"></slot>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'Mybutton',
  props: ['name'],
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>
<style scoped>
.nav-bar {
  display: flex;
  justify-content: space-between;
}
.nav-bar > div {
  flex: 1;
  height: 30px;
}

.nav-bar > div:first-child {
  background-color: pink;
}

.nav-bar > div:nth-child(3) {
  background-color: skyblue;
}
.addition {
  width: 500px;
  background-color: black;
  color: #fff;
}
</style>