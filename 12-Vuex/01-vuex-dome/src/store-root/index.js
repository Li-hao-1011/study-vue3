import { createStore } from "vuex";

import { INCREMENT_N } from "./mutations-types";

const store = createStore({
  state() {
    return {
      counter: 100,
      name: "kd",
      books: [
        { name: "深入vue", price: 200, count: 3 },
        { name: "深入js", price: 200, count: 2 },
        { name: "深入webpack", price: 200, count: 5 },
        { name: "深入React", price: 200, count: 8 },
        { name: "深入Node", price: 200, count: 3 },
      ],
      discount: 0.6,
    };
  },
  getters: {
    totalPrice(state) {
      let totalPrice = 0;
      for (const book of state.books) {
        totalPrice += book.count * book.price;
      }
      return totalPrice;
    },
    currentDiscount(state, getters) {
      return state.discount * 0.9 * getters.totalPrice;
    },
    customDiscount(state, getters) {
      return (a) => state.discount * a * getters.totalPrice;
    },
  },

  mutations: {
    increment(state) {
      state.counter += 10;
    },
    deincrement(state) {
      state.counter -= 10;
    },
    [INCREMENT_N](state, padload) {
      // padload: 载荷
      state.counter += padload.n;
    },
  },

  actions: {
    // 函数
    incrementAction(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit("increment");
          console.log(context);
          console.log(payload);

          resolve("success");
          // reject("error");
        }, 1000);
      });
    },

    deincrementAction(context, payload) {
      setTimeout(() => {
        context.commit("deincrement");
        console.log(payload);
      }, 1000);
    },

    getHomeMultidata(context) {},
  },
});

export default store;
