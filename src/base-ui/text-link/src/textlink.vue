<template>
  <div class="text-link">
    <template v-for="(item, index) in textArrs" :key="index">
      <div class="item">
        <span class="title">{{ item.title }}</span>
        <el-link type="primary">{{ item.desp }}</el-link>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import type { LinkProp } from '../type'

export default defineComponent({
  name: '',
  components: {},
  props: {
    textArrs: {
      type: Array as PropType<LinkProp[]>,
      default: () => []
    }
  }
})
</script>

<style lang="less" scoped>
.text-link {
  padding: 0 15px;
  margin-bottom: 40px;
  text-align: left;

  .item {
    margin: 5px;
  }

  .title {
    position: relative;
    display: inline-block;
    margin-right: 20px;
  }

  .title::before {
    position: absolute;
    top: 40%;
    left: -15px;
    width: 5px;
    height: 5px;
    background: black;
    border-radius: 100%;
    content: '';
  }
}
</style>
