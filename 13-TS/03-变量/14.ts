class Person {
  private name: string = "lhhhhhhhhhh";
  protected age: number = 18;
  readonly sex: { title: string } = { title: "男" };
}
class Student extends Person {
  getStuName() {
    return this.age;
  }
}

const p = new Person();
const s = new Student();

console.log(s.getStuName());

// console.log(p.name);
// console.log(p.age);
console.log(p.sex);
p.sex.title = "女";
console.log(p.sex);

export {};
