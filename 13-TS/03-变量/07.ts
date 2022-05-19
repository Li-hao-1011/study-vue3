// as 断言

// img
/* const el = document.getElementById("why") as HTMLImageElement;

el.src = "";

class Person {}

class Student extends Person {
  studying() {}
}

function sayHello(p: Person) {
  (p as Student).studying();
}

const stu = new Student();

sayHello(stu);

const msg = "hello";
const num: number = msg as any as number;
const num1: number = msg as unknown as number;
 */
// 非空断言
function printMessageLength(message?: string) {
  /*  if (message) {
    console.log(message.length);
  } */
  console.log(message!.length);
}

printMessageLength("wadawd");
printMessageLength("123456897132");

// printMessageLength();

const str = "string";
// console.log(str);

export {};
