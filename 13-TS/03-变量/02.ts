// any
let message: any = "Hello";

message = 123;
message = true;
message = [];
message = {};

function foo() {
  return "abc";
}

function bar() {
  return 123;
}

// unknown
let flag = true;
let result: unknown;
if (flag) {
  result = foo();
} else {
  result = bar();
}

let msg: any = result;
let msg1: unknown = result;

// void
function sum(num1: number, num2: number): void {
  return undefined;
}

// never
function hd(): never {
  while (true) {}
}
function bar1(): never {
  throw new Error("123");
}

// never 的使用场景
function handleMessage(message: string | number | boolean) {
  switch (typeof message) {
    case "string":
      console.log("string");
      break;
    case "number":
      console.log("number");
      break;
    case "boolean":
      console.log("number");
      break;
    default:
      const checkout: never = message;
  }
}

// 元组 tuple
const info: [string, number, number] = ["why", 18, 1.88];

console.log(info[0].length);

// react hook:useState

function useState(state: any) {
  let currentState = state;

  const changeState = (newState: any) => {
    currentState = newState;
  };
  const arr: [any, (newState: any) => void] = [currentState, changeState];

  return arr;
}

const [counter, setCounter] = useState(10);

function useState1<T>(state: T) {
  let currentState = state;

  const changeState = (newState: any) => {
    currentState = newState;
  };
  const arr: [T, (newState: T) => void] = [currentState, changeState];

  return arr;
}

const [counter1, setCounter1] = useState1("10");
const [counter2, setCounter2] = useState1("10");

export {};
