import { IForm } from '@/base-ui/form'
export const modalConfig: IForm = {
  title: '用户',
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名',
      rules: [
        { required: true, trigger: 'blur', message: '姓名不能为空' },
        { pattern: /^[0-9a-z]{5,8}$/, trigger: 'blur', message: '账号为5到8位的数字或字母' }
      ]
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名',
      rules: [{ required: true, trigger: 'blur', message: '真实姓名不能为空' }]
    },
    {
      field: 'password',
      type: 'password',
      label: '密码',
      placeholder: '请输入密码',
      rules: [
        { required: true, trigger: 'blur', message: '密码不能为空' },
        { pattern: /^[0-9a-z)]{5,16}$/, trigger: 'blur', message: '密码为5到16位的数字或字母' }
      ],
      isHidden: false
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '手机号码',
      placeholder: '请输入手机号码',
      rules: [
        { required: true, trigger: 'blur', message: '不能为空' },
        { pattern: /^[0-9)]+$/, trigger: 'blur', message: '请正确输入手机号码' }
      ]
    },
    {
      field: 'roleId',
      type: 'select',
      label: '角色',
      placeholder: '请选择角色',
      options: [],
      rules: [{ required: true, message: '请选择角色' }]
    },
    {
      field: 'departmentId',
      type: 'select',
      label: '部门',
      placeholder: '请选择部门',
      options: [],
      rules: [{ required: true, message: '请选择部门' }]
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
