<template>
  <div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <h1>{{ counter }}</h1>
    <h1>{{ doubleCounter }}</h1>
    <button @click="storageClick">保存数据</button>
    <h3>{{ localData }}</h3>
    <p class="content"></p>

    <div class="scroll">
      <div class="scrollX">scrollX: {{ scrollX }}</div>
      <div class="scrollY">scrollY: {{ scrollY }}</div>

      <div class="scrollX">mouse: {{ mouseX }}</div>
      <div class="scrollY">mouse: {{ mouseY }}</div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  useCounter,
  useTitle,
  useScrollPosition,
  useMousePosition,
  useLocalStorage,
} from "./hooks/index";

export default {
  setup() {
    // 计数器，抽取一个 hook
    const { counter, doubleCounter, increment, decrement } = useCounter();

    // title
    const titleRef = useTitle("lhhhhhhhhhh");
    setTimeout(() => {
      titleRef.value = "sc";
    }, 1000);

    // 滚动位置
    const { scrollX, scrollY } = useScrollPosition();

    // 鼠标位置
    const { mouseX, mouseY } = useMousePosition();

    // const localData = useLocalStorage("info", { name: "lhhhhhhh", age: 18 });

    const localData = useLocalStorage("info");

    const storageClick = () => {};
    return {
      mouseX,
      mouseY,
      scrollX,
      scrollY,
      counter,
      doubleCounter,
      increment,
      decrement,
      storageClick,
      localData,
    };
  },
};
</script>

<style scoped>
.content {
  width: 3000px;
  height: 5000px;
}
.scroll {
  position: fixed;
  right: 30px;
  bottom: 30px;
}

/* .scrollY {
}
.scrollX {
} */
</style>
