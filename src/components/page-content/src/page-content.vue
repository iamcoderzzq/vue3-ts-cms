<template>
  <div class="page-content">
    <my-table
      v-bind="contentConfig"
      :pageListData="pageListData"
      :totalCount="totalCount"
      v-model:page="pageInfo"
    >
      <template #headerHandler>
        <el-button
          type="primary"
          v-if="contentConfig.isShowAddNew && isCreate"
          @click="handleAddClick"
          >新增</el-button
        >
      </template>
      <!-- <template #status="scope">
        <el-button :type="scope.row.enable ? 'primary' : 'danger'" size="small">{{
          scope.row.enable ? '启用' : '禁用'
        }}</el-button>
      </template> -->
      <template #createAt="scope">{{ $filters.formatTime(scope.row.createAt) }}</template>
      <template #updateAt="scope">{{ $filters.formatTime(scope.row.updateAt) }}</template>
      <template #handler="scope">
        <el-button
          type="primary"
          text
          size="small"
          v-if="isUpdate"
          @click="handleEditClick(scope.row)"
        >
          <el-icon>
            <icon-ep-edit />
          </el-icon>
          <span>编辑</span>
        </el-button>
        <el-button
          type="danger"
          text
          size="small"
          v-if="isDelete"
          @click="handleDeleteClick(scope.row)"
        >
          <el-icon>
            <icon-ep-delete />
          </el-icon>
          <span>删除</span>
        </el-button>
      </template>
      <!-- <template #img="scope">
        <slot name="img" :row="scope.row"></slot>
      </template> -->
      <!-- <template #anotherOne="scope">
        <slot name="anotherOne" :row="scope.row"></slot>
      </template> -->
      <template v-for="item in otherPropSlots" :key="item.label" #[item.slotName]="scope">
        <slot :name="item.slotName" :row="scope.row"></slot>
      </template>
    </my-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import MyTable from '@/base-ui/table'

import { useStore } from '@/store'
import { usePermission } from '@/hooks/usePermission'

import { ElMessageBox, ElMessage } from 'element-plus'

export default defineComponent({
  name: '',
  components: { MyTable },
  props: {
    contentConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  emits: ['addBtnClick', 'editBtnClick'],
  setup(props, { emit }) {
    //获取用户按钮权限
    const isCreate = usePermission(props.pageName, 'create')
    const isUpdate = usePermission(props.pageName, 'update')
    const isQuery = usePermission(props.pageName, 'query')
    const isDelete = usePermission(props.pageName, 'delete')

    const store = useStore()
    const formData = computed(() => store.state.pageQueryModule.formData ?? {})
    const pageInfo = ref({
      currentPage: 1,
      pageSize: 10
    })
    watch(pageInfo, () => getPageData(formData.value))
    //获取页面数据
    const getPageData = (queryInfo: any = {}) => {
      if (isQuery || props.pageName === 'story') {
        store.dispatch('systemModule/getPageData', {
          queryInfo: {
            offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
            size: pageInfo.value.pageSize,
            ...queryInfo
          },
          pageName: props.pageName
        })
      }
    }
    getPageData()
    const pageListData = computed(() => store.getters['systemModule/getPageList'](props.pageName))
    const totalCount =
      computed(() => store.getters['systemModule/getTotalCount'](props.pageName)) ?? 0
    //从contentConfig.propList中获取其他插槽数据
    const otherPropSlots = props.contentConfig.propList.filter((item: any) => {
      return (
        item.slotName !== 'updateAt' && item.slotName !== 'createAt' && item.slotName !== 'handler'
      )
    })

    //删除数据
    const handleDeleteClick = (row: any) => {
      ElMessageBox.confirm('确认删除此条数据吗?', 'Warning', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          store
            .dispatch('systemModule/deletePageData', {
              pageName: props.pageName,
              id: row.id
            })
            .then((res) => {
              ElMessage({
                type: res.code === 0 ? 'success' : 'error',
                message: res.data ?? '删除失败'
              })
            })
            .catch((err) => {
              console.log('err', err)
            })
        })
        .catch(() => {
          ElMessageBox.close()
        })
    }
    //新增数据
    const handleAddClick = () => {
      emit('addBtnClick')
    }
    //编辑数据
    const handleEditClick = (row: any) => {
      emit('editBtnClick', row)
    }
    return {
      pageInfo,
      pageListData,
      totalCount,
      otherPropSlots,
      getPageData,
      handleDeleteClick,
      handleEditClick,
      handleAddClick,
      isCreate,
      isUpdate,
      isQuery,
      isDelete
    }
  }
})
</script>

<style lang="less" scoped>
// 不生效
// .el-overlay-message-box {
//   z-index: 1 !important;
// }
</style>

<style>
.el-overlay-message-box {
  z-index: 1 !important;
}
</style>
