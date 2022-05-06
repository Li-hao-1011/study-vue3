<template>
  <div>
    <input type="text" v-focus />
    <button
      v-if="counter < 5"
      v-lhhh:name.abcd.adwd="'lhhh'"
      @click="increment"
    >
      当前计数：{{ counter }}
    </button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  // 局部指令
  directives: {
    focus: {
      mounted(el, binding, vnode, prevNode) {
        el.focus();
        console.log(binding);
      },
    },
    lhhh: {
      created() {
        console.log("lhhh created");
      },
      beforeMount() {
        console.log("lhhh beforeMounte");
      },
      mounted(el, binding, vnode, prevNode) {
        console.log("lhhh mounted");
        console.log(el, vnode, prevNode);
        console.log("值：", binding.value);
        console.log("参数", binding.arg);
        console.log("修饰符", binding.modifiers);
      },
      beforeUpdate() {
        console.log("lhhh beforeUpdate");
      },
      updated() {
        console.log("lhhh updated");
      },
      beforeUnmount() {
        console.log("lhhh beforeUnmount");
      },
      unmounted() {
        console.log("lhhh unmounted");
      },
    },
  },

  setup() {
    const counter = ref(0);
    const increment = () => {
      counter.value++;
    };
    return { counter, increment };
  },
};
</script>

<style lang="scss" scoped></style>
