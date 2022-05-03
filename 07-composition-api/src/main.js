import { createApp } from "vue";

// import App from "./01-Mixin/App.vue";

// import App from "./02-Composition API/App.vue";

import App from './03-RefAPI/App.vue'

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
