import { AxiosHeaders } from 'axios'
import MyRequset from './request'
import { baseURL, TIMEOUT, uploadUrl } from './request/config'
import localCache from '@/utils/cache'

const instance = new MyRequset({
  baseURL: baseURL,
  timeout: TIMEOUT,
  interceptors: {
    requsetInterceptor(config) {
      const token = localCache.getCache('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requsetInterceptorCatch(err) {
      return err
    },
    responseInterceptor(res) {
      return res
    },
    responseInterceptorCatch(err) {
      return err
    }
  },
  headers: new AxiosHeaders()
})

export const instanceImg = new MyRequset({
  baseURL: uploadUrl,
  timeout: TIMEOUT
})

export default instance
