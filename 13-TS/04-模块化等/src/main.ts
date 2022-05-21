import { sum } from './math'

import { time, price } from './utils/format'

const message: string = 'Message'

console.log(sum(10, 20))
console.log(message)

console.log(time.format('2222-02-22'))
console.log(price.format(10000))
console.log('----------')
