import { Module } from 'vuex'
import { IRootState } from '../../type'
import { IProductState } from './type'

import { uploadImg } from '@/service/main/product/product'

const productModule: Module<IProductState, IRootState> = {
  namespaced: true,
  state() {
    return {
      name: ''
    }
  },
  actions: {
    async handleUpload() {
      await uploadImg()
    }
  }
}

export default productModule
