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
    return { title: "Hello App", message: "App Message" };
  },
  mixins: [demoMixin],
  methods: {
    foo() {
      console.log("App foo");
    },
  },
  created() {
    console.log("App create ");
  },
};
</script>

<style></style>
