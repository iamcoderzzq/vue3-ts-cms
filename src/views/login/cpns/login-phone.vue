<template>
  <div class="login-phone">
    <el-form label-width="80px">
      <el-form-item label="手机号码">
        <el-input v-model="phoneInfo.number"></el-input>
      </el-form-item>
      <el-form-item label="验证码">
        <div class="vetify">
          <el-input v-model="phoneInfo.vertifyCode"></el-input>
          <el-button type="primary" class="vetify-btn">发送验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: '',
  components: {},
  setup() {
    const phoneInfo = reactive({
      number: '',
      vertifyCode: ''
    })
    const handlePhoneLogin = () => {
      return
    }
    return { phoneInfo, handlePhoneLogin }
  }
})
</script>

<style lang="less">
.vetify {
  display: flex;
  .vetify-btn {
    margin-left: 10px;
  }
}
</style>
