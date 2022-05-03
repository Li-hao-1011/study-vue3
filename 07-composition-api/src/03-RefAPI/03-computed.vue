<template>
  <div>
    <h1>App</h1>
    <h2>{{ firstName }} {{ lastName }}</h2>
    <h2>{{ fullName }}</h2>
    <h2>{{ fullName1 }}</h2>
    <button @click="changeName">修改firstName</button>
  </div>
</template>

<script>
import { computed, ref, reactive, toRefs, toRef } from "vue";

export default {
  setup() {
    const firstName = ref("Kobe");
    const lastName = ref("Bryant");

    // 计算属性，传入 getter函数
    const fullName = computed(() => firstName.value + lastName.value);

    // 计算属性，传入对象，包含getter\setter
    const fullName1 = computed({
      get() {
        firstName.value + lastName.value;
      },
      set(newValue) {
        const names = newValue.split(" ");
        firstName.value = names[0];
        lastName.value = names[1];
      },
    });

    // 计算属性返回一个 ref对象

    const changeName = () => {
      fullName1.value = "jimi btl";
    };

    return { firstName, fullName1, lastName, fullName, changeName };
  },
};
</script>

<style lang="scss" scoped></style>
