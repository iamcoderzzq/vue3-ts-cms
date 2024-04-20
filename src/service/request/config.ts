let baseURL: any
let uploadUrl: any
const TIMEOUT = 10000
// console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV === 'development') {
  // baseURL = 'http://codercba.com:5000/'
  baseURL = '/api'
  uploadUrl = '/imgupload'
}

export { baseURL, TIMEOUT, uploadUrl }
