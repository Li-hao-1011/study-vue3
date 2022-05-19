// TypeScript 函数类型

/* function foo(): number {
  const num1: number = 20;
  return num1;
}

function bar(fn: () => void) {
  fn();
}

bar(foo);

const add: (num1: number, num2: number) => void = (
  num1: number,
  num2: number
) => {
  return num1 + num2;
};
add(10, 20);

function calc(
  n1: number,
  n2: number,
  fn: (num1: number, num2: number) => number
) {
  return fn(n1, n2);
}

console.log(
  calc(20, 30, (n1, n2) => {
    return n1 + n2;
  })
);
console.log(
  calc(20, 30, (n1, n2) => {
    return n1 * n2;
  })
);
console.log(
  calc(20, 30, (n1, n2) => {
    return n1 - n2;
  })
);

function foo1(x: number, y?: number) {
  return x + (y ?? 0);
}

function foo2(x: number, y: number = 200) {
  return (x ?? 0) + y;
}

console.log(foo2(10));
console.log(foo2(10, 100)); */

const info = {
  name: "lhhhhhhhh",
  sayHi() {
    console.log(this.name);
  },
};

info.sayHi();

type NameType = {
  name: string;
};
function sayHello(this:NameType) {
  console.log(this.name, "---", "Hello");
}
const info1 = {
  name: "kt",
  sayHello,
};
info1.sayHello();

sayHello.call({name:'call'})
sayHello.apply({ name: "apply" });

const a = sayHello.bind({name:'bind'})
a()

export {};
