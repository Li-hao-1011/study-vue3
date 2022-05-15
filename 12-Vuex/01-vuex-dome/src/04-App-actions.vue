<template>
  <home />
  <hr />
  <h1>
    {{ $store.state.counter }}
  </h1>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
  <!-- <button @click="pushOne">+1</button> -->
  <!-- <button @click="subOne">-1</button> -->
  <!-- <button @click="incrementN({ n: 10 })">+10</button> -->
  <!-- <button @click="push100({ n: 100 })">+100</button> -->
  <about />
</template>

<script>
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import { INCREMENT_N } from "./store/mutations-types";
import { mapMutations } from "vuex";

export default {
  name: "App",
  components: { Home, About },
  methods: {
    increment() {
      this.$store.dispatch("incrementAction", { name: "lhhh" });
    },
    decrement() {
      this.$store.dispatch({
        type: "deincrementAction",
        name: "123456",
      });
    },
  },

  /*   methods: {
    pushOne() {
      this.$store.commit("increment");
    },
    subOne() {
      this.$store.commit("deincrement");
    },

    push10() {
      // this.$store.commit("incrementN", { n: 10 });
      // 另一种提交风格
      this.$store.commit({ type: INCREMENT_N, n: 10 });
    },
    push100() {
      this.$store.commit("incrementN", { n: 100 });
    },
  }, */
  /*   methods: {
    ...mapMutations([INCREMENT_N]),
    ...mapMutations({
      pushOne: "increment",
      subOne: "deincrement",
      push100: INCREMENT_N,
    }),
  }, */

  /*   setup() {
    const storeMutations = mapMutations([
      "increment",
      "deincrement",
      INCREMENT_N,
    ]);


    return {
      ...storeMutations
    }
  }, */
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
</style>
