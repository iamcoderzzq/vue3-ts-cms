import { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '部门名称',
      placeholder: '请输入部门名称'
    },
    {
      field: 'leader',
      type: 'input',
      label: '部门领导',
      placeholder: '请输入部门领导'
    },
    {
      field: 'createAt',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endtPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  labelWidth: '80px'
}
