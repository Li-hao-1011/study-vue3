function createApp(app) {
  return {
    mount(selector) {
      const seEL = document.querySelector(selector);
      let isMounted = false;
      let oldVNode = null;

      watchEffect(() => {
        if (!isMounted) {
          oldVNode = app.render();

          mount(oldVNode, seEL);
          isMounted = true;
        } else {
          const newVNode = app.render();
          console.log(oldVNode, newVNode);
          patch(oldVNode, newVNode);
          oldVNode = newVNode;
        }
      });
    },
  };
}

const App = {
  data: reactive({ counter: 0 }),
  render() {
    return h("div", { class: "why" }, [
      h("h1", { id: "count" }, `${this.data.counter}`),
      h(
        "button",
        {
          onClick: () => {
            this.data.counter++;
          },
        },
        "+1"
      ),
      h(
        "button",
        {
          onClick: () => {
            this.data.counter--;
          },
        },
        "-1"
      ),
    ]);
  },
};

createApp(App).mount("#lhhh");
