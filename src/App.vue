<template>
  <div>
    <h2>{{ $store.state.name }}</h2>
    <h2>{{ store1.state.name }}</h2>
    <h3>{{ $store.state.age }}</h3>
    <h3>{{ $store.state.sex }}</h3>
    <h2>{{ shen }}</h2>
    <router-link to="login">login</router-link>
    <router-link to="main">main</router-link>
    <router-view></router-view>
    <el-button type="primary">primary</el-button>
    <el-button type="danger">danger</el-button>
    <el-button type="info">info</el-button>
    <el-button type="warning">warning</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'App',
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
