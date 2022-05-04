<script>
import { h, ref } from "vue";
import Home from "./pages/Home.vue";
export default {
  setup() {
    const counter = ref(0);
    const increment = () => {
      counter.value++;
    };
    const decrement = () => {
      counter.value--;
    };
    return () => {
      return (
        <div>
          <h1>App组件</h1>
          <Home>
            {{
              default: (props) => (
                <button onClick={increment}>插槽的按钮+1</button>
              ),
            }}
          </Home>
          <h2>当前计数：{counter.value}</h2>
          <button onClick={increment}>+1</button>
          <button onClick={decrement}>-1</button>
        </div>
      );
    };
  },
};
</script>
