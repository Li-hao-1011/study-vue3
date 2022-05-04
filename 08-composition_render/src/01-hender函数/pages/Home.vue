<script>
import { h, ref } from "vue";
export default {
  setup(props, { slots }) {
    const name = ref("code");
    return () =>
      h("div", null, [
        h("h2", null, "Home"),
        slots.default
          ? slots.default({name:'lhhhhhhhhh'})
          : h("span", null, "Home插槽默认的内容"),
      ]);
  },
};
</script>
