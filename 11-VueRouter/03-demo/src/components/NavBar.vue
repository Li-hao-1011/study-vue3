<template>
  <h2>{{ title }}</h2>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style scoped></style>
