<script>
import { h } from "vue";
export default {
  setup(props, { slots }) {
    return () => {
      return (
        <div>
          <h2>Home</h2>
          {slots.default()}
        </div>
      );
    };
  },
};
</script>
