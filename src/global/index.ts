import { App } from 'vue'
// import { registerCpn } from './registerCpn'
import registerGlobalProperties from './register-properties'
export default function registerGlobal(app: App) {
  // registerCpn(app)
  registerGlobalProperties(app)
}
