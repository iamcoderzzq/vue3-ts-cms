import instance from '@/service'
import { AxiosHeaders } from 'axios'

enum AnalysisAPI {
  amountList = '/goods/amount/list',
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  // goodsSaleTop10 = '/goods/sale/top10',
  goodsAddressSale = '/goods/address/sale'
}

export const getAmountList = () => {
  return instance.get({
    url: AnalysisAPI.amountList,
    headers: new AxiosHeaders()
  })
}

export const getCategoryGoodsCount = () => {
  return instance.get({
    url: AnalysisAPI.categoryGoodsCount,
    headers: new AxiosHeaders()
  })
}

export const getCategoryGoodsSale = () => {
  return instance.get({
    url: AnalysisAPI.categoryGoodsSale,
    headers: new AxiosHeaders()
  })
}

export const getCategoryGoodsFavor = () => {
  return instance.get({
    url: AnalysisAPI.categoryGoodsFavor,
    headers: new AxiosHeaders()
  })
}

export const getGoodsAddressSale = () => {
  return instance.get({
    url: AnalysisAPI.goodsAddressSale,
    headers: new AxiosHeaders()
  })
}
