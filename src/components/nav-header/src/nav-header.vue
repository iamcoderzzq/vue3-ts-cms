<template>
  <div class="nav-header">
    <el-icon :size="25" class="fold-icon" @click="handleIconClick"
      ><icon-ep-fold v-if="isFold" /><icon-ep-expand v-else
    /></el-icon>
    <div class="content">
      <my-breadcrumb :breadcrumbs="breadcrumbs" />
      <nav-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from '@/store'
import MyBreadcrumb from '@/base-ui/breadcrumb'
import navInfo from './nav-info.vue'

import { pathMapToBreadcrumb } from '@/utils/mapMemu'

export default defineComponent({
  name: '',
  components: {
    MyBreadcrumb,
    navInfo
  },
  emits: ['changeMenuStatus'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleIconClick = () => {
      isFold.value = !isFold.value
      emit('changeMenuStatus', isFold.value)
    }

    const route = useRoute()
    const store = useStore()
    const userMenus = store.state.loginModule.userMenus
    const breadcrumbs = computed(() => {
      const currentPath = route.path
      return pathMapToBreadcrumb(userMenus, currentPath)
    })
    return {
      isFold,
      breadcrumbs,
      handleIconClick
    }
  }
})
</script>

<style lang="less" scoped>
.nav-header {
  display: flex;
  align-items: center;
  height: 100%;
  .fold-icon {
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 10px;
  }
}
</style>
