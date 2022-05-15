<template>
  <div>
    <button @click="changeMessage">更改message</button>
    <hr />
    <h1 ref="titleRef" class="title">{{ message }}</h1>
  </div>
</template>

<script>
import { ref, onUpdated, nextTick } from "vue";
export default {
  name: "NextTick",
  setup(props) {
    const message = ref("");
    const titleRef = ref(null);

    const changeMessage = () => {
      message.value += "嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿";

      nextTick(() => {
        console.log(titleRef.value.offsetHeight);
      });
    };

    // onUpdated(() => {
      // console.log(titleRef.value.offsetHeight);
    // });
    return { message, changeMessage, titleRef };
  },
};
</script>
<style>
.title {
  width: 180px;
}
</style>
