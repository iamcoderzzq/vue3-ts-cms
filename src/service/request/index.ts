import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { MyInterceptors, MyAxiosConfig, MyRequestConfig } from './type'

import { ElLoading } from 'element-plus'
import 'element-plus/theme-chalk/el-loading.css'

const DEFAULT_LOADING = true

class MyRequset {
  instance: AxiosInstance
  interceptors?: MyInterceptors
  loadingInstance?: ReturnType<typeof ElLoading.service>
  isLoading?: boolean
  constructor(config: MyAxiosConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.isLoading = DEFAULT_LOADING
    //全局拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.isLoading) {
          this.loadingInstance = ElLoading.service({
            lock: true,
            text: 'Loading...',
            background: 'rgba(0, 0, 0, 0.5)'
          })
        }

        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        this.loadingInstance?.close()
        if (res.data.returnCode === '-1001') {
          console.log('请求失败')
          return new Promise((resolve, reject) => {
            reject('err')
          })
        } else {
          return res.data
        }
      },
      (err) => {
        this.loadingInstance?.close()
        if (err.response?.status === 404) {
          console.log('404~')
          return err
        } else {
          return err
        }
      }
    )

    //实例拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requsetInterceptor,
      this.interceptors?.requsetInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
  }

  request<T = any>(config: MyRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // if (config.isLoading === false) {
      this.isLoading = config.isLoading
      // }
      if (config.interceptors?.requsetInterceptor) {
        config = config.interceptors.requsetInterceptor(config)
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors?.responseInterceptor(res)
          }
          this.isLoading = DEFAULT_LOADING
          resolve(res)
        })
        .catch((err) => {
          this.isLoading = DEFAULT_LOADING
          console.log('err!!', err)

          reject(err)
        })
    })
  }

  get<T = any>(config: MyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T = any>(config: MyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  patch<T = any>(config: MyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }

  delete<T = any>(config: MyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
}

export default MyRequset
