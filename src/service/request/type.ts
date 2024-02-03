import type { InternalAxiosRequestConfig, AxiosResponse, CreateAxiosDefaults } from 'axios'
export interface MyInterceptors<T = AxiosResponse> {
  requsetInterceptor?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
  requsetInterceptorCatch?: (error: any) => any
  responseInterceptor?: (response: T) => T
  responseInterceptorCatch?: (error: any) => any
}

// export interface MyAxiosRequestConfig extends AxiosRequestConfig {
//   interceptors?: MyInterceptors
// }

export interface MyAxiosConfig extends CreateAxiosDefaults {
  interceptors?: MyInterceptors
}

//InternalAxiosRequestConfig继承自AxiosRequestConfig,多了个必传的headers

// export interface MyRequestConfig extends AxiosRequestConfig {
//   interceptors?: MyInterceptors
// }

export interface MyRequestConfig<T = AxiosResponse> extends InternalAxiosRequestConfig {
  interceptors?: MyInterceptors<T>
  isLoading?: boolean
}
