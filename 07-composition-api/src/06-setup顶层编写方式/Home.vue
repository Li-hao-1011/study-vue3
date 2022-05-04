<template>
  <div>Home</div>
  <p>{{ message }}</p>
  <button @click="emitEvent">发射事件</button>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  message: {
    type: String,
    default: "哈哈哈",
  },
});
const emit = defineEmits(["increment", "decrement"]);

const emitEvent = () => {
  emit("increment", "使用 defineEmits 发射事件");
};
</script>

<style scoped></style>
