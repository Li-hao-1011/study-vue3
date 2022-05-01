<template>
  <div>
    Home
    <h2>{{ message }}</h2>
    <h2>{{ message1 }}</h2>
    <button @click="increment">+1</button>
    <h2>当前计数：{{ state.counter }}</h2>
    <slot></slot>
  </div>
</template>

<script>
import { reactive } from "vue";
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
    console.log(props, context);
    console.log(props.message);
    // context.emit();
    console.log(context.attrs.id, context.attrs.class);
    console.log(context.slots);
    console.log(context.emit);

    let counter = 100;

    /* reactive API */
    const state = reactive({
      counter,
    });
    const increment = () => {
      state.counter++;
      console.log("increment", state.counter);
    };

    /* 返回值 */
    return {
      message1: "homeMssage",
      state,
      increment,
    };
  },
};
</script>

<style lang="scss" scoped></style>
