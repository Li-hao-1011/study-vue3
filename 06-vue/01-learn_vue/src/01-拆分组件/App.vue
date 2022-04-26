<template>
  <div>
    <header-com
      id="header-id"
      class="header-class"
      title="哈哈哈"
      content="Content"
    />
    <main-com />
    <footer-com
      class1="fghig"
      class="abcd"
      title="Footer Bar"
      content="adwwwwwwww"
    />
  </div>
</template>

<script>
import HeaderCom from "./Header.vue";
import MainCom from "./Main.vue";
import FooterCom from "./Footer.vue";

export default {
  components: {
    HeaderCom,
    MainCom,
    FooterCom,
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
