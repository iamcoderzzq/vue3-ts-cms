<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="breadcrumb in breadcrumbs" :key="breadcrumb.name">
        <el-breadcrumb-item>{{ breadcrumb.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: '',
  components: {},
  props: {
    breadcrumbs: {
      type: Array as PropType<any>,
      default: () => []
    }
  }
})
</script>

<style lang="less" scoped></style>
