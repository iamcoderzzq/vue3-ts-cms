import { AxiosHeaders } from 'axios'
import instance from '../../'

export const getPageList = (url: string, data: any) => {
  return instance.post({
    url,
    data,
    headers: new AxiosHeaders()
  })
}

export const deletePageItem = (url: string) => {
  return instance.delete({
    url,
    headers: new AxiosHeaders()
  })
}

export const addPageItem = (url: string, data: any) => {
  return instance.post({
    url,
    data,
    headers: new AxiosHeaders()
  })
}

export const editPageItem = (url: string, data: any) => {
  return instance.patch({
    url,
    data,
    headers: new AxiosHeaders()
  })
}
