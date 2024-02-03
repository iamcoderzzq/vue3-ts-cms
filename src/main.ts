import { createApp } from 'vue'
import App from './App.vue'

import 'normalize.css'
import '@/assets/css/index.less'

import router from './router'
import store, { setupStore } from './store'

// import elementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(store)
setupStore()
app.use(router)
app.mount('#app')
