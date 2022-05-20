class Person {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }

  // 访问器
  set name(val) {
    this._name = val;
  }
  get name() {
    return this._name;
  }
}

const p = new Person("lhhhhhh");
console.log(p.name);
p.name = "hello";
console.log(p.name);

export {};
