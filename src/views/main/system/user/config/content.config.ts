export const contentTableConfig = {
  title: '用户列表',
  propList: [
    {
      label: '姓名',
      prop: 'name',
      minWidth: '100'
    },
    {
      label: '真实姓名',
      prop: 'realname',
      minWidth: '120'
    },
    {
      label: '手机号码',
      prop: 'cellphone',
      minWidth: '150'
    },
    {
      label: '状态',
      prop: 'enable',
      minWidth: '80',
      slotName: 'status'
    },
    {
      label: '创建时间',
      prop: 'createAt',
      minWidth: '200',
      slotName: 'createAt'
    },
    {
      label: '更新时间',
      prop: 'updateAt',
      minWidth: '200',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '180',
      slotName: 'handler'
    }
  ],
  isShowIndexCol: true,
  isShowSelectCol: true,
  isShowAddNew: true
}
