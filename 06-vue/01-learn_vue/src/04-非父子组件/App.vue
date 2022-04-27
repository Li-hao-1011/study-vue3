<template>
  <div>
    <home />
    <!-- <h3>{{name}}</h3> -->
    <button @click="add">+1</button>
  </div>
</template>
<script>
/* eslint-disable */
import Home from './Home.vue'

import { computed } from 'vue'

export default {
  name: '',
  components: { Home },
  provide() {
    return {
      name: 'why',
      age: 18,
      nameLength: computed(() => this.names.length)
    }
  },
  data() {
    return {
      names: ['abc', 'cba', 'nba']
    }
  },
  created() {},
  methods: {
    add() {
      this.names.push('why')
      console.log(this.names)
    }
  }
}
</script>
<style scoped >
</style>