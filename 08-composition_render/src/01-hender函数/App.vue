<script>
import { h, ref } from "vue";
import Home from "./pages/Home.vue";
export default {
  setup() {
    const counter = ref(0);
    return () => {
      return h(Home, null, {
        default: (props) => h("span", null, `App传入的插槽内容: ${props.name}`),
      });
    };
  },
};
</script>

<style scoped></style>
