<template>
  <div>Home</div>
  <ul>
    <li>1</li>
    <li>12</li>
    <li>123</li>
  </ul>

  <router-link to="/home/message" exact-active-class>消息</router-link>
  <router-link to="/home/good" exact-active-class>商品</router-link>

  <router-view />
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.router-link-exact-active {
  /* background-color: #000; */
  color: blue;
}
</style>
