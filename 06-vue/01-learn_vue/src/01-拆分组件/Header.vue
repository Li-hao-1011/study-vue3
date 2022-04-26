<template>
  <h2 :class="$attrs.class">{{ title }}</h2>
  <h2 :id="$attrs.id">{{ content }}</h2>
</template>

<script>
export default {
  name: "Header",
  props: ["title", "content"],
  // props: {},
  created() {
    console.log(this.$attrs);
    console.log(this.$attrs.class);
    console.log(this.$attrs.id);
  },
};
</script>

<style scoped></style>
