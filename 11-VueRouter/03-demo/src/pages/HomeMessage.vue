<template>
  <h2>消息列表</h2>

  <ul>
    <li>第一条：123</li>
    <li>第二条：456</li>
    <li>第三条：789</li>
    <li><input type="text" v-model="result" /></li>
  </ul>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      result: "awdv",
    };
  },
};
</script>

<style lang="scss" scoped></style>
