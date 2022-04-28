<template>
  <div>
    <!-- <button @click="btnClick">NavBar</button>
     <ul>
      <li>NavBar: {{ modelValue }}</li>
    </ul> -->

    <!-- 绑定不同是事件 -->
    <!-- <input type="text" :value="modelValue" @input="btnClick" /> -->

    <!-- 使用 computed 在 v-model中实现 -->
    <!-- <input type="text" v-model="parentValue" /> -->

    <!-- 绑定两个 v-model -->
    <label for="parentValue">
      parentValue:
      <input id="parentValue" type="text" v-model="parentValue"
    /></label>

    <label for="title">
      title:
      <input id="title" type="text" v-model="parentTitle"
    /></label>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "NavBar",
  data() {
    return {  };
  },
  props: ["msg", "title"],
  emits: ["update:msg", "updata:title"],
  computed: {
    parentValue: {
      get() {
        return this.msg;
      },
      set(val) {
        this.$emit("update:msg", val);
      },
    },
    parentTitle: {
      get() {
        return this.title;
      },
      set(val) {
        this.$emit("update:title", val);
      },
    },
  },
  methods: {
    btnClick(envet) {
      this.$emit("update:msg", envet.target.value);
    },
  },

  /*
   beforeCreate() {
    console.log('NavBar', 'beforeCreate')
  },
  created() {
    console.log('NavBar', 'created')
  },
  beforeMount() {
    console.log('NavBar', 'beforeMount')
  },
  mounted() {
    console.log('NavBar', 'mounted')
  },
  beforeUpdate() {
    console.log('改变 msg 前', this.msg)

    console.log('NavBar', 'beforeUpdate')
  },
  updated() {
    console.log('改变 msg 后', this.msg)

    console.log('NavBar', 'updated')
  },
  beforeUnmount() {
    console.log('NavBar', 'beforeUnmount')
  },
  unmounted() {
    console.log('NavBar', 'unmounted')
  },
  */
};
</script>
<style scoped></style>
