<template>
  <div>
    <h1>App</h1>
    <input type="text" v-model="message" />
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
import { ref, reactive, toRefs, toRef } from "vue";
import debounceRef from "./hook/userDebounceRef";

export default {
  setup() {
    // const message = ref("Hello World");
    const message = debounceRef("Hello World");
    return { message };
  },
};
</script>

<style lang="scss" scoped></style>
