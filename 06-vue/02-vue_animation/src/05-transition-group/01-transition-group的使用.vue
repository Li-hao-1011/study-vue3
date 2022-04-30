<template>
  <div>
    <button @click="addNum">添加数组</button>
    <button @click="removeNum">删除数组</button>
    <button @click="shiftNum">数字洗牌</button>
    <ul>
      <transition-group name="fade">
        <li v-for="item in numbers" :key="item">{{ item }}</li>
      </transition-group>
    </ul>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "App",
  data() {
    return {
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      numCounter: 10,
    };
  },
  methods: {
    removeNum() {
      this.numbers.splice(this.rendomIndex(), 1);
      this.numCounter--;
    },
    addNum() {
      // this.numbers.push(this.numCounter++);

      this.numbers.splice(this.rendomIndex(), 0, this.numCounter++);
    },
    rendomIndex() {
      return Math.floor(Math.random() * this.numbers.length);
    },

    shiftNum() {
      this.numbers = _.shuffle(this.numbers)
      return;
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
