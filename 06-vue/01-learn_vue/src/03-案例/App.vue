<template>
  <div>
    <tab-control
      :title="titles"
      :content="contents"
      @titleIndexClick="contentIndex"
    ></tab-control>
    <h2>{{ contents[totleIndex] }}</h2>
  </div>
</template>

<script>
import TabControl from "./TabControl.vue";
export default {
  components: { TabControl },
  data() {
    return {
      titles: ["衣服", "鞋子", "裤子"],
      contents: ["衣服", "鞋子", "裤子"],
      totleIndex: 0,
    };
  },
  methods: {
    contentIndex(index) {
      this.totleIndex = index;
    },
  },
};
</script>

<style scoped></style>
