import { computed } from "vue";
import { useStore } from "vuex";

export default function useMapper(mapper, mapFn) {
  const _store = useStore();
  const storeStateFns = mapFn(mapper);
  const state = {};
  Object.keys(storeStateFns).forEach((fnKey) => {
    state[fnKey] = computed(storeStateFns[fnKey].bind({ $store: _store }));
  });
  return state;
}
