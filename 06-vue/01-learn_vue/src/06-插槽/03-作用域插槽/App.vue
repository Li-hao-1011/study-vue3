<template>
  <div>
    <show-name :names="names">
      <!-- <button>{{title}}</button> -->
      <template #="namesProps">
        <button>{{namesProps.index}}- {{namesProps.item}}</button>
      </template>
    </show-name>

    <show-name :names="names">
      <!-- <button>{{title}}</button> -->
      <template v-slot="slotProps">
        <p>{{slotProps.index}}- {{slotProps.item}}</p>
      </template>
    </show-name>

    <!-- 独占默认插槽的缩写 默认插槽 的缩写 -->
    <show-name
      :names="names"
      #="namesProps"
    >
      <button>{{namesProps.index}}- {{namesProps.item}}</button>
    </show-name>
  </div>
</template>
<script>
/* eslint-disable */

// import childCpn from './childCpn.vue'
import ShowName from './ShowName.vue'

export default {
  name: '',
  components: { ShowName },
  data() {
    return { title: '哈哈哈哈', names: ['kd', 'lb', 'kb'] }
  },
  created() {},
  methods: {}
}
</script>
<style scoped lang='less'>
</style>