import { useStore } from '@/store'

export const usePermission = (pageName: string, handle: string) => {
  const permission = `system:${pageName}:${handle}`
  const store = useStore()
  return store.state.loginModule.permissions.includes(permission)
}
