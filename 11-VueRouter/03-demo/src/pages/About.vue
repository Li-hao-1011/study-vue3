<template>
  <h2>About</h2>
  <input type="text" v-model="result" />
  <h3>{{ $route.query.name }} - {{ $route.query.age }}</h3>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      result: "dawwwcasc",
    };
  },
};
</script>

<style lang="scss" scoped></style>
