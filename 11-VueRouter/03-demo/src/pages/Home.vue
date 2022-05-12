<template>
  <h1>Home</h1>

  <router-link to="/home/message" exact-active-class>
    <button>消息</button>
  </router-link>
  <router-link to="/home/good" exact-active-class>商品</router-link>

  <router-view> </router-view>
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
