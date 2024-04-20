<template>
  <div class="form">
    <el-form :label-width="labelWidth" :model="formData" ref="elFormRef">
      <div class="header">
        <slot name="header">
          <div></div>
        </slot>
      </div>
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :style="itemStyle"
              v-if="!item.isHidden"
              :rules="item.rules"
              :prop="item.field"
            >
              <template v-if="item.type === 'input' || item.type === 'password'">
                <el-input
                  type="text"
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"
                />
              </template>
              <template v-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"
                  clearable
                >
                  <template v-for="option in item.options" :key="option.value">
                    <el-option :label="option.label" :value="option.value" />
                  </template>
                </el-select>
              </template>
              <template v-if="item.type === 'datepicker'">
                <el-date-picker
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'
import { IFormItem } from '../type'

export default defineComponent({
  name: '',
  components: {},
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '60px'
    },
    itemStyle: {
      type: Object,
      default: () => ({
        padding: '0 20px'
      })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xs: 24,
        sm: 24,
        md: 12,
        lg: 8,
        xl: 6
      })
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    //这里无论是浅拷贝还是深拷贝，都是可以的，猜测是因为ref这个函数的原因，跟深拷贝浅拷贝无关？
    // const formData = ref({ ...props.modelValue })
    const formData = ref(JSON.parse(JSON.stringify(props.modelValue)))

    watch(
      formData.value,
      (newValue) => {
        emit('update:modelValue', newValue)
      },
      {
        deep: true
      }
    )

    const elFormRef = ref()

    return {
      formData,
      elFormRef
    }
  }
})
</script>

<style lang="less" scoped>
.form {
  background-color: #fff;
  border-radius: 15px;
  padding: 20px 20px 0;
}
</style>
