import { App } from 'vue'
import { ElButton, ElInput } from 'element-plus'

const componentsArr = [ElButton, ElInput]

export function registerCpn(app: App) {
  componentsArr.forEach((item) => {
    app.component(item.name, ElButton)
  })
}
