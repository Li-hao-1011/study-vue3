function sayHello() {
  console.log(this.name, "---", "Hello");
}
const info1 = {
  name: "kt",
  sayHello,
};
const name = 'sc'
info1.sayHello()


sayHello()