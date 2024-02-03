<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span v-if="!isCollapse">vue+ts cms</span>
    </div>
    <el-menu
      :default-active="defaultValue"
      :collapse="isCollapse"
      class="el-menu-vertical"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
    >
      <template v-for="item in userMenus" :key="item.id">
        <template v-if="item.children && item.children.length">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <!-- <el-icon v-if="item.icon">
                <component :is="`icon-ep-${item.icon}`"></component>
              </el-icon> -->
              <el-icon><icon-ep-monitor /></el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item :index="subItem.id + ''" @click="handleMenuClick(subItem)">{{
                subItem.name
              }}</el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="item.id + ''">
            <template #title>
              <span>{{ item.name }}</span>
            </template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import { useStore } from '@/store'
import { useRouter, useRoute } from 'vue-router'
import { firstMenu, pathMapToMenu } from '@/utils/mapMemu'

export default defineComponent({
  name: '',
  components: {},
  props: {
    isCollapse: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const userMenus = store.state.loginModule.userMenus
    // userMenus.forEach((item: { type: number; icon: string }) => {
    //   if (item.type === 1) {
    //     const iconName = item.icon.split('-')[2]
    //     item.icon = iconName
    //   }
    // })
    const menu = pathMapToMenu(userMenus, route.path)

    const defaultValue = ref(menu ? menu.id + '' : firstMenu.id + '')

    const handleMenuClick = (item: any) => {
      router.push(item.url)
    }

    return {
      userMenus,
      defaultValue,
      handleMenuClick
    }
  }
})
</script>

<style lang="less" scoped>
.nav-menu {
  height: 100%;
  background-color: #001529;
  .logo {
    display: flex;
    align-items: center;
    height: 28px;
    padding: 12px 10px 8px 10px;
    img {
      height: 100%;
      margin: 0 10px;
    }
    span {
      font-size: 16px;
      font-weight: 700;
      color: #fff;
    }
  }
  .el-menu {
    border-right: none;
  }
  // 目录
  .el-sub-menu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }
  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
