export const contentTableConfig = {
  title: '角色列表',
  propList: [
    {
      label: '角色名',
      prop: 'name'
    },
    {
      label: '介绍',
      prop: 'intro'
    },
    {
      label: '生成时间',
      prop: 'createAt',
      slotName: 'createAt'
    },
    {
      label: '更新时间',
      prop: 'updateAt',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      slotName: 'handler'
    }
  ],
  isShowAddNew: true
}
