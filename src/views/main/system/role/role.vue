<template>
  <div class="role">
    <page-search
      :searchConfig="searchFormConfig"
      @reset-btn-click="handleResetClick"
      @query-btn-click="handleQueryClick"
    ></page-search>
    <page-content
      :contentConfig="contentTableConfig"
      @add-btn-click="handleAddClick"
      @edit-btn-click="handleEditClick"
      pageName="role"
      ref="pageContentRef"
    />
    <page-modal
      :modalConfig="modalConfig"
      :defaultInfo="defaultInfo"
      :dialogTitle="dialogTitle"
      :otherInfo="otherInfo"
      pageName="role"
      ref="pageModalRef"
    >
      <div class="tree-control">
        <el-tree
          ref="elTreeRef"
          :data="menuData"
          :props="{ children: 'children', label: 'name' }"
          show-checkbox
          node-key="id"
          @check="handleTreeClick"
        ></el-tree>
      </div>
    </page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, nextTick, watch } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'

import { useStore } from '@/store'

import { ElTree } from 'element-plus'
import { menuMapToCheckedLeaf } from '@/utils/mapMemu'

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

    //elTree逻辑处理
    // pageModal的额外参数menuList
    const otherInfo = ref({})
    const handleTreeClick = (currentObj: any, treeCheckedObj: any) => {
      const menuList = treeCheckedObj.checkedKeys.concat(treeCheckedObj.halfCheckedKeys)
      otherInfo.value = { menuList }
    }
    // 点击edit的回显回调
    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const handleEditCb = (item: any) => {
      nextTick(() => {
        const checkedLeaf = menuMapToCheckedLeaf(item.menuList)
        elTreeRef.value?.setCheckedKeys(checkedLeaf, false)
      })
      // watch(
      //   () => elTreeRef.value,
      //   () => {
      //     const checkedLeaf = menuMapToCheckedLeaf(item.menuList)
      //     elTreeRef.value?.setCheckedKeys(checkedLeaf, false)
      //   }
      // )
    }
    // pageModal的hook
    const [pageModalRef, defaultInfo, dialogTitle, handleAddClick, handleEditClick] = usePageModal(
      undefined,
      handleEditCb
    )

    // 菜单数据
    const store = useStore()
    const menuData = computed(() => store.state.entireMenuList)
    return {
      searchFormConfig,
      contentTableConfig,
      modalConfig,
      pageContentRef,
      pageModalRef,
      defaultInfo,
      dialogTitle,
      menuData,
      handleResetClick,
      handleQueryClick,
      handleAddClick,
      handleEditClick,
      handleTreeClick,
      otherInfo,
      elTreeRef
    }
  }
})
</script>

<style scoped>
.tree-control {
  padding-left: 12px;
}
</style>
