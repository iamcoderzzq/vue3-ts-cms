import { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名',
      placeholder: '请输入角色名'
    },
    {
      field: 'intro',
      type: 'input',
      label: '权限介绍',
      placeholder: '请输入权限介绍'
    },
    {
      field: 'createAt',
      type: 'datepicker',
      label: '创建时间',
      placeholder: '请选择创建时间',
      otherOptions: {
        'start-placeholder': '开始日期',
        'end-placeholder': '结束日期',
        type: 'daterange'
      }
    }
  ],
  labelWidth: '80px',
  itemStyle: {
    padding: '10px 40px'
  },
  colLayout: {
    xs: 24,
    sm: 24,
    md: 12,
    lg: 8,
    xl: 6
  }
}
