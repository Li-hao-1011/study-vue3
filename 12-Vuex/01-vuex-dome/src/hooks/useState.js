import { computed } from "vue";
import { useStore, mapState } from "vuex";

export default function useState(mapper) {
  const _store = useStore();
  const storeStateFns = mapState(mapper);
  const state = {};
  Object.keys(storeStateFns).forEach((fnKey) => {
    state[fnKey] = computed(storeStateFns[fnKey].bind({ $store: _store }));
  });
  return state;
}
