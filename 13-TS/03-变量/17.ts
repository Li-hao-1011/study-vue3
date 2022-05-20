// 类的类型
class Person {
  name: string = "123";
  age?: number = 18;
  eating() {}
}

const p = new Person();

const p1: Person = { name: "awd", eating() {} };

export {};
