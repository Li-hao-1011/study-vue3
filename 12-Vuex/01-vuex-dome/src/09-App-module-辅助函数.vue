<template>
  <!-- <home /> -->
  <!-- <h1>
    {{ $store.state.counter }} 
  </h1>-->
  <hr />
  <!--   <h2>root: {{ $store.state.rootCounter }}</h2>
  <h2>home: {{ $store.state.home.homeCounter }}</h2>
  <h2>user: {{ $store.state.user.userCounter }}</h2>
  <hr />
  <button @click="rootIncrement">root++</button>
  <button @click="homeIncrement">home++</button>
  <button @click="homeIncrementActions">home action++</button>
  <hr />
  <h2>{{ $store.getters["home/doubleHomeCounter"] }}</h2> -->
  <hr />
  <!--  <h3>map: {{ _homeCounter }}</h3>
  <h3>map: {{ _doubleHomeCounter }}</h3> -->
  <hr />
  <h3>map: {{ homeCounter }}</h3>
  <h3>map: {{ doubleHomeCounter }}</h3>
  <button @click="increment">home++</button>
  <button @click="incrementAction">homeAction++</button>

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
import {
  /*   mapState,
  mapGetters,
  mapMutations,
  mapActions, */
  createNamespacedHelpers,
} from "vuex";

const {
  mapState: homeMapState,
  mapGetters: homeMapGetters,
  mapMutations: homeMapMutations,
  mapActions: homeMapActions,
} = createNamespacedHelpers("home");

import useState from "./hooks/useState";
import useGettets from "./hooks/useGetters";

export default {
  name: "App",

  setup() {
    const state = useState("home", ["homeCounter"]);
    const getters = useGettets("home", ["doubleHomeCounter"]);

    const mutations = homeMapMutations(["increment"]);
    const actions = homeMapActions(["incrementAction"]);

    return {
      ...mutations,
      ...actions,
      ...state,
      ...getters,
    };
  },

  /*   computed: {
    // 写法一
    ...mapState({
      _homeCounter: (state) => state.home.homeCounter,
    }),
    // ...mapGetters(["home/doubleHomeCounter"]),
    ...mapGetters({
      _doubleHomeCounter: "home/doubleHomeCounter",
    }),

    ...mapState("home", ["homeCounter"]),

    }
  }, */
  /*   computed: {
    // 写法二
    ...mapState("home", ["homeCounter"]),
    ...mapGetters("home", ["doubleHomeCounter"]),
  }, */

  /*   computed: {
    // 写法三
    ...homeMapState(["homeCounter"]),
    ...homeMapGetters(["doubleHomeCounter"]),
  }, */

  /*   methods: {
    // ...mapMutations(["increment"]),
    // ...mapMutations(["incrementAction"]),

    // 写法一
    ...mapMutations({
      homeIncrement: "home/increment",
    }),
    ...mapActions({
      homeIncrementActions: "home/incrementAction",
    }),

    rootIncrement() {
      this.$store.commit("increment");
    },
    homeIncrement() {
      this.$store.commit("home/increment");
    },
    homeIncrementActions() {
      this.$store.dispatch("home/incrementAction");
    },
  }, */

  /*   methods: {
    // 写法二
    ...mapMutations("home", ["increment"]),
    ...mapActions("home", ["incrementAction"]),
  }, */

  /*   methods: {
    // 写法三
    ...homeMapMutations(["increment"]),
    ...homeMapActions(["incrementAction"]),
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
