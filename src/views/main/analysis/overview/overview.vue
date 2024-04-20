<template>
  <div class="overview">
    <my-card title="关于">
      <div class="c-left">
        Vue3Admin 是基于 Vue3、Vuex、VueRouter、Vite、 ElementPlus 、TypeScript、Echart5
        等后台系统解决方案。
      </div>
    </my-card>
    <my-card title="技术栈">
      <my-text-link :textArrs="technologyStacks" />
      <my-descriptions title="生产环境依赖" :column="2" :tableDatas="dependencies" />
      <my-descriptions title="生产环境依赖" :column="2" :tableDatas="devDependencies" />
    </my-card>
    <my-card title="项目结构">
      <my-code language="bash" :code="projectDir"></my-code>
    </my-card>
    <my-card title="项目规范">
      <my-descriptions title="文件命名规范" :column="1" :tableDatas="nameRule" />
      <my-descriptions title="编写组件规范" :column="1" :tableDatas="componentRule" />
    </my-card>
    <my-card title="Git提交规范">
      <my-descriptions :column="1" :table-datas="commitRule" />
    </my-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyCard from '@/base-ui/card'
import MyTextLink from '@/base-ui/text-link'
import MyDescriptions from '@/base-ui/descriptions'
import MyCode from '@/base-ui/code'

import { technologyStacks } from './config/technology-stacks'
import { dependencies } from './config/dependencies'
import { devDependencies } from './config/dev-dependencies'
import { projectDir } from './config/project-dir'
import { nameRule } from './config/name-rule'
import { componentRule } from './config/component-rule'
import { commitRule } from './config/commit-rule'

export default defineComponent({
  name: 'overview',
  components: {
    MyCard,
    MyTextLink,
    MyDescriptions,
    MyCode
  },
  setup() {
    return {
      technologyStacks,
      dependencies,
      devDependencies,
      projectDir,
      nameRule,
      componentRule,
      commitRule
    }
  }
})
</script>

<style scoped lang="less">
.overview {
  .c-left {
    text-align: left;
  }
  .el-card {
    margin-bottom: 20px;
    &:deep(.el-card__header span) {
      font-weight: 700;
    }
  }

  .description {
    &:deep(.el-descriptions__title) {
      font-weight: 400;
    }
  }
}
</style>
