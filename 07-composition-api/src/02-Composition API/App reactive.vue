<template>
  <div>
    <home message="HomeMessage by App" id="aaa" class="appClass">
      <template #default> <h2>插槽</h2> </template>
    </home>
  </div>
</template>

<script>
import Home from "./Pages/Home.vue";

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
