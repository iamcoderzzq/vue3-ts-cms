<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="accountForm">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import type { Account } from '@/views/login/types'
import { ElForm } from 'element-plus'
import { useStore } from 'vuex'
import localCache from '@/utils/cache'

export default defineComponent({
  name: '',
  components: {},
  setup() {
    const account: Account = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })
    const rules = {
      name: [
        { required: true, trigger: 'blur', message: '请输入账号~' },
        { pattern: /^[0-9a-z]{5,8}$/, trigger: 'blur', message: '账号为5到8位的数字或字母~' }
      ],
      password: [
        { required: true, trigger: 'blur', message: '请输入密码~' },
        { pattern: /^[0-9a-z)]{5,16}$/, trigger: 'blur', message: '账号为5到16位的数字或字母~' }
      ]
    }
    const accountForm = ref<InstanceType<typeof ElForm>>()
    const store = useStore()
    const handleAccountLogin = (isCheck: boolean) => {
      accountForm.value?.validate((validate) => {
        if (validate) {
          //是否选择记住密码
          if (isCheck) {
            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password)
          } else {
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }

          store.dispatch('loginModule/accountToLogin', { ...account })
          // store.dispatch('loginModule/accountToLogin', { account, isCheck })
        }
      })
    }

    return {
      account,
      rules,
      accountForm,
      handleAccountLogin
    }
  }
})
</script>

<style lang="less"></style>
