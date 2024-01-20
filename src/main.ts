import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

// import './service/demo'

// import elementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')

import instance from './service'
import { AxiosHeaders } from 'axios'

interface IDataType {
  data: any
  code: number
}

instance
  .request<IDataType>({
    url: 'login',
    method: 'POST',
    data: {
      name: 'coderwhy',
      password: '123456'
    },
    interceptors: {
      requsetInterceptor(config) {
        console.log('单个请求拦截:请求拦截')
        return config
      },
      responseInterceptor(res) {
        console.log('单个请求拦截:响应拦截')
        return res
      }
    },
    headers: new AxiosHeaders(),
    isLoading: true
  })
  .then((res) => {
    console.log(res.data)
  })

// instance
//   .post<IDataType>({
//     url: 'login',
//     data: {
//       name: 'coderwhy',
//       password: '123456'
//     },
//     headers: new AxiosHeaders()
//   })
//   .then((res) => {
//     console.log(res.code)
//   })
// }
