import { AxiosHeaders } from 'axios'
import MyRequset from './request'
import { baseURL, TIMEOUT } from './request/config'

const instance = new MyRequset({
  baseURL: baseURL,
  timeout: TIMEOUT,
  interceptors: {
    requsetInterceptor(config) {
      console.log('实例拦截器:请求拦截')
      const token = 'sfagadf'
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }

      return config
    },
    requsetInterceptorCatch(err) {
      return err
    },
    responseInterceptor(res) {
      console.log('实例拦截器:响应拦截')

      return res
    },
    responseInterceptorCatch(err) {
      return err
    }
  },
  headers: new AxiosHeaders()
})

export default instance
