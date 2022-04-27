<template>
  <div>
    <!--  <my-slot> -->

    <nav-bar>
      <button>左边按钮</button>
      <div>标题</div>
      <button>右边按钮</button>
    </nav-bar>

  </div>
</template>
<script>
/* eslint-disable */

// import MySlot from './MySlotCpn.vue'
import NavBar from './NavBar.vue'
export default {
  name: '',
  components: { NavBar },
  provide() {
    return {}
  },
  data() {
    return {
      names: ['abc', 'cba', 'nba']
    }
  },
  created() {},
  methods: {}
}
</script>
<style scoped >
.btn {
  width: 100%;
}
.btn > {
  display: block;
  width: 100%;
  height: 20px;
}
</style>