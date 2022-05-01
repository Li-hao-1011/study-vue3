<template>
  <div>
    <home message="HomeMessage in App" id="aaa" class="appClass">
      <template #default> <h2>插槽</h2> </template>
    </home>
  </div>
</template>

<script>
// import Home from "./Pages/Home.vue";
// import Home from "./Pages/Home Ref API";
import Home from "./Pages/Home readonly";

export default {
  components: { Home },
  /* 
    setup 参数
          返回值
  */
  setup() {},
};
</script>

<style lang="scss" scoped></style>
