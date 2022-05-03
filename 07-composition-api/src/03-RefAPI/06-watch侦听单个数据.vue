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
import { watch, reactive, ref } from "vue";

export default {
  setup() {
    /*  const info = reactive({ name: "kobe", age: 18 });

    watch(info, (newVal, oldVal) => {
      console.log("newValue:", newVal, "oldValue:", oldVal);
    }); */
    const info = reactive({ name: "kobe", age: 18 });

    // 侦听watch时传入getter函数，【传入 reactive 】
    watch(
      () => info.name,
      (newVal, oldVal) => {
        console.log("newValue:", newVal, "oldValue:", oldVal);
      }
    );

    // 侦听watch时传入getter函数，将reactive变为普通对象
    watch(
      () => ({ ...info }),
      (newVal, oldVal) => {
        console.log("newValue:", newVal, "oldValue:", oldVal);
      }
    );

    // 侦听watch时传入 可响应对象 ref
    let name = ref("kd");
    watch(name, (newVal, oldVal) => {
      console.log(newVal, "-+++-", oldVal);
    });

    const changeInfo = () => {
      // info.name = "james";
      // console.log("123", name.value);
      name.value = "sc";
      // console.log("456", name.value);
    };

    return { changeInfo };
  },
};
</script>

<style lang="scss" scoped></style>
