<template>
  <div>
    <input type="text" v-focus />
  </div>
</template>

<script>
import {} from "vue";

export default {
  // 局部指令
   directives: {
    focus: {
      mounted(el, binding, vnode, prevNode) {
        console.log("input");
        el.focus();
      },
    },
  }, 
};
</script>

<style lang="scss" scoped></style>
