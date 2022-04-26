<template>
  <!-- <div> 
    <h2>{{ title }}</h2>
    <h2>{{ content }}</h2>
 </div> -->

  <!-- <div> -->

    <h2 :class="$attrs.class">{{ title }}</h2>
    <h2 :class="$attrs.class1">{{ content }}</h2>

  <!-- </div> -->
</template>

<script>
export default {
  // inheritAttrs: false,
  name: "Footer",
  props: {
    title: String,
    content: {
      type: String,
      required: true,
      default: "456798",
    },
  },
};
</script>

<style lang="scss" scoped></style>
