<template>
  <div>
    <button @click="toggle">显示/隐藏</button>

    <!-- <div class="box">
      <transition name="fade" type="animation" appear="true" :duration="1000">
        <h2 v-if="showToggle">Hello Vue3</h2>
      </transition>
    </div> -->

    <div class="box">
      <transition
        appear="true"
        enter-active-class="animate__animated animate__slideInDown"
        leave-active-class="animate__animated animate__zoomOut"
      >
        <h2 v-if="showToggle">Hello Vue3</h2>
      </transition>
    </div>

    <div class="box">
      <transition
        appear="true"
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        :css="false"
      >
        <h2 v-if="showToggle">Hello World</h2>
      </transition>
    </div>

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

    <!-- 动态组件 -->
    <transition name="fade" mode="out-in">
      <component :is="showToggle ? 'Home' : 'About'"></component>
    </transition>
  </div>
</template>

<script>
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import gasp from "gsap";

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
    beforeEnter() {
      console.log("beforeEnter");
    },
    enter(el, done) {
      console.log("enter");
      // 进入动画
      gasp.from(el, {
        scale: 0,
        x: 200,
        duration: 0.5,
        onComplete: done,
      });
    },
    afterEnter() {
      console.log("afterEnter");
    },
    beforeLeave() {
      console.log("beforeLeave");
    },
    leave(el, done) {
      console.log("leave");
      // 离开动画
      gasp.to(el, {
        scale: 0,
        x: -200,
        onComplete: done,
      });
    },
    afterLeave() {
      console.log("afterLeave");
    },
  },
};
</script>

<style>
/* 动画样式 */

/* .lhhh-enter-active {
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
 */

.fade-enter-active {
  animation: zoomInDown 0.5s ease-out;
}
.fade-leave-active {
  animation: zoomInDown 0.5s ease-out reverse;
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
