export interface IloginInfo {
  id: number
  token: string
  name: string
}
export interface IDataType<T = any> {
  code: number
  data: T
}
