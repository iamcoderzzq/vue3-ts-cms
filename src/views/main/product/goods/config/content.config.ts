export const contentTableConfig = {
  title: '商品列表',
  propList: [
    {
      label: '商品名称',
      prop: 'name',
      minWidth: '100'
    },
    {
      label: '商品描述',
      prop: 'desc',
      minWidth: '120'
    },
    {
      label: '地址',
      prop: 'address',
      minWidth: '100'
    },
    {
      label: '图片',
      prop: 'imgUrl',
      minWidth: '100',
      slotName: 'img'
    },
    {
      label: '状态',
      prop: 'status',
      minWidth: '100',
      slotName: 'status'
    },
    {
      label: '原价',
      prop: 'oldPrice',
      minWidth: '80'
    },
    {
      label: '现价',
      prop: 'newPrice'
    },
    {
      label: '销量',
      prop: 'saleCount',
      minWidth: '80'
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
      minWidth: '200',
      slotName: 'handler'
    }
  ],
  isShowAddNew: true
}
