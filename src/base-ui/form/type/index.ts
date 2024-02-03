type IItemType = 'input' | 'password' | 'select' | 'datepicker'
interface IOption {
  value: any
  label: string
}
export interface IFormItem {
  type: IItemType
  label: string
  placeholder?: string
  options?: IOption[]
  otherOptions?: any
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  itemStyle?: any
  colLayout?: any
}
