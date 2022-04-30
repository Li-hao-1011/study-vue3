<template>
  <div>
    <input type="text" v-model="keyword" />
    <ul>
      <transition-group
        tag="ul"
        :css="false"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
      >
        <li v-for="(item, index) in showName" :key="item" :data-index="index">
          {{ item }}
        </li>
      </transition-group>
    </ul>
  </div>
</template>

<script>
import _ from "lodash";
import gsap from "gsap";

export default {
  name: "App",
  data() {
    return {
      names: ["abx", "cba", "kd", "kt", "sc", "lb"],
      keyword: "",
    };
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.heighe = 0;
    },
    enter(el, done) {
      gsap.to(el, {
        opacity: 1,
        height: "1.5em",
        delay: el.dataset.index * 0.2,
        onComplete: done,
      });
    },
    leave(el, done) {
      gsap.to(el, {
        opacity: 0,
        height: 0,
        delay: el.dataset.index * 0.2,
        onComplete: done,
      });
    },
  },
  computed: {
    showName() {
      return this.names.filter((item) => item.indexOf(this.keyword) !== -1);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* margin-top: 60px; */
  margin: 60px auto;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.fade-leave-active,
.fade-enter-active {
  transition: all 1s ease;
  /* opacity: 1; */
  /* transform: translateX(30px); */
}
.fade-leave-active {
  position: absolute;
}

.fade-move {
  transition: transfrom 2s ease;
}
</style>
