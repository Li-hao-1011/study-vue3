<template>
  <div>
    <!-- 实现数字滚动 -->
    <input type="number" step="100" v-model="counter" />
    <h2>计数：{{ showCounted }}</h2>
  </div>
</template>

<script>
import gasp from "gsap";

export default {
  name: "App",
  data() {
    return {
      counter: 100,
      showNumber: 0,
    };
  },
  computed: {
    showCounted() {
      return this.showNumber.toFixed(2);
    },
  },
  watch: {
    counter: {
      handler(val) {
        gasp.to(this, {
          direction: 1,
          showNumber: val,
        });
      },
      immediate: true,
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.box {
  height: 300px;
}
</style>
