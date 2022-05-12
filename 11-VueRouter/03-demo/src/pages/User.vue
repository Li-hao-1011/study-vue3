<template>
  <h3>User: {{ $route.params.username }} - {{ $route.params.id }}</h3>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  name: "User",
  created() {
    // console.log(this.$route.params.username);
    // console.log(this.$route);
  },
  setup() {
    // console.log(useRoute().params.username, useRoute().params.id);
    // console.log(useRoute());
  },
};
</script>

<style scoped></style>
