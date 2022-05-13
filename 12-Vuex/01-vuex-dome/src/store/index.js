import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      counter: 100,
      name: "kd",
    };
  },

  mutations: {
    increment(state) {
      state.counter += 10;
    },
    deincrement(state) {
      state.counter -= 10;
    },
  },
});

export default store;
