import axios from 'axios'
import { fn } from './type'
import { cal } from './type'

const obj: fn = {
  name: 'lll',
  say(n1, n2) {
    return n1 + n2
  }
}
console.log(obj.say(10, 20))

function bar(cb: cal) {
  cb(20, 5)
}

bar((n1, n2) => {
  console.log(n1 * n2)
  return n1 * n2
})

axios
  .get('https://httpbin.org/get', {
    params: {
      name: 'zzq'
    }
  })
  .then((res) => {
    console.table(res)
  })
