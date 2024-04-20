import { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '商品名称',
      placeholder: '请输入商品名称'
    },
    {
      field: 'desc',
      type: 'input',
      label: '商品描述',
      placeholder: '请输入商品描述'
    },
    {
      field: 'address',
      type: 'input',
      label: '区域',
      placeholder: '请输入区域'
    },
    {
      field: 'status',
      type: 'select',
      label: '状态',
      placeholder: '请选择状态',
      options: [
        { label: '在售', value: 1 },
        { label: '已下架', value: 0 }
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
