<template>
  <div>
    Home
    <h2>{{ message }}</h2>
    <h2>{{ message1 }}</h2>
    <button @click="increment">+1</button>
    <!-- <h2>当前计数：{{ state.counter }}</h2> -->
    <h2>当前计数：{{ counter }}</h2>
    <slot></slot>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },

  /* setup中不能使用this */
  /*
    context的属性
                  attrs
                  slots
                  emit
  */
  setup(props, context) {
    // console.log(props, context);
    // console.log(props.message);
    // context.emit();
    // console.log(context.attrs.id, context.attrs.class);
    // console.log(context.slots);
    // console.log(context.emit);

    /* reactive API */
    // reactive 必须传入一个 对象或者数组
    /*   
    // let counter = 100;
    const state = reactive({
      counter,
    });
    const increment = () => {
      console.log("increment");
      state.counter++;
      console.log(state.counter);
    };
    */

    /* ref API */
    // ref中传入基本数据类型
    // ref 返回一个可变的响应式对象
    // 模板（template）中使用ref的值时，Vue会自动解包
    // setup内部使用时，通过 ref.value 的方式使用
    let counter = ref(100);

    const increment = () => {
      console.log("increment");
      counter.value++;
      console.log(counter.value);
    };

    /* 返回值 */
    return {
      message1: "homeMssage",
      counter,
      increment,
    };
  },
};
</script>

<style scoped></style>
