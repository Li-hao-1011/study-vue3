<template>
  <home />
  <h1>
    {{ $store.state.counter }}
  </h1>
  <button @click="pushOne">+1</button>
  <button @click="subOne">-1</button>
  <about />
</template>

<script>
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";

export default {
  name: "App",
  components: { Home, About },
  data() {
    return {};
  },
  methods: {
    pushOne() {
      this.$store.commit("increment");
    },
    subOne() {
      this.$store.commit("deincrement");
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
</style>
