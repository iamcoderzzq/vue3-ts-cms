import { Module } from 'vuex'
import { IRootState } from '../../type'
import { IAnalysisState } from './type'

import {
  getAmountList,
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getGoodsAddressSale
} from '@/service/main/analysis/analysis'

const analysisModule: Module<IAnalysisState, IRootState> = {
  namespaced: true,
  state() {
    return {
      goodsAmountList: [],
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      goodsAddressSale: []
    }
  },
  mutations: {
    changeGoodsAmount(state, list: any[]) {
      state.goodsAmountList = list
    },
    changeCategoryGoodsCount(state, list: any[]) {
      state.categoryGoodsCount = list
    },
    changeCategoryGoodsSale(state, list: any[]) {
      state.categoryGoodsSale = list
    },
    changeCategoryGoodsFavor(state, list: any[]) {
      state.categoryGoodsFavor = list
    },
    changeGoodsAddressSale(state, list: any[]) {
      state.goodsAddressSale = list
    }
  },
  actions: {
    async getAnalysisDataAction({ commit }) {
      const amountList = await getAmountList()
      commit('changeGoodsAmount', amountList.data)

      const goodsCount = await getCategoryGoodsCount()
      commit('changeCategoryGoodsCount', goodsCount.data)

      const goodsSale = await getCategoryGoodsSale()
      commit('changeCategoryGoodsSale', goodsSale.data)

      const goodsFavor = await getCategoryGoodsFavor()
      commit('changeCategoryGoodsFavor', goodsFavor.data)

      const addressSasle = await getGoodsAddressSale()
      commit('changeGoodsAddressSale', addressSasle.data)
    }
  }
}

export default analysisModule
