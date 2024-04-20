<template>
  <div class="page-modal">
    <el-dialog
      v-model="dialogVisible"
      :title="dialogTitle + modalConfig.title"
      width="30%"
      center
      destroy-on-close
    >
      <div>
        <my-form v-bind="modalConfig" v-model="formData" ref="myFormRef"></my-form>
        <slot></slot>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">确定</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'
import MyForm from '@/base-ui/form'
import { useStore } from '@/store'

import { ElMessage } from 'element-plus'
// import 'element-plus/theme-chalk/el-message.css'

export default defineComponent({
  name: '',
  components: { MyForm },
  props: {
    modalConfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    },
    dialogTitle: {
      type: String,
      default: ''
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    let myFormRef = ref<InstanceType<typeof MyForm>>()
    let dialogVisible = ref(false)
    const formData = ref<any>({})
    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modalConfig.formItems) {
          if (!Object.keys(newValue).length) {
            formData.value[item.field] = ''
          } else {
            formData.value[item.field] = newValue[item.field]
          }
        }
      }
    )
    const store = useStore()
    const handleConfirmClick = () => {
      if (!Object.keys(props.defaultInfo).length) {
        //新增
        myFormRef.value?.elFormRef.validate((valid: any) => {
          if (valid) {
            store
              .dispatch('systemModule/addPageData', {
                queryInfo: { ...formData.value, ...props.otherInfo },
                pageName: props.pageName
              })
              .then((res) => {
                console.log(res)
                ElMessage({
                  type: res.code === 0 ? 'success' : 'error',
                  message: res.data ?? '创建失败'
                })
              })
            dialogVisible.value = false
          }
        })
      } else {
        //编辑
        myFormRef.value?.elFormRef.validate((valid: any) => {
          if (valid) {
            store
              .dispatch('systemModule/editPageData', {
                queryInfo: { ...formData.value, ...props.otherInfo },
                pageName: props.pageName,
                id: props.defaultInfo.id
              })
              .then((res) => {
                console.log(res)
                ElMessage({
                  type: res.code === 0 ? 'success' : 'error',
                  message: res.data ?? '编辑失败'
                })
              })
            dialogVisible.value = false
          }
        })
      }
    }
    return {
      myFormRef,
      dialogVisible,
      formData,
      handleConfirmClick
    }
  }
})
</script>

<style lang="less" scoped></style>
