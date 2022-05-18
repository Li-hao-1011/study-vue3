<template>
  <h1>App</h1>
  <!-- <button @click="jumpToHome">首页</button> -->
  <button @click="jumpToAbout">关于</button>
  <button @click="jumpToHomeGood">首页-商品</button>

  <router-link to="/home" custom active-class="asctive" v-slot="props">
    <!-- <nav-bar :title="props.href" /> -->
    <button @click="props.navigate">哈哈哈</button>
    <span>{{ props.isActive }}</span>
  </router-link>
  <router-link to="/about" active-class="asctive">关于</router-link>
  <router-link to="/user/lhhhhhh/id/123" active-class="asctive"
    >用户</router-link
  >

  <router-view v-slot="props">
    <transition name="lhhh">
      <keep-alive>
      <component :is="props.Component"></component>
      </keep-alive>
    </transition>
  </router-view>
</template>

<script>
import { useRouter } from "vue-router";

import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  components: { NavBar },
  methods: {
    jumpToHome() {},
    /*  jumpToAbout() {
      this.$router.push("/about");
    }, */
    jumpToHomeGood() {
      this.$router.push("/home");
    },
  },
  setup() {
    const router = useRouter();

    const jumpToAbout = () => {
      // const router = useRouter();

      // router.push("/about");
      router.push({ path: "/about", query: { name: "lhhhh", age: 18 } });
    };

    return { jumpToAbout };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}

.asctive {
  color: pink;
}

.lhhh-enter-from,
.lhhh-leave-to {
  opacity: 0;
}
.lhhh-leave-active,
.lhhh-enter-active {
  transition: opacity 1s ease-in;
}
</style>
