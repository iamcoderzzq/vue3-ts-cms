import { IForm } from '@/base-ui/form'

export const searchConfig: IForm = {
  formItems: [
    {
      type: 'input',
      label: '账号',
      placeholder: '请输入账号'
    },
    {
      type: 'password',
      label: '密码',
      placeholder: '请输入密码'
    },
    {
      type: 'select',
      label: '运动',
      placeholder: '请选择喜欢的运动',
      options: [
        { value: 'basketball', label: '篮球' },
        { value: 'football', label: '足球' }
      ]
    },
    {
      type: 'datepicker',
      label: '日期',
      placeholder: '请选择日期',
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
