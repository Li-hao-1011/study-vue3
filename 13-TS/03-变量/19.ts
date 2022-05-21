interface ISwim {
  swimming: () => void
}

interface IEat {
  eat: () => void
}

const a: ISwim = { swimming() {} }

class Animal {}

// 类中实现接口
class Fish extends Animal implements ISwim, IEat {
  eat() {}
  swimming() {}
}

// interface 和 type 的区别
// interface 会将同名的接口合并
interface IFoo {
  name: string
}
interface IFoo {
  age: number
}

type Ibar = { name: string }
// type Ibar = { age: number }

export {}
