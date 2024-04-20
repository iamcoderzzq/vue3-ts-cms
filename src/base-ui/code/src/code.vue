<template>
  <div class="my-code">
    <pre class="bg">
      <code :class="'language'+language" v-html="highlightedCode" />
    </pre>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'

export default defineComponent({
  name: '',
  components: {},
  props: {
    language: {
      type: String,
      default: 'html'
    },
    code: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const highlightedCode = ref<string>('')
    watchEffect(() => {
      // highlightedCode.value = hljs.highlight(props.code, { language: props.language }).value
      highlightedCode.value = props.code
    })
    return { highlightedCode }
  }
})
</script>

<style lang="less" scoped>
.bg {
  padding: 10px;
  text-align: left;
  background: #f0f0f0;
}
</style>
