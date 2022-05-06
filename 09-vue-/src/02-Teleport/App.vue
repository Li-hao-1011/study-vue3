<template>
  <div class="counter">
    <teleport to="#lhhh">
      <h2>当前：{{}}</h2>
      <button>+1</button>
    </teleport>

    <teleport to="body">
      <home />
    </teleport>
  </div>
</template>

<script>
import { getCurrentInstance } from "vue";
import Home from "./Home.vue";
export default {
  components: { Home },
  mounted() {
    console.log(this.$name, "config.globalProperties.$name");
  },

  setup() {
    const instance = getCurrentInstance();

    console.log(instance.appContext.config.globalProperties.$name);
  },
};
</script>

<style scoped></style>
