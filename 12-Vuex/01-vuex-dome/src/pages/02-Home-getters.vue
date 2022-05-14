<template>
  <hr />
  <h2>总价格：{{ $store.getters.totalPrice }}</h2>
  <h2>折扣：{{ $store.getters.currentDiscount }}</h2>
  <h2>自定义折扣：{{ $store.getters.customDiscount(0.9) }}</h2>
  <hr />
  <h2>总价格：{{ totalPrice }}</h2>
  <!-- <h2>折扣：{{ currentDiscount }}</h2> -->
  <!-- <h2>自定义折扣：{{ customDiscount(0.9) }}</h2> -->
  <hr />
  <!-- <h2>总价格：{{ _totalPrice }}</h2> -->
  <!-- <h2>折扣：{{ _currentDiscount }}</h2> -->
  <!-- <h2>自定义折扣：{{ _customDiscount(0.9) }}</h2> -->
</template>

<script>
import { mapGetters, useStore } from "vuex";
import { computed } from "vue";
import useGetters from "../hooks/useGetters";

export default {
  name: "Home",
  /*   computed: {
    totalPrice() {
      let totalPrice = 0;
      for (const book of object) {
      }
      return this.$store.state.books.reduce();
    },
    ...mapGetters(["totalPrice", "currentDiscount", "customDiscount"]),
    ...mapGetters({
      _totalPrice: "totalPrice",
      _currentDiscount: "currentDiscount",
      _customDiscount: "customDiscount",
    }),
  }, */
  setup() {

    // const totalPrice = computed(() => store.getters.totalPrice);

    const getters = useGetters([
      "totalPrice",
      "currentDiscount",
      "customDiscount",
    ]);
    // const storeGettersFns = mapGetters();

    return { ...getters };
  },
};
</script>

<style lang="scss" scoped></style>
