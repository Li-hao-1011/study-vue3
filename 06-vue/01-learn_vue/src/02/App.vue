<template>
  <div>
    <h2>当前计数为：{{ count }}</h2>
    <hello-world
      @add="count += 1"
      @sub="count -= 1"
      @addN="incrementN"
    ></hello-world>
  </div>
</template>

<script>
import HelloWorld from "./HelloWorld.vue";
export default {
  name: "App",
  components: { HelloWorld },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    incrementN(num, name, age) {
      this.count += num;
      console.log(num, name, age);
    },
  },
};
</script>

<style lang="scss" scoped></style>
