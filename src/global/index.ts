import { App } from 'vue'
import { registerCpn } from './registerCpn'
export function registerGlobal(app: App) {
  registerCpn(app)
}
