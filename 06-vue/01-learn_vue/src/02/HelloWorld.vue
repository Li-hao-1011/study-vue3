<template>
  <h1>Hello World</h1>
  <button @click="add">+1</button>
  <button @click="sub">-1</button>
  <button @click="addN">+n</button>
  <input type="text" v-model="num" />
</template>

<script>
export default {
  name: "HelloWorld",
  // emit: ["add", "sub", "addN"],
  emit: {
    add: null,
    sub: null,
    addN: (num, name, age) => {
      console.log(num, name, age);
      if (num > 10) {
        return true;
      }
      return false;
    },
  },
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    add() {
      console.log("+1");
      this.$emit("add");
    },
    sub() {
      console.log("+1");
      this.$emit("sub");
    },
    addN() {
      this.$emit("addN", this.num, "why", 18);
    },
  },
};
</script>

<style scoped></style>
