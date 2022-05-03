<template>
  <div>
    <h1 ref="title">App</h1>
    <!-- <h2>{{ name }} - {{ age }}</h2> -->
    <!-- <h2>{{ fullName }}</h2> -->
    <!-- <h2>{{ fullName1 }}</h2> -->
    <!-- <button @click="changeName">修改 name</button> -->
    <!-- <button @click="changeAge">修改 age</button> -->
  </div>
</template>

<script>
import { watchEffect, watch, ref } from "vue";

export default {
  setup() {
    const title = ref(null);

    watchEffect(
      () => {
        console.log(title.value);
      },
      {
        // 执行时机
        // flush: "pre", // 默认为 pre,在元素挂载或者更新之前执行
        flush: "post",
      }
    );
    return { title };
  },
};
</script>

<style lang="scss" scoped></style>
