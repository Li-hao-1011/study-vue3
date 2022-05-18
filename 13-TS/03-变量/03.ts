// 函数的参数和返回值

// 函数的返回值会自动推导
function sum(num1: number, num2: number): number {
  return num1 + num2;
}

sum(1, 2);

// 匿名函数
function foo(msg: string) {}

const names = ["abc", "cba", 1];
names.forEach((item) => {});

export {};
