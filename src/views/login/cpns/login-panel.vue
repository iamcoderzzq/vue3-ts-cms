<template>
  <div class="login-panel">
    <h1>后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="0">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon>
              <icon-ep-user />
            </el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <login-account ref="loginAccountRef" />
      </el-tab-pane>
      <el-tab-pane name="1">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon>
              <icon-ep-iphone />
            </el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone ref="loginPhoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="control-model">
      <el-checkbox v-model="isCheck">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleLogin">立即登录</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import loginAccount from '@/views/login/cpns/login-account.vue'
import loginPhone from '@/views/login/cpns/login-phone.vue'

export default defineComponent({
  name: '',
  components: { loginAccount, loginPhone },
  setup() {
    const loginAccountRef = ref<InstanceType<typeof loginAccount>>()
    const loginPhoneRef = ref<InstanceType<typeof loginPhone>>()
    const currentTab = ref('0')
    const isCheck = ref(false)
    const handleLogin = () => {
      if (currentTab.value === '0') {
        loginAccountRef.value?.handleAccountLogin(isCheck.value)
      } else {
        loginPhoneRef.value?.handlePhoneLogin()
      }
    }
    return {
      isCheck,
      loginAccountRef,
      loginPhoneRef,
      currentTab,
      handleLogin
    }
  }
})
</script>

<style lang="less">
.login-panel {
  width: 320px;
  text-align: center;
  .control-model {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .login-btn {
    width: 100%;
    height: 44px;
  }
}
</style>
