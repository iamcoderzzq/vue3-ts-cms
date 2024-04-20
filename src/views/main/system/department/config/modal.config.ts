import { IForm } from '@/base-ui/form'

export const modalConfig: IForm = {
  title: '部门',
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '部门名称',
      placeholder: '请输入部门名称',
      rules: [{ required: true, trigger: 'blur', message: '部门名称不能为空' }]
    },
    {
      field: 'parentId',
      type: 'select',
      label: '上级部门',
      placeholder: '请选择部门',
      options: [],
      rules: [{ required: true, message: '上级部门不能为空' }]
    },
    {
      field: 'leader',
      type: 'input',
      label: '领导名称',
      placeholder: '请输入领导名称',
      rules: [{ required: true, trigger: 'blur', message: '领导名称不能为空' }]
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
