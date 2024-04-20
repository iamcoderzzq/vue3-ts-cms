<template>
  <div class="user">
    <page-search
      :searchConfig="searchFormConfig"
      @reset-btn-click="handleResetClick"
      @query-btn-click="handleQueryClick"
    />
    <page-content
      :contentConfig="contentTableConfig"
      pageName="users"
      ref="pageContentRef"
      @add-btn-click="handleAddClick"
      @edit-btn-click="handleEditClick"
    >
      <template #status="scope">
        <el-button :type="scope.row.enable ? 'primary' : 'danger'" size="small">{{
          scope.row.enable ? '启用' : '禁用'
        }}</el-button>
      </template>
    </page-content>
    <page-modal
      :modalConfig="modalConfigRef"
      :defaultInfo="defaultInfo"
      :dialogTitle="dialogTitle"
      pageName="users"
      ref="pageModalRef"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'

import { useStore } from '@/store'
import type { IFormItem } from '@/base-ui/form'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    //处理重置 查询按钮
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    //user.vue select 配置信息
    const store = useStore()
    const modalConfigRef = computed(() => {
      const roleItem: IFormItem | undefined = modalConfig.formItems.find(
        (item) => item.field === 'roleId'
      )
      roleItem!.options = store.state.entireRoleList.map((item) => {
        return { label: item.name, value: item.id }
      })
      const departmentItem: IFormItem | undefined = modalConfig.formItems.find(
        (item) => item.field === 'departmentId'
      )
      departmentItem!.options = store.state.entireDepartmentList.map((item) => {
        return { label: item.name, value: item.id }
      })
      return modalConfig
    })
    //属于user.vue组件单独的逻辑 写成回调函数的形式 不能写在usePageModal.ts逻辑中
    const handleAddCb = () => {
      const passwordItem = modalConfig.formItems.find((item) => item.field === 'password')
      passwordItem!.isHidden = false
    }
    const handleEditCb = () => {
      const passwordItem = modalConfig.formItems.find((item) => item.field === 'password')
      passwordItem!.isHidden = true
    }
    const [pageModalRef, defaultInfo, dialogTitle, handleAddClick, handleEditClick] = usePageModal(
      handleAddCb,
      handleEditCb
    )

    return {
      searchFormConfig,
      contentTableConfig,
      modalConfigRef,
      pageContentRef,
      pageModalRef,
      defaultInfo,
      dialogTitle,
      handleResetClick,
      handleQueryClick,
      handleAddClick,
      handleEditClick
    }
  }
})
</script>

<style scoped lang="less"></style>
