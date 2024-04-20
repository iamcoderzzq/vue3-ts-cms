import { createStore, useStore as vuexStore } from 'vuex'
import { IRootState, IStore } from './type'

import loginModule from './login/login'
import systemModule from './main/system/system'
import pageQueryModule from './page-query/page-query'
import productModule from './main/product/product'
import analysisModule from './main/analysis/analysis'

import { getPageList } from '@/service/main/system/system'

const store = createStore<IRootState>({
  state() {
    return {
      entireRoleList: [],
      entireDepartmentList: [],
      entireMenuList: []
    }
  },
  mutations: {
    changeEntireRoleList(state, list: any[]) {
      state.entireRoleList = list
    },
    changeEntireDepartmentList(state, list: any[]) {
      state.entireDepartmentList = list
    },
    changeEntireMenuList(state, list: any[]) {
      state.entireMenuList = list
    }
  },
  actions: {
    async getInitialData({ commit }) {
      const roleResult = await getPageList('role/list', { offset: 0, size: 100 })
      const { list: entireRoleList } = roleResult.data
      const departmentResult = await getPageList('department/list', {
        offset: 0,
        size: 100
      })
      const { list: entireDepartmentList } = departmentResult.data
      const menuResult = await getPageList('menu/list', { offset: 0, size: 100 })
      const { list: entireMenuList } = menuResult.data
      commit('changeEntireRoleList', entireRoleList)
      commit('changeEntireDepartmentList', entireDepartmentList)
      commit('changeEntireMenuList', entireMenuList)
    }
  },
  modules: {
    loginModule,
    systemModule,
    pageQueryModule,
    productModule,
    analysisModule
  }
})

export const setupStore = () => {
  store.dispatch('loginModule/loadLocalCache')
}

// export const useStore = (): Store<IStore> => {
//   return vuexStore<IStore>()
// }

export const useStore = () => {
  return vuexStore<IStore>()
}

export default store
