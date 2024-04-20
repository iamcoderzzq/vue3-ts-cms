<template>
  <div class="table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <el-table
      border
      :data="pageListData"
      @selection-change="handleSelectionChange"
      show-overflow-tooltip
      v-bind="childrenProps"
      style="width: 98%; margin: auto"
    >
      <el-table-column
        v-if="isShowIndexCol"
        type="selection"
        align="center"
        width="55"
      ></el-table-column>
      <el-table-column
        v-if="isShowSelectCol"
        type="index"
        label="序号"
        align="center"
        width="60"
      ></el-table-column>
      <template v-for="(item, index) in propList" :key="index">
        <el-table-column
          :label="item.label"
          :prop="item.prop"
          :min-width="item.minWidth"
          align="center"
        >
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">{{ scope.row[item.prop] }}</slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" v-if="isShowPagination">
      <slot name="footer">
        <el-pagination
          :page-size="page.pageSize"
          :current-page="page.currentPage"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :total="totalCount"
          :page-sizes="[10, 20]"
          layout="total, sizes, prev, pager, next, jumper"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: '',
  components: {},
  props: {
    title: {
      type: String,
      default: '表格数据'
    },
    propList: {
      type: Array as PropType<any[]>,
      default: () => []
    },
    pageListData: {
      type: Array as PropType<any[]>,
      default: () => []
    },
    isShowIndexCol: {
      type: Boolean,
      default: true
    },
    isShowSelectCol: {
      type: Boolean,
      default: true
    },
    isShowPagination: {
      type: Boolean,
      default: true
    },
    totalCount: {
      type: Number,
      required: true
    },
    page: {
      type: Object,
      default: () => ({
        currentPage: 1,
        pageSize: 10
      })
    },
    childrenProps: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['update:page'],
  setup(props, { emit }) {
    const handleSelectionChange = (value: any) => {
      console.log(value)
    }

    const handleSizeChange = (pageSize: number) => {
      emit('update:page', { ...props.page, pageSize })
    }

    const handleCurrentChange = (currentPage: number) => {
      emit('update:page', { ...props.page, currentPage })
    }
    return {
      handleSelectionChange,
      handleSizeChange,
      handleCurrentChange
    }
  }
})
</script>

<style lang="less" scoped>
.table {
  background-color: #fff;
  padding-bottom: 10px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0 20px;
    .title {
      font-size: 20px;
      font-weight: 700;
    }
  }
  .footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    padding: 0 20px;
  }
}
</style>
