import { AxiosHeaders } from 'axios'
import { instanceImg } from '@/service'

export const uploadImg = () => {
  return instanceImg.post({
    headers: new AxiosHeaders()
  })
}
