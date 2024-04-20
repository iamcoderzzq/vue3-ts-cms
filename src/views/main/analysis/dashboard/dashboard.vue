<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <template v-for="item in goodsAmountList" :key="item.amount">
        <el-col v-bind="colLayout">
          <div class="statistic-card">
            <statistical-panel :panelInfo="item" />
          </div>
        </el-col>
      </template>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="7">
        <my-card title="分类商品数量(饼图)">
          <pie-echart :pieData="categoryGoodsCount"></pie-echart>
        </my-card>
      </el-col>
      <el-col :span="10">
        <my-card title="不同城市商品销量">
          <map-echart :mapData="addressGoodsSale"></map-echart>
        </my-card>
      </el-col>
      <el-col :span="7">
        <my-card title="分类商品数量(玫瑰图)">
          <rose-echart :roseData="categoryGoodsCount"></rose-echart>
        </my-card>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="row">
      <el-col :span="12">
        <my-card title="分类商品的销量">
          <line-echart v-bind="categoryGoodsSale"></line-echart>
        </my-card>
      </el-col>
      <el-col :span="12">
        <my-card title="分类商品的收藏">
          <bar-echart v-bind="categoryGoodsFavor"></bar-echart>
        </my-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import StatisticalPanel from '@/components/statistical-panel'
import MyCard from '@/base-ui/card'
import { PieEchart, MapEchart, RoseEchart, LineEchart, BarEchart } from '@/components/page-charts'

import { useStore } from '@/store'
export default defineComponent({
  name: 'dashboard',
  components: {
    StatisticalPanel,
    MyCard,
    PieEchart,
    MapEchart,
    RoseEchart,
    LineEchart,
    BarEchart
  },
  setup() {
    const store = useStore()
    store.dispatch('analysisModule/getAnalysisDataAction')
    const goodsAmountList = computed(() => store.state.analysisModule.goodsAmountList)
    const colLayout = {
      xs: 24,
      sm: 24,
      md: 12,
      lg: 6,
      xl: 6
    }

    const categoryGoodsCount = computed(() => {
      return store.state.analysisModule.categoryGoodsCount.map((item: any) => {
        return { value: item.goodsCount, name: item.name }
      })
    })

    const categoryGoodsSale = computed(() => {
      const goodsSale = store.state.analysisModule.categoryGoodsSale
      const labels: string[] = []
      const values: any[] = []
      for (const item of goodsSale) {
        labels.push(item.name)
        values.push(item.goodsCount)
      }
      return { labels, values }
    })

    const addressGoodsSale = computed(() => {
      return store.state.analysisModule.goodsAddressSale.map((item: any) => {
        return { name: item.address, value: item.count }
      })
    })

    const categoryGoodsFavor = computed(() => {
      const goodsFavor = store.state.analysisModule.categoryGoodsFavor
      const labels: string[] = []
      const values: any[] = []
      for (const item of goodsFavor) {
        labels.push(item.name)
        values.push(item.goodsFavor)
      }
      return { labels, values }
    })

    return {
      goodsAmountList,
      colLayout,
      categoryGoodsCount,
      categoryGoodsSale,
      addressGoodsSale,
      categoryGoodsFavor
    }
  }
})
</script>

<style scoped>
.statistic-card {
  border-radius: 5px;
  background: #fff;
  margin-bottom: 10px;
}
.row {
  margin-top: 20px;
}
</style>
