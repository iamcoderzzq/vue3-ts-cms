import { IForm } from '@/base-ui/form'

export const modalConfig: IForm = {
  title: '分类',
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '类别名称',
      placeholder: '请输入类别名称',
      rules: [{ required: true, trigger: 'blur', message: '类别名称不能为空' }]
    }
  ],
  labelWidth: '80',
  itemStyle: {
    padding: '0'
  },
  colLayout: {
    span: 24
  }
}
