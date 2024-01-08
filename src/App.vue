<template>
  <div>
    <h2>{{ $store.state.name }}</h2>
    <h2>{{ store1.state.name }}</h2>
    <h2>{{ shen }}</h2>
    <router-link to="login">login</router-link>
    <router-link to="main">main</router-link>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    const store1 = useStore()
    const shen = 9
    return {
      store1,
      shen
    }
  }
})
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
