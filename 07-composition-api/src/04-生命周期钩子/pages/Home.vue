<template>
  <div>
    <h1>{{ counter }} - {{ name }}</h1>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  name: "Home",
  setup() {
    const counter = inject("counter");
    const name = inject("name");

    console.log(counter, name);
    return { counter, name };
  },
};
</script>

<style lang="scss" scoped></style>
