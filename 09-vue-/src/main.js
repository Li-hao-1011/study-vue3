import { createApp } from "vue";
import dayjs from "dayjs";

import pluginObject from './03-Vue插件/plugins/plugins_object'

// import App from "./01-自定义指令/App.vue";

import App from "./02-Teleport/App.vue";

const app = createApp(App);

// 插件
app.use(pluginObject);

// 全局之定义指令
app.directive("all-focus", {
  mounted(el) {
    el.focus();
    console.log("全局焦距指令");
  },
});


// 事件格式化指令
app.directive("format-time", {
  mounted(el, binding) {
    const textContent = el.textContent;
    let timestamp = parseInt(textContent);

    let formatType = binding.value ? binding.value : "YYYY-MM-DD HH:mm:ss";

    if (textContent.length === 10) {
      timestamp = timestamp * 1000;
    }

    el.textContent = dayjs(timestamp).format(formatType);
  },
});

app.mount("#app");
