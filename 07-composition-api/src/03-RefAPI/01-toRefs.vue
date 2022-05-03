<template>
  <div>
    <h1>App</h1>
    <h2>{{ info.name }}-{{ info.age }}</h2>
    <h2>{{ name }}-{{ age }}</h2>
    <h2>{{ age1 }}</h2>
    <button @click="changeAge">修改age</button>
  </div>
</template>

<script>
import { reactive, toRefs, toRef } from "vue";

export default {
  setup() {
    const info = reactive({ name: "lhhhhhhhh", age: 18 });

    let { name, age } = toRefs(info);

    let age1 = toRef(info, "age");

    const changeAge = () => {
      info.age += 1;
      console.log(info, age.value);
      age.value++;
    };

    return { info, name, age, age1, changeAge };
  },
};
</script>

<style lang="scss" scoped></style>
