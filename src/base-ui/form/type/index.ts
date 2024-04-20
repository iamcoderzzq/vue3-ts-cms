type IItemType = 'input' | 'password' | 'select' | 'datepicker'
interface IOption {
  value: any
  label: string
}
export interface IFormItem {
  field: string
  type: IItemType
  label: string
  rules?: any[]
  placeholder?: string
  options?: IOption[]
  otherOptions?: any
  isHidden?: boolean
}
export interface IForm {
  title?: string
  formItems: IFormItem[]
  labelWidth?: string
  itemStyle?: any
  colLayout?: any
}
