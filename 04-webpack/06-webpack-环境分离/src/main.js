import { sum } from "./js/math";
const { proceFromst } = require("./js/format");

require("./js/element");

import axios from "axios";

if (module.hot) {
  module.hot.accept("./js/element", () => {
    console.log("element模块发生变化");
  });
}

// import { createApp } from "vue/dist/vue.esm-bundler";
import { createApp } from "vue";

import App from "./vue/App.vue";

/* 引入vue默认使用 vue.runtime.esm-bundler,它不能对 <template></template>标签打包 */
/* 
  vue(.runtime).esm-bundler.js：
    用于 webpack，rollup 和 parcel 等构建工具；
    构建工具中默认是vue.runtime.esm-bundler.js；
    如果我们需要解析模板template，那么需要手动指定vue.esm-bundler.js；
*/
// import { createApp } from "vue";
// import { createApp } from "vue/dist/vue.runtime.esm-bundler";

const message = "Hello World";
const names = ["abc", "cba", "nba"];
console.log(message);

names.forEach((item) => {
  console.log(item);
});

console.log(sum(20, 30));
console.log(proceFromst());

/* template: `<h2>Vue3</h2>
  <h3>{{title}}</h3>
`, */

// 使用 SFC 单文件组件
/* const app = createApp({

  template: "#my-app-template",
  data() {
    return {
      title: "手动下载Vue3",
    };
  },
});
  
app.mount("#app");
 */

createApp(App).mount("#app");

/* axios
  .get("/api/moment")
  .then((res) => {})
  .catch((err) => {
    console.log(err);
  });
 */