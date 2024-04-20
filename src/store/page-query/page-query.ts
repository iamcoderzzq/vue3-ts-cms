import { Module } from 'vuex'
import { IPageQueryState } from './type'
import { IRootState } from '../type'

const pageQueryModule: Module<IPageQueryState, IRootState> = {
  namespaced: true,
  state() {
    return {
      formData: {}
    }
  },
  mutations: {
    saveFormData(state, formData: any) {
      state.formData = formData
    }
  }
}

export default pageQueryModule
