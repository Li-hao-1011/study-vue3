class Person {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  eating() {
    console.log('吃饭')
  }
}

class Student extends Person {
  sno?: number
  constructor(name: string, age: number, sno?: number) {
    super(name, age)
    this.sno = sno
  }

  studying() {
    console.log('studying')
  }
  // 重写
  eating() {
    console.log('Student 吃饭')
  }
}

class Teacher extends Person {
  title?: string
  teachering() {
    console.log('studying')
  }
}

const stu = new Student('lhhhh', 18, 688)
console.log(stu)
stu.eating()
stu.studying()

/* 45.04 */

export {}
