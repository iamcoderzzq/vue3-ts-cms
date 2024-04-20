export const contentTableConfig = {
  title: '菜单内容',
  propList: [
    {
      label: '菜单名称',
      prop: 'name'
    },
    {
      label: '菜单级别',
      prop: 'type'
    },
    {
      label: '菜单路径',
      prop: 'url'
    },
    {
      label: '权限',
      prop: 'permission'
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
    }
  ],
  isShowAddNew: false,
  isShowSelectCol: false,
  isShowIndexCol: false,
  isShowPagination: false,
  childrenProps: {
    rowKey: 'id',
    treeProps: {
      children: 'children'
    }
  }
}
