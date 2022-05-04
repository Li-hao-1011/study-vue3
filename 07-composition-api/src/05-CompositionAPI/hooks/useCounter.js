import { ref, computed } from "vue";

export default function () {
  // 计数器
  const counter = ref(0);
  const doubleCounter = computed(() => counter.value * 2);
  // +1
  const increment = () => {
    counter.value++;
  };
  // -1
  const decrement = () => {
    counter.value--;
  };
  return { counter, doubleCounter, increment, decrement };
}
