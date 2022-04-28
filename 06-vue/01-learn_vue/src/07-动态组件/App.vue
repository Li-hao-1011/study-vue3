<template>
  <div>
    <button
      class="tab-btn"
      v-for="(item, index) in tabs"
      :key="item"
      @click="clickBtn(item)"
      :class="{ active: currentTab === item }"
    >
      {{ index }}:{{ item }}
    </button>

    <!-- 使用 v-if -->
    <!--     <div>
      <template v-if="currentTab === 'home'"> <home /> </template>
      <template v-else-if="currentTab === 'about'"> <about /> </template>
      <template v-else> <category /> </template>
    </div> -->

    <!-- 使用动态组件 -->
    <keep-alive include="Home,About">
      <component
        :is="currentTab"
        name="lhhhh"
        :age="18"
        @page-click="handlerClick"
      ></component>
    </keep-alive>
  </div>
</template>

<script>
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Category from './pages/Category.vue'
export default {
  components: { About, Category, Home },
  data() {
    return {
      tabs: ['home', 'about', 'category'],
      currentTab: 'home'
    }
  },
  methods: {
    clickBtn(tab) {
      this.currentTab = tab
    },
    handlerClick() {
      console.log('123465')
    }
  }
}
</script>

<style>
.tab-btn {
  margin: 4px 5px;
}
.active {
  background-color: pink;
}
</style>
