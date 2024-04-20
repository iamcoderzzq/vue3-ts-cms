import { ref } from 'vue'
import PageModal from '@/components/page-modal'
type CallbackFn = (item?: any) => void
export const usePageModal = (addCb?: CallbackFn, editCb?: CallbackFn): any => {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})
  const dialogTitle = ref()
  const handleAddClick = () => {
    dialogTitle.value = '新增'
    defaultInfo.value = {}
    pageModalRef.value!.dialogVisible = true
    addCb && addCb()
  }
  const handleEditClick = (item: any) => {
    dialogTitle.value = '编辑'
    defaultInfo.value = { ...item }
    pageModalRef.value!.dialogVisible = true
    editCb && editCb(item)
  }
  return [pageModalRef, defaultInfo, dialogTitle, handleAddClick, handleEditClick]
}
