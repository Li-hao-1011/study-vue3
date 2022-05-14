<template>
  <h2>Home: {{ $store.state.counter }}</h2>
  <h2>Home2: {{ counter }}</h2>
  <h2>Home2: {{ name }}</h2>
  <h2>Home3: {{ sCounter }}</h2>
  <h2>Home3: {{ sName }}</h2>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",
  computed: {
    fullName() {
      return "sc";
    },
    // 计算属性 mapState 数组
    ...mapState(["counter", "name"]),
    ...mapState({
      sCounter: (state) => state.counter,
      sName: (state) => state.name,
    }),
  },
};
</script>

<style lang="scss" scoped></style>
