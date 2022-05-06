<template>
  <div>
    <h1 v-format-time="'YYYY/MM/DD'">{{ timer }}</h1>
    <h1 v-format-time>{{ timer }}</h1>
    <h1 v-format-time="''">{{ timer }}</h1>
  </div>
</template>

<script>
import {} from "vue";

export default {
  // 局部指令
  directives: {},

  setup() {
    const timer = 1651843147153;
    return { timer };
  },
};
</script>

<style lang="scss" scoped></style>
