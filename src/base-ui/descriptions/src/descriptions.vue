<template>
  <div class="descriptions">
    <el-descriptions :title="title" :column="column" border style="margin-top: 20px">
      <template v-for="(item, index) in tableDatas" :key="index">
        <el-descriptions-item>
          <template #label>{{ item.name }}</template>
          <el-tag size="small">{{ item.description }}</el-tag>
        </el-descriptions-item>
      </template>
    </el-descriptions>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import type { DescriptionProp } from '../type'

export default defineComponent({
  name: '',
  components: {},
  props: {
    title: {
      type: String,
      default: ''
    },
    column: {
      type: Number,
      default: 1
    },
    tableDatas: {
      type: Array as PropType<DescriptionProp[]>,
      default: () => []
    }
  }
})
</script>

<style lang="less" scoped></style>
