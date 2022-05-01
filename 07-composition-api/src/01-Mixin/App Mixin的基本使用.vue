<template>
  <div>
    <h2>{{ message }}</h2>
    <h4>{{ title }}</h4>
    <button @click="foo">按钮</button>
  </div>
</template>

<script>
import { demoMixin } from "./mixins/demoMixin";

export default {
  name: "App",
  data() {
    return { title: "Hello App" };
  },
  mixins: [demoMixin],
};
</script>

<style></style>
