<template>
  <button @click="invrement">+{{ counter }}</button>
  <div>{{ counter }}</div>

  <home @increment="getEmit" :message="counter.toString()" />
</template>

<script setup>
import { ref } from "vue";
import Home from "./Home.vue";

const counter = ref(0);
const invrement = () => {
  counter.value++;
};
// return { counter };

const getEmit = (str) => {
  console.log(str);
};
</script>

<style lang="scss" scoped></style>
