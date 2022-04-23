import { sum } from "./js/math";

const { proceFromst } = require("./js/format");


require('./js/element')
const message = "Hello World";
const names = ["abc", "cba", "nba"];
console.log(message);

names.forEach((item) => {
  console.log(item);
});

console.log(sum(20, 30));
console.log(proceFromst());
