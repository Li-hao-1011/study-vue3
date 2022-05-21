// 字面量赋值
interface IPerson {
  name: string
  age: number
  height: number
}

const info = {
  name: 'string',
  age: 18,
  height: 1.88,
  address: '123'
}

// freshness 擦除
const p: IPerson = info

console.log(info)
console.log(p)

export {}
