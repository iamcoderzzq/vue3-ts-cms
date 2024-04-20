import { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名'
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '手机号码',
      placeholder: '请输入手机号码'
    },
    {
      field: 'enable',
      type: 'select',
      label: '状态',
      placeholder: '请选择状态',
      options: [
        { label: '启用', value: 1 },
        { label: '禁用', value: 0 }
      ]
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
