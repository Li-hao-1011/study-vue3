import { sum } from "./js/math";
import sum_ts from "./ts/mul";
import { createApp } from "vue";
import App from './vue/App.vue'


import "./css/style.css";
import "./css/title.less";

import _ from "lodash-es";
// import _ from "../node_modules/lodash-es/lodash.default.js";

console.log("Hello World");
console.log(sum(10, 20));
console.log(sum_ts(50, 20));

console.log(_.join(["abc", "cba", "nba"], "-"));

const title = document.createElement("div");
title.className = "title";
title.innerHTML = "Hello Vite";

document.body.appendChild(title);

createApp(App).mount('#app');