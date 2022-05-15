<template>
  <!-- <home /> -->
  <!-- <h1>
    {{ $store.state.counter }} 
  </h1>-->
  <hr />
  <h2>root: {{ $store.state.rootCounter }}</h2>
  <h2>home: {{ $store.state.home.homeCounter }}</h2>
  <h2>user: {{ $store.state.user.userCounter }}</h2>
  <hr />
  <button @click="rootIncrement">root++</button>
  <button @click="homeIncrement">home++</button>
  <button @click="homeIncrementActions">home action++</button>
  <hr />
  <h2>{{ $store.getters["home/doubleHomeCounter"] }}</h2>

  <!-- <button @click="incrementAction">+1</button> -->
  <!-- <button @click="deincrementAction">-1</button> -->

  <!-- <button @click="increment">+1</button> -->
  <!-- <button @click="decrement">-1</button> -->
  <!-- <button @click="pushOne">+1</button> -->
  <!-- <button @click="subOne">-1</button> -->
  <!-- <button @click="incrementN({ n: 10 })">+10</button> -->
  <!-- <button @click="push100({ n: 100 })">+100</button> -->
  <!-- <about /> -->
</template>

<script>
import { useStore } from "vuex";
import { onMounted } from "vue";

export default {
  name: "App",
  methods: {
    rootIncrement() {
      this.$store.commit("increment");
    },
    homeIncrement() {
      this.$store.commit("home/increment");
    },
    homeIncrementActions() {
      this.$store.dispatch("home/incrementAction");
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
