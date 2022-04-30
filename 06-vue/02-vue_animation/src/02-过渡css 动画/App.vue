<template>
  <div>
    <button @click="toggle">显示/隐藏</button>

    <!-- <div class="box">
      <transition name="fade" type="animation" appear="true" :duration="1000">
        <h2 v-if="showToggle">Hello Vue3</h2>
      </transition>
    </div> -->

    <!-- <div class="box">
      <transition
        name="lhhh"
        appear="true"
        :duration="{ enter: 1000, leave: 2000 }"
      >
        <h2 v-if="showToggle">Hello Vue3</h2>
      </transition>
    </div> -->

    <!--  <div class="box">
      <transition name="lhhh" appear="true" mode="out-in">
        <h2 v-if="showToggle">Hello Vue3</h2>
        <h2 v-else>你好</h2>
      </transition> 
       <transition name="lhhh" appear="true" mode="in-out">
        <h2 v-if="showToggle">Hello Vue3</h2>
        <h2 v-else>你好</h2>
      </transition> 
    </div>-->

    <transition name="fade" mode="out-in">
      <component :is="showToggle ? 'Home' : 'About'"></component>
    </transition>
  </div>
</template>

<script>
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";

export default {
  name: "App",
  components: { Home, About },
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

.lhhh-enter-active {
  animation: fadeFrams 1s ease;
}

.lhhh-leave-active {
  animation: fadeFrams 2s ease reverse;
}

.fade-enter-active {
  animation: fadeFrams 1s ease;
}

.fade-leave-active {
  animation: fadeFrams 1s ease reverse;
}

/* 帧动画 */
@keyframes fadeFrams {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.5);
  }

  100% {
    transform: calc(1);
  }
}

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
  transition: opacity 1s ease;
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
.box {
  height: 300px;
}
</style>
