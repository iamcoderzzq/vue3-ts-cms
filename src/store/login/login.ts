import { Module } from 'vuex'
import { ILoginState } from './type'
import { IRootState } from '../type'

import { Account } from '@/views/login/types'

import { accountLoginRequest, getUserInfoById, getUserMemu } from '@/service/login/login'

import localCache from '@/utils/cache'

import router from '@/router'

import { menuMapToRoutes, menuMapToPermissions } from '@/utils/mapMemu'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: '',
      userMenus: [],
      permissions: []
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
      //动态添加路由
      const routes = menuMapToRoutes(userMenus)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
      //获取权限数组
      const permissions = menuMapToPermissions(userMenus)
      state.permissions = permissions
    }
  },
  actions: {
    async accountToLogin({ commit, dispatch }, account: Account) {
      // 1.用户登录
      const result = await accountLoginRequest(account)
      const { id, token } = result.data
      commit('changeToken', token)
      localCache.setCache('token', token)
      //2.获取用户信息
      const userInfo = await getUserInfoById(id)
      commit('changeUserInfo', userInfo.data)
      localCache.setCache('userInfo', userInfo.data)
      //3.获取用户菜单
      const userMenus = await getUserMemu(userInfo.data.role.id)
      commit('changeUserMenus', userMenus.data)
      localCache.setCache('userMenus', userMenus.data)
      //4.获取所有角色 部门列表 菜单列表（用于点击新建按钮时的select选项）
      dispatch('getInitialData', null, { root: true })
      //5.跳转首页
      router.push('/main')
    },
    loadLocalCache({ commit, dispatch }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
        //获取所有角色 部门列表 菜单列表（用于点击新建按钮时的select选项）
        dispatch('getInitialData', null, { root: true })
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
