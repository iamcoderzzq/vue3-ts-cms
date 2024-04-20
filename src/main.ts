import { createApp } from 'vue'
import App from './App.vue'

import 'normalize.css'
import '@/assets/css/index.less'

import router from './router'
import store, { setupStore } from './store'

import registerGlobal from '@/global'

// import elementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
registerGlobal(app)
app.use(store)
setupStore()
app.use(router)
app.mount('#app')
