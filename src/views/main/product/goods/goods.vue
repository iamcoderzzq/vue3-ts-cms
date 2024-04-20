<template>
  <div class="goods">
    <page-search
      :searchConfig="searchFormConfig"
      @reset-btn-click="handleResetClick"
      @query-btn-click="handleQueryClick"
    ></page-search>
    <page-content
      :contentConfig="contentTableConfig"
      @add-btn-click="handleAddClick"
      @edit-btn-click="handleEditClick"
      pageName="goods"
      ref="pageContentRef"
    >
      <template #img="scope">
        <el-image
          style="width: 50px"
          :src="scope.row.imgUrl"
          fit="cover"
          :preview-src-list="[scope.row.imgUrl]"
          preview-teleported
        ></el-image>
      </template>
    </page-content>
    <page-modal
      :modalConfig="modalConfig"
      :defaultInfo="defaultInfo"
      :dialogTitle="dialogTitle"
      :otherInfo="otherInfo"
      pageName="goods"
      ref="pageModalRef"
    >
      <div class="tree-control">
        <el-upload :http-request="upload" :auto-upload="true" :on-success="handleSuccess">
          <el-button type="primary">选择图片</el-button>
        </el-upload>
      </div>
    </page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'

import { useStore } from '@/store'

import { UploadProps } from 'element-plus'

export default defineComponent({
  name: 'role',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    // pageSearch处理hook
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    // pageModal的hook
    const [pageModalRef, defaultInfo, dialogTitle, handleAddClick, handleEditClick] = usePageModal()

    // upload数据
    const store = useStore()
    const otherInfo = ref({})

    const upload = () => {
      store.dispatch('productModule/handleUpload')
    }
    const handleSuccess: UploadProps['onSuccess'] = (res, uploadFile) => {
      const imgUrl = URL.createObjectURL(uploadFile.raw!)
      otherInfo.value = { imgUrl }
    }
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
      handleEditClick,
      upload,
      handleSuccess,
      otherInfo
    }
  }
})
</script>

<style scoped></style>
