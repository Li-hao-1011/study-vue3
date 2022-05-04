<template>
  <div>
    <h1>App</h1>
    <!-- <h2>{{ name }} - {{ age }}</h2> -->
    <!-- <h2>{{ fullName }}</h2> -->
    <!-- <h2>{{ fullName1 }}</h2> -->
    <button @click="changeInfo">修改 info</button>
    <!-- <button @click="changeAge">修改 age</button> -->
  </div>
</template>

<script>
import { watch, reactive, isReactive, ref } from "vue";

export default {
  setup() {
    /*  const info = reactive({ name: "kobe", age: 18 });

    watch(info, (newVal, oldVal) => {
      console.log("newValue:", newVal, "oldValue:", oldVal);
    }); */
    const info = reactive({
      name: "kobe",
      age: 18,
      firends: { name: "james" },
    });

    /*     watch(info, (newVal, oldVal) => {
      console.log(newVal, "---", oldVal);
    }); */

    // 深度侦听,首次监听
    watch(
      () => ({ ...info }),
      (newVal, oldVal) => {
        console.log(newVal, "---", oldVal);
      },
      {
        deep: true,
        immediate: true,
      }
    );

    const changeInfo = () => {
      info.firends.name = "ornier";
      // console.log("123", name.value);
      // name.value = "sc";
      // console.log("456", name.value);
    };



    return { changeInfo };
  },
};
</script>

<style lang="scss" scoped></style>
