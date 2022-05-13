<template>
  <h2>About: {{ $store.state.counter }}</h2>
  <h2>About: {{ sCounter }}</h2>
  <hr />
  <h2>About2: {{ counter }}</h2>
  <h2>About2: {{ name }}</h2>
</template>

<script>
import useState from "../hooks/useState";
import { computed } from "vue";
import { useStore, mapState } from "vuex";

export default {
  setup() {
    const store = useStore();
    const state = useState(["counter", "name"]);
    const sCounter = computed(() => store.state.counter);
    /*     
    // console.log(useStore());
    console.log(store);

    const storeState = mapState(["counter", "name"]);

    const state = {};
    Object.keys(storeState).forEach((fnKey) => {
      state[fnKey] = computed(storeState[fnKey].bind({ $store: store }));
    }); */

    return { sCounter, ...state };
  },
};
</script>

<style lang="scss" scoped></style>
