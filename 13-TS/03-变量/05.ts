// 联合类型
// Union type
function printId(id: number | string | boolean) {}

printId(123);
printId("123");
printId(true);

// 可选类型和联合类型

function foo(message?: string) {
  console.log(message);
}

foo("123");
foo();

export {};
