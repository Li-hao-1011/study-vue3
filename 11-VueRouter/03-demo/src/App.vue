<template>
  <h1>App</h1>
  <!-- <button @click="jumpToHome">首页</button> -->
  <button @click="jumpToAbout">关于</button>
  <button @click="jumpToHomeGood">首页-商品</button>
  <router-link to="/home" active-class="asctive">首页</router-link>
  <router-link to="/about" active-class="asctive">关于</router-link>
  <router-link to="/user/lhhhhhh/id/123" active-class="asctive"
    >用户</router-link
  >

  <h1>
    <router-view></router-view>
  </h1>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "App",
  methods: {
    jumpToHome() {},
    /*  jumpToAbout() {
      this.$router.push("/about");
    }, */
    jumpToHomeGood() {},
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
</style>
