const homeModule = {
  namespaced: true,
  state() {
    return {
      homeCounter: 100,
    };
  },
  getters: {
    doubleHomeCounter(state, getters, rootState, rootGetters) {
      return state.homeCounter * 2;
    },
    otherGetter() {
      return 1000;
    },
  },
  mutations: {
    increment(state) {
      state.homeCounter += 100;
    },
  },
  actions: {
    incrementAction(
      context
      /*{ commit, dispatch, state, rootState,rootGetters, getters }*/
    ) {
      context.commit("increment");
      context.commit("increment", null, { root: true });

      console.log(context);
    },
  },
};

export default homeModule;
