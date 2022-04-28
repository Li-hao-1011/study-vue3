<template>
  <div>
    <!-- <button @click="btnClick">NavBar</button>
     <ul>
      <li>NavBar: {{ modelValue }}</li>
    </ul> -->
    <input type="text" :value="modelValue" @input="btnClick" />
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'NavBar',
  data() {
    return { msg: '123' }
  },
  props: ['modelValue'],
  emits: ['update:model-value'],
  methods: {
    btnClick(envet) {
      this.$emit('update:model-value', envet.target.value)
    }
  }

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
}
</script>
<style scoped></style>
