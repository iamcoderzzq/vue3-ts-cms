<template>
  <div class="department">
    <page-search
      :searchConfig="searchFormConfig"
      @reset-btn-click="handleResetClick"
      @query-btn-click="handleQueryClick"
    ></page-search>
    <page-content
      :contentConfig="contentTableConfig"
      pageName="department"
      ref="pageContentRef"
      @add-btn-click="handleAddClick"
      @edit-btn-click="handleEditClick"
    ></page-content>
    <page-modal
      :modalConfig="modalConfigRef"
      :defaultInfo="defaultInfo"
      :dialogTitle="dialogTitle"
      pageName="department"
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
  name: 'department',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    const store = useStore()
    const modalConfigRef = computed(() => {
      const parentItem: IFormItem | undefined = modalConfig.formItems.find(
        (item) => item.field === 'parentId'
      )
      parentItem!.options = store.state.entireDepartmentList.map((item) => {
        return { label: item.name, value: item.id }
      })
      return modalConfig
    })
    const [pageModalRef, defaultInfo, dialogTitle, handleAddClick, handleEditClick] = usePageModal()
    return {
      searchFormConfig,
      contentTableConfig,
      modalConfig,
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

<style scoped></style>
