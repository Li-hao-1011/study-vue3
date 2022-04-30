<template>
  <div>
    <button @click="toggle">显示/隐藏</button>

    <transition name="fade" appear="true">
      <h2 v-if="showToggle">Hello Vue3</h2>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      showToggle: true,
    };
  },
  methods: {
    toggle() {
      this.showToggle = !this.showToggle;
    },
  },
};
</script>

<style>

/* 动画样式 */

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;;
} 

</style>

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