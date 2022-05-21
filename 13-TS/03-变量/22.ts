// 泛型

/*  定义函数时不决定参数的类型 */

function sum<T, E, F>(n1: T, n2: E, ...args: F[]) {
  // return n1 + n2
}

sum<number, string, string>(8, '8')
sum<[], number, Object>([], 8)

function dump<T>(n1: T): T {
  // return n1 + n2
  return n1
}

dump<string>('')
dump<number>(18)
dump(50)

// 泛型接口的使用
// 默认类型
interface IPerson<T1 = string, T2 = number> {
  name: T1
  age: T2
}

const p: IPerson = {
  name: 'lg',
  age: 18
}

// 泛型类的使用
class Point<T> {
  x: T
  y: T
  z: T
  constructor(x: T, y: T, z: T) {
    this.x = x
    this.y = y
    this.z = z
  }
}

const point1 = new Point<number>(1, 5, 9)
const point2 = new Point<string>('1', '5', '9')
const point3: Point<string> = new Point('1', '5', '9')
const point4 = new Point(1, 5, 9)

// 泛型的类型约束
interface ILength {
  length: number
}
function getLength<T extends ILength>(arg: T) {
  return arg.length
}
getLength('abg')
getLength(['abg', '123'])
getLength({ length: 500 })

export {}
