import { IForm } from '@/base-ui/form'
export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '类别名称',
      placeholder: '请输入类别名称'
    },
    {
      field: 'createAt',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        'start-placeholder': '开始日期',
        'end-placeholder': '结束日期',
        type: 'daterange'
      }
    }
  ],
  labelWidth: '120px'
}
