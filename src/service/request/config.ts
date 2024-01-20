let baseURL: string
const TIMEOUT = 10000
// console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://codercba.com:5000/'
}

export { baseURL, TIMEOUT }
