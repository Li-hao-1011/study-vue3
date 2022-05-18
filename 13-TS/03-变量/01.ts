let age: number = 18;
const height: number = 1.88;

let foo = "foo";

// string ts中的字符串类型
// String js中字符串的包装类的类型

let num: number = 123;

num = 222 + 0;

let num1: number = 100;
let num2: number = 0b111;
let num3: number = 0o555;
let num4: number = 0xf23;

console.log(num1, num2, num3, num4);

const flag: boolean = true;

const str: string = "message";

const str1: string = `message`;

const names: string[] = [];
names.push("sc");
names.push("kt");

const ages: Array<number> = [];
ages.push(18);

// object
const info = {
  name: "why",
  age: 18,
};

console.log(info.name);

// null | undefined
const n1: null = null;

const n2: undefined = undefined;

// symbol
const title1 = Symbol("title");
const title2 = Symbol("title");
const titleInfo = {
  [title1]: "coder",
  [title2]: "student",
};

export {};
