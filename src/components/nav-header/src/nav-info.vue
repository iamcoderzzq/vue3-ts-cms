<template>
  <div class="nav-info">
    <el-dropdown>
      <span class="info">
        <el-avatar
          size="small"
          class="avatar"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        ></el-avatar>
        <span>{{ name }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleExitClick">
            <el-icon><icon-ep-circle-close /></el-icon>
            <span>退出系统</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import { useRouter } from 'vue-router'
import localCache from '@/utils/cache'

export default defineComponent({
  name: '',
  components: {},
  setup() {
    const store = useStore()
    const router = useRouter()
    const name = computed(() => store.state.loginModule.userInfo.name)
    const handleExitClick = () => {
      localCache.deleteCache('token')
      router.push('/main')
    }
    return {
      name,
      handleExitClick
    }
  }
})
</script>

<style lang="less" scoped>
.info {
  cursor: pointer;
  display: flex;
  align-items: center;
  outline: none;
  .avatar {
    margin-right: 5px;
  }
}
</style>
