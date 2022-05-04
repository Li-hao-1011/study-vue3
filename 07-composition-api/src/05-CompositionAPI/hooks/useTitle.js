import { ref, watch } from "vue";

export default function (title = "默认Title") {
  const titleRef = ref(title);

  watch(
    titleRef,
    (newVal) => {
      document.title = newVal;
    },
    {
      immediate: true,
    }
  );

  return titleRef;
}
