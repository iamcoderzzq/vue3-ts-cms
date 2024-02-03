<template>
  <div class="main">
    <el-container>
      <el-aside :width="isCollapse ? '60px' : '210px'">
        <nav-menu :isCollapse="isCollapse" />
      </el-aside>
      <el-container>
        <el-header><nav-header @change-menu-status="handleMenuStatus" /></el-header>
        <el-main class="content">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import NavMenu from '@/components/nav-menu'
import NavHeader from '@/components/nav-header'

export default defineComponent({
  name: '',
  components: {
    NavMenu,
    NavHeader
  },
  setup() {
    const isCollapse = ref(false)
    const handleMenuStatus = (isFold: boolean) => {
      isCollapse.value = isFold
    }
    return {
      isCollapse,
      handleMenuStatus
    }
  }
})
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  .el-container {
    height: 100%;
  }
  .el-aside {
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 200px;
    text-align: left;
    cursor: pointer;
    background-color: #001529;
    transition: width 0.3s linear;
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */

    &::-webkit-scrollbar {
      display: none;
    }
  }
  .content {
    background-color: #e8eeed;
  }
}
</style>
