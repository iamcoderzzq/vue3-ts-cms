import { App } from 'vue'
import { formatUTC } from '@/utils/date-format'

export default function registerGlobalProperties(app: App) {
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return formatUTC(value)
    }
  }
}
