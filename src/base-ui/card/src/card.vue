<template>
  <div class="card">
    <el-card class="card">
      <template #header>
        <span>{{ title }}</span>
      </template>
      <div class="content">
        <slot></slot>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: '',
  components: {},
  props: {
    title: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="less" scoped>
.card {
  margin-bottom: 20px;
}
.content {
  margin-bottom: 10px;
}
</style>
