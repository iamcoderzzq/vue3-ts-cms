import { IForm } from '@/base-ui/form'
export const modalConfig: IForm = {
  title: '商品',
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '商品名称',
      placeholder: '请输入商品名称',
      rules: [{ required: true, trigger: 'blur', message: '商品名称不能为空' }]
    },
    {
      field: 'oldPrice',
      type: 'input',
      label: '原价格',
      placeholder: '请输入原价格',
      rules: [{ required: true, trigger: 'blur', message: '原价格不能为空' }]
    },
    {
      field: 'newPrice',
      type: 'input',
      label: '现价',
      placeholder: '请输入现价格',
      rules: [{ required: true, trigger: 'blur', message: '现价格不能为空' }]
    },
    {
      field: 'desc',
      type: 'input',
      label: '商品描述',
      placeholder: '请输入商品描述',
      rules: [{ required: true, trigger: 'blur', message: '商品描述不能为空' }]
    },
    {
      field: 'status',
      type: 'select',
      label: '状态',
      placeholder: '请选择商品状态',
      options: [
        { label: '在售', value: 1 },
        { label: '已下架', value: 0 }
      ],
      rules: [{ required: true, trigger: 'blur', message: '商品状态不能为空' }]
    }
  ],
  labelWidth: '80',
  itemStyle: {
    padding: 0
  },
  colLayout: {
    span: 24
  }
}
