export const contentTableConfig = {
  title: '部门列表',
  propList: [
    {
      label: '部门名称',
      prop: 'name',
      minWidth: '100'
    },
    {
      label: '部门领导',
      prop: 'leader',
      minWidth: '100'
    },
    {
      label: '上级部门',
      prop: 'parentId',
      minWidth: '100'
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
  isShowAddNew: true
}
