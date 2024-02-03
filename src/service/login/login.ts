import { AxiosHeaders } from 'axios'
import instance from '..'

import { Account } from '@/views/login/types'
import { IDataType, IloginInfo } from './type'

enum loginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  LoginUserMenu = '/role/'
}

//用户登录
export const accountLoginRequest = (payload: Account) => {
  return instance.post<IDataType<IloginInfo>>({
    url: loginAPI.AccountLogin,
    data: payload,
    headers: new AxiosHeaders()
  })
}

//用户信息
export const getUserInfoById = (id: number) => {
  return instance.get<IDataType>({
    url: loginAPI.LoginUserInfo + id,
    headers: new AxiosHeaders(),
    isLoading: false
  })
}

//用户对应角色的菜单树
export const getUserMemu = (roleId: number) => {
  return instance.get<IDataType>({
    url: loginAPI.LoginUserMenu + roleId + '/menu',
    headers: new AxiosHeaders(),
    isLoading: false
  })
}
