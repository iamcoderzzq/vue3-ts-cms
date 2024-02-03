import type { ILoginState } from './login/type'

export interface IRootState {
  name: string
  age: number
}

export interface IRootWithModule {
  loginModule: ILoginState
}

export type IStore = IRootState & IRootWithModule
