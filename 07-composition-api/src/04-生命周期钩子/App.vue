<template>
  <div>
    <h1>App</h1>
    <button @click="increment">{{ increment }}</button>
    <h2>{{ increment }}</h2>
    <home></home>
  </div>
</template>

<script>
import { ref, provide, readonly } from "vue";
import Home from "./pages/Home.vue";

export default {
  components: { Home },
  setup() {
    const name = "coder";
    let counter = ref(100);

    provide("name", name);
    provide("counter", readonly(counter));
    // provide("counter", counter.value);

    const increment = () => {
      counter.value++;
    };

    return { increment };
  },
  created() {},
  mounted() {},
  beforeCreate() {},
};
</script>

<style scoped></style>
