import { createApp } from "vue";

// import App from "./01-Mixin/App.vue";

// import App from "./02-Composition API/App.vue";

// import App from './03-RefAPI/App.vue'

// import App from './04-生命周期钩子/App.vue'

// import App from "./05-CompositionAPI/App.vue";

// import App from './06-setup顶层编写方式/App.vue'

import App from "./07-h函数/App.vue";

const app = createApp(App);

/* app.mixin({
  data() {
    return {
      title: "Mixin",
    };
  },
  methods: {},
  created() {
    console.log("全局Mixin的Created");
  },
}); */

app.mount("#app");
