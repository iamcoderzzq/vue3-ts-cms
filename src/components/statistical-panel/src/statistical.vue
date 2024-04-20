<template>
  <div class="statistical">
    <el-statistic :title="panelInfo.title" :value="value">
      <template #title>
        <div class="header">
          <span>{{ panelInfo.title }}</span>
          <el-tooltip :content="panelInfo.tips" placement="top">
            <el-icon><icon-ep-warning /></el-icon>
          </el-tooltip>
        </div>
      </template>
      <template #prefix>
        <span v-if="panelInfo.amount === 'saleroom'"> ¥ </span>
      </template>
    </el-statistic>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useTransition } from '@vueuse/core'

export default defineComponent({
  name: '',
  components: {},
  props: {
    panelInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    let number = ref(props.panelInfo.number1)
    let source = ref(0)
    const value = useTransition(source, {
      duration: 1500
    })
    source.value = number.value
    return {
      value
    }
  }
})
</script>

<style lang="less" scoped>
.statistical {
  padding: 0 15px 15px 15px;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  // padding: 0 15px;
}
</style>
