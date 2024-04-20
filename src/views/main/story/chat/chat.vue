<template>
  <div class="chat">
    <my-editor v-model:value="htmlString"></my-editor>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import MyEditor from '@/base-ui/editor'

export default defineComponent({
  name: 'chat',
  components: {
    MyEditor
  },
  setup() {
    const htmlString = ref<string>('say your story~')
    return { htmlString }
  }
})
</script>

<style scoped></style>
