<template>
  <div class="category">
    <page-search
      :searchConfig="searchFormConfig"
      @query-btn-click="handleQueryClick"
      @reset-btn-click="handleResetClick"
    ></page-search>
    <page-content
      :contentConfig="contentTableConfig"
      @add-btn-click="handleAddClick"
      @edit-btn-click="handleEditClick"
      pageName="category"
      ref="pageContentRef"
    ></page-content>
    <page-modal
      :modalConfig="modalConfig"
      :defaultInfo="defaultInfo"
      :dialogTitle="dialogTitle"
      pageName="category"
      ref="pageModalRef"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'

export default defineComponent({
  name: 'category',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    const [pageModalRef, defaultInfo, dialogTitle, handleAddClick, handleEditClick] = usePageModal()
    return {
      searchFormConfig,
      contentTableConfig,
      modalConfig,
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
