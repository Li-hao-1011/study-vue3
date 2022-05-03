<template>
  <div>
    <h1>App</h1>
    <h2>{{ name }} - {{ age }}</h2>
    <!-- <h2>{{ fullName }}</h2> -->
    <!-- <h2>{{ fullName1 }}</h2> -->
    <button @click="changeName">修改 name</button>
    <button @click="changeAge">修改 age</button>
  </div>
</template>

<script>
import { watchEffect, watch, ref } from "vue";

export default {
  setup() {
    // watchEffect：自动收集响应式依赖
    const name = ref("llhhh");
    const age = ref(18);

    // watchEffect传入的函数会被立即执行一次，并且在执行的过程中会收集依赖；
    // 只有收集的依赖发生变化时，watchEffect传入的函数才会再次执行；
    const stopEffeect = watchEffect((onInvalidate) => {
      // 清除副作用
      onInvalidate(() => {
        // ...
      });

      console.log("name:", name.value, "===", "age:", age.value);
    });

    const changeName = () => {
      name.value = "kobe";
    };
    const changeAge = () => {
      age.value++;
      if (age.value === 25) {
        // 停止侦听
        stopEffeect();
      }
    };

    return { name, age, changeAge, changeName };
  },
};
</script>

<style lang="scss" scoped></style>
