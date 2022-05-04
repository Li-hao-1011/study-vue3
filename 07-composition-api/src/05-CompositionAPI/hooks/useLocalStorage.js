import { ref, watch } from "vue";

export default function (key, value) {
  const store = ref(value);

  if (value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  } else {
    store.value = JSON.parse(window.localStorage.getItem(key));
  }

  watch(
    store,
    (newVal) => {
      window.localStorage.setItem(key, JSON.stringify(newVal));
    },
    {
      immediate: true,
    }
  );

  return store;
}
