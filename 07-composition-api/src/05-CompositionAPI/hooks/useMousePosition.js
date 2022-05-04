import { ref } from "vue";
export default function () {
  // 滚动位置
  const mouseX = ref(0);
  const mouseY = ref(0);

  document.addEventListener("mousemove", (e) => {
    mouseX.value = e.pageX;
    mouseY.value = e.pageY;
  });

  return {
    mouseX,
    mouseY,
  };
}
