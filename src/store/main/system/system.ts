import { Module } from 'vuex'
import { IRootState } from '../../type'
import { ISystemState } from './type'

import {
  getPageList,
  deletePageItem,
  addPageItem,
  editPageItem
} from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersTotalCount: 0,
      roleList: [],
      roleTotalCount: 0,
      goodsList: [],
      goodsTotalCount: 0,
      menuList: [],
      menuTotalCount: 0,
      departmentList: [],
      departmentTotalCount: 0,
      categoryList: [],
      categoryTotalCount: 0,
      storyList: [],
      storyTotalCount: 0
    }
  },
  getters: {
    getPageList(state) {
      return function (pageName: string) {
        return (state as any)[`${pageName}List`]
      }
    },
    getTotalCount(state) {
      return function (pageName: string) {
        return (state as any)[`${pageName}TotalCount`]
      }
    }
  },
  mutations: {
    changeUsersList(state, list: any[]) {
      state.usersList = list
    },
    changeUsersTotalCount(state, totalCount: number) {
      state.usersTotalCount = totalCount
    },
    changeRoleList(state, list: any[]) {
      state.roleList = list
    },
    changeRoleTotalCount(state, totalCount: number) {
      state.roleTotalCount = totalCount
    },
    changeGoodsList(state, list: any[]) {
      state.goodsList = list
    },
    changeGoodsTotalCount(state, totalCount: number) {
      state.goodsTotalCount = totalCount
    },
    changeMenuList(state, list: any[]) {
      state.menuList = list
    },
    changeMenuTotalCount(state, totalCount: number) {
      state.menuTotalCount = totalCount ?? 0
    },
    changeDepartmentList(state, list: any[]) {
      state.departmentList = list
    },
    changeDepartmentTotalCount(state, totalCount: number) {
      state.departmentTotalCount = totalCount
    },
    changeCategoryList(state, list: any[]) {
      state.categoryList = list
    },
    changeCategoryTotalCount(state, totalCount: number) {
      state.categoryTotalCount = totalCount
    },
    changeStoryList(state, list: any[]) {
      state.storyList = list
    },
    changeStoryTotalCount(state, totalCount: number) {
      state.storyTotalCount = totalCount
    }
  },
  actions: {
    async getPageData({ commit }, payload) {
      const pageName = payload.pageName
      const pageUrl = `${pageName}/list`

      const result = await getPageList(pageUrl, payload.queryInfo)
      const { list, totalCount } = result.data
      const fistLetterUpperPageName = pageName.slice(0, 1).toUpperCase() + pageName.slice(1)
      commit(`change${fistLetterUpperPageName}List`, list)
      commit(`change${fistLetterUpperPageName}TotalCount`, totalCount)
    },
    async deletePageData({ dispatch }, payload) {
      const pageName = payload.pageName
      const id = payload.id
      const pageUrl = `${pageName}/${id}`
      const result = await deletePageItem(pageUrl)
      if (result.code === 0) {
        dispatch('getPageData', {
          pageName,
          queryInfo: {
            offset: 0,
            size: 10
          }
        })
      }
      return result
    },
    async addPageData({ dispatch }, payload) {
      const pageName = payload.pageName
      const pageUrl = `${pageName}`
      const result = await addPageItem(pageUrl, payload.queryInfo)
      if (result.code === 0) {
        dispatch('getPageData', {
          pageName,
          queryInfo: {
            offset: 0,
            size: 10
          }
        })
      }
      return result
    },
    async editPageData({ dispatch }, payload) {
      const pageName = payload.pageName
      const id = payload.id
      const pageUrl = `${pageName}/${id}`
      const result = await editPageItem(pageUrl, payload.queryInfo)
      if (result.code === 0) {
        dispatch('getPageData', {
          pageName,
          queryInfo: {
            offset: 0,
            size: 10
          }
        })
      }
      return result
    }
  }
}

export default systemModule
