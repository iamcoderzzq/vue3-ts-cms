export const contentTableConfig = {
  title: '类别列表',
  propList: [
    {
      label: '类别名称',
      prop: 'name',
      minWidth: '120'
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
      minWidth: '100',
      slotName: 'handler'
    }
  ],
  isShowIndexCol: true,
  isShowSelectCol: true,
  isShowAddNew: true
}
