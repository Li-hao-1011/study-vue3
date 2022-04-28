<template>
  <div>
    App <home></home>

    <suspense>
      <template #default>
        <async-category />
      </template>
      <template #fallback>
        <home />
      </template>
    </suspense>
  </div>
</template>
<script>
/* eslint-disable */

import { defineAsyncComponent } from 'vue'

import Home from './Home.vue'

// import AsyncCategory from './AsyncCategory.vue'

const AsyncCategory = defineAsyncComponent(() => import('./AsyncCategory.vue'))

/* const AsyncCategory = defineAsyncComponent({
  loader: () => import('./AsyncCategory.vue'),

  // 加载过程中显示的组件
  loadingComponent: Home,
  // 加载失败时显示的组件
  errorComponent: Home,
  delay: 2000
}) */

export default {
  name: 'App',
  components: { Home, AsyncCategory },
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>
<style scoped lang="less"></style>
