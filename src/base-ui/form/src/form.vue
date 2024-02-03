<template>
  <div class="form">
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" :style="itemStyle">
              <template v-if="item.type === 'input' || item.type === 'password'">
                <el-input
                  type="text"
                  :placeholder="item.placeholder"
                  :showpassword="item.type === 'password'"
                  v-bind="item.otherOptions"
                />
              </template>
              <template v-if="item.type === 'select'">
                <el-select :placeholder="item.placeholder" v-bind="item.otherOptions">
                  <template v-for="option in item.options" :key="option.value">
                    <el-option :label="option.label" :value="option.value" />
                  </template>
                </el-select>
              </template>
              <template v-if="item.type === 'datepicker'">
                <el-date-picker v-bind="item.otherOptions"></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IFormItem } from '../type'

export default defineComponent({
  name: '',
  components: {},
  props: {
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
  }
})
</script>

<style lang="less" scoped>
.form {
  .el-form {
    padding: 30px 0;
  }
}
</style>
