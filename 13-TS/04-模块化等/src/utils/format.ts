export namespace time {
  export function format(time: string) {
    return '2222-02-22'
  }
}

export namespace price {
  export function format(price: number) {
    return '10,000'
  }
}

console.log(time.format('2222-02-22'))
console.log(price.format(10000))
