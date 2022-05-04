<template>
  <div>
    <h1>App</h1>
    <button @click="counter++">++++</button>
    <h2>{{ counter }}</h2>
  </div>
</template>

<script>
import { ref, onMounted, onUpdated, onUnmounted } from "vue";
export default {
  setup() {
    const counter = ref(0);

    onMounted(() => {
      console.log("App Mounted");
    });
    onUpdated(() => {
      console.log("App Updated");
    });
    onUnmounted(() => {
      console.log("App Unmounted");
    });
    return { counter };
  },
  created() {},
  mounted() {},
  beforeCreate() {},
};
</script>

<style scoped></style>
