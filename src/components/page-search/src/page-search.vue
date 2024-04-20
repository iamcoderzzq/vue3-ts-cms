<template>
  <div class="page-search">
    <my-form v-bind="searchConfig" v-model="formData">
      <template #footer>
        <div class="footer">
          <el-button @click="handleResetClick">重置</el-button>
          <el-button type="primary" @click="handleQueryClick">搜索</el-button>
        </div>
      </template>
    </my-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import MyForm from '@/base-ui/form'

import { useStore } from '@/store'

export default defineComponent({
  name: 'page-search',
  components: { MyForm },
  props: {
    searchConfig: {
      type: Object,
      required: true
    }
  },
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    const formItems = props.searchConfig.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)
    const store = useStore()
    watch(
      () => formData.value,
      () => {
        store.commit('pageQueryModule/saveFormData', formData.value)
      },
      {
        deep: true
      }
    )

    const handleResetClick = () => {
      //遍历方式可行？
      for (const key in formOriginData) {
        formData.value[key] = formOriginData[key]
      }
      //直接修改不可行？
      // formData.value = formOriginData
      // formData.value = {}
      // formData.value = {
      //   account: '63'
      // }

      emit('resetBtnClick')
    }

    const handleQueryClick = () => {
      emit('queryBtnClick', formData.value)
    }

    return {
      formData,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<style lang="less" scoped>
.page-search {
  border-bottom: 20px solid #e8eeed;
  // display: none;
}
.header {
  text-align: center;
  margin-bottom: 20px;
}
.footer {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
