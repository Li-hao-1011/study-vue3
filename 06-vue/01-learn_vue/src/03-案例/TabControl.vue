<template>
  <div class="tab">
    <div
      :class="{ bgc: count === index }"
      v-for="(item, index) in title"
      :key="index"
      @click="itemClick(index)"
    >
      <span>
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    title: {
      type: Array,
      required: true,
    },
    content: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      count: 0,
    };
  },
  // emit: ["titleIndexClick"],
  emit: {
    // 没有验证函数
    click: null,
    // 带有验证函数
    titleIndexClick: (payload) => {
      console.log(payload, typeof payload);
      if (typeof payload === "number") {
        return true;
      }
      window.console.warn(`Invalid submit event payload!`);
      return false;
    },
  },
  methods: {
    itemClick(index) {
      this.count = index;
      this.$emit("titleIndexClick", "1");
    },
  },
};
</script>

<style scoped>
.tab {
  display: flex;
  justify-content: space-between;
  color: brown;
  font-size: 24px;
}
.tab > div {
  flex: 1;
  text-align: center;
}
.tab > div > span {
  border-bottom: 5px solid red;
}
.bgc {
  background-color: pink;
  color: skyblue;
}
</style>
