import type { ILoginState } from './login/type'
import type { ISystemState } from './main/system/type'
import type { IPageQueryState } from './page-query/type'
import type { IAnalysisState } from './main/analysis/type'

export interface IRootState {
  entireRoleList: any[]
  entireDepartmentList: any[]
  entireMenuList: any[]
}

export interface IRootWithModule {
  loginModule: ILoginState
  systemModule: ISystemState
  pageQueryModule: IPageQueryState
  analysisModule: IAnalysisState
}

export type IStore = IRootState & IRootWithModule
