import { IForm } from '@/base-ui/form'
export const modalConfig: IForm = {
  title: '角色',
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名称',
      placeholder: '请输入角色名称',
      rules: [{ required: true, trigger: 'blur', message: '角色名称不能为空' }]
    },
    {
      field: 'intro',
      type: 'input',
      label: '角色描述',
      placeholder: '请输入角色描述',
      rules: [{ required: true, trigger: 'blur', message: '角色描述不能为空' }]
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
