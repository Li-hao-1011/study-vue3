type AddType = number | string

function add(a1: AddType, a2: AddType) {
  if (typeof a1 === 'number' && typeof a2 === 'number') {
    return a1 + a2
  } else if (typeof a1 === 'string' && typeof a2 === 'string') {
    return a1 + a2
  }
}

// 函数的重载
function fn(a1: number, a2: number): number
function fn(a1: string, a2: string): string
function fn(num1: any, num2: any): any {
  if (typeof num1 === 'string' && typeof num2 === 'string') {
    return num1.length + num2.length
  }
  return num1 + num2
}

console.log(fn(1, 2))
console.log(fn('1', '2'))

// 函数的重载
function getLength(args: string): number
function getLength(args: any[]): number
function getLength(args: any): number {
  return args.length
}
// getLength('123456')

function getLen(args: string | any[]): number {
  return args.length
}
// getLen([1, 2, 3, 4, 5, 6])

export {}
