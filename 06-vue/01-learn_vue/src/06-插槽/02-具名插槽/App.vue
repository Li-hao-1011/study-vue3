<template>
  <div>
    <!--  <my-slot> -->

    <nav-bar
      :name="name"
      @change-slot="changeSlot"
    >
      <template v-slot:left>
        <button>左边按钮</button>
      </template>
      <template v-slot:center>
        <h3 class="h2">标题</h3>
      </template>
      <template v-slot:right>
        <button>右边按钮</button>
      </template>

      <template #nba>
        <i>nba</i>
      </template>
      <template #abc>
        <i>abc</i>
      </template>
      <template #cba>
        <i>cba</i>
      </template>
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
      names: ['abc', 'cba', 'nba'],
      name: 'cba'
    }
  },
  methods: { changeSlot() {} }
}
</script>
<style scoped >
/*.btn {
  width: 100%;
}
.btn > {
  display: block;
  width: 100%;
  height: 20px;
} */
.h2 {
  margin: 0;
}
</style>