import { Module } from 'vuex'
import { ILoginState } from './type'
import { IRootState } from '../type'

import { Account } from '@/views/login/types'

import { accountLoginRequest, getUserInfoById, getUserMemu } from '@/service/login/login'

import localCache from '@/utils/cache'

import router from '@/router'

import { menuMapToRoutes } from '@/utils/mapMemu'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: '',
      userMenus: []
    }
  },
  mutations: {
    changeToken(state, token: any) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
      const routes = menuMapToRoutes(userMenus)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    }
  },
  actions: {
    async accountToLogin({ commit }, account: Account) {
      // 1.用户登录
      const result = await accountLoginRequest(account)
      const { id, token } = result.data
      commit('changeToken', token)
      localCache.setCache('token', token)
      //2.获取用户信息
      const userInfo = await getUserInfoById(id)
      commit('changeUserInfo', userInfo.data)
      localCache.setCache('userInfo', userInfo.data)
      //3.获取用户角色
      const userMenus = await getUserMemu(userInfo.data.role.id)
      commit('changeUserMenus', userMenus.data)
      localCache.setCache('userMenus', userMenus.data)
      //4.跳转首页
      router.push('/main')
    },
    loadLocalCache({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule
