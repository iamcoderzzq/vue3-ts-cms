<template>
  <div class="user">
    <my-form v-bind="searchConfig" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyForm from '@/base-ui/form'

import { searchConfig } from './config/searchConfig'

export default defineComponent({
  name: 'user',
  components: {
    MyForm
  },
  setup() {
    return {
      searchConfig
    }
  }
})
</script>

<style scoped>
.user {
  background-color: #fff;
  border-radius: 15px;
}
</style>
