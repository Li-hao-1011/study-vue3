<template>
  <div>
    Home
    <h2>{{ message }}</h2>
    <h2>{{ message1 }}</h2>
    <button @click="updataState">+1</button><button @click="sub">-1</button>
    <!-- <h2>当前计数：{{ state.counter }}</h2> -->
    <!-- <h2>当前计数：{{ counter }}</h2> -->
    <slot></slot>
  </div>
</template>

<script>
import { reactive, ref, readonly } from "vue";
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
  setup(props, { attrs, slots, emit, expose }) {
    // console.log(props, context);
    // console.log(props.message);
    // context.emit();
    // console.log(context.attrs.id, context.attrs.class);
    // console.log(context.slots);
    // console.log(context.emit);

    /*     console.log(attrs);
    console.log(slots);
    console.log(emit);
    console.log(expose);
    const count = ref(500);
    expose({
      sub: () => {
        --count.value;
        console.log(count.value);
      },
    }); */

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
    /*
    let counter = ref(100);

    const increment = () => {
      console.log("increment");
      counter.value++;
      console.log(counter.value);
    }; */

    const info = { name: "lhhh" };
    const readonlyInfo = readonly(info);

    const info2 = reactive({ name: "liii" });
    const readonlyInfo2 = readonly(info2);

    const info3 = ref({ name: "info3" });
    const readonlyInfo3 = readonly(info3);

    const updataState = () => {
      // console.log(info);
      // info.name = "why";
      // console.log(info);
      // console.log(readonlyInfo3.value);
      // info3.value.name = "why9999";
      // console.log(info3.value);
      // readonlyInfo.name = "lihhh";
      // readonlyInfo2.name = "why";
      // readonlyInfo3.value.name = "why78945";
      // console.log(readonlyInfo3.value);
    };

    const refB = ref({ address: "aaa" });
    const refA = ref("aaabbb");

    console.log(refB.value);
    console.log(refA.value);

    /* 返回值 */
    return {
      message1: "homeMssage",
      // counter,
      // increment,
      updataState,
      readonlyInfo,
    };
  },
};
</script>

<style scoped></style>
