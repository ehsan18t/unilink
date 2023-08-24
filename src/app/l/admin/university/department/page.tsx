'use client'

import {
  useRetrieveDepartmentQuery,
  useRealTimeDepartmentUpdates,
} from '@/redux/features/departmentApiSlice'
import DepartmentItem from '@/components/page-specific/department/DepartmentItem'
import ListContainer from '@/components/common/ListContainer'
import Modal from '@/components/common/Modal'
import Input from '@/components/forms/Input'
import Button from '@/components/common/Button'
import { useSharedModal, useFormSubmit } from '@/hooks'
import { useRegisterDepartmentMutation } from '@/redux/features/departmentApiSlice'

const DepartmentList = () => {
  const { departments, isLoading, isError } = useRealTimeDepartmentUpdates()
  const [register] = useRegisterDepartmentMutation()

  const initialFormData = {
    name: '',
    code: '',
  }

  const { formData, onChange, onSubmit, updateFormData } = useFormSubmit(
    register,
    initialFormData,
  )

  const { updateModalState } = useSharedModal()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error: Fetch Failed!</div>
  }

  return (
    <div className="px-5">
      <Modal
        sizeClass="w-1/4"
        buttonClass="m-5"
        text="Add Department"
        title="Add Department"
      >
        <Input
          key="department_name"
          labelId="name"
          type="text"
          onChange={onChange}
          value={formData.name}
          required={true}
          className="mb-5 w-full"
        >
          Department Name
        </Input>
        <Input
          key="department_code"
          labelId="code"
          type="text"
          onChange={onChange}
          value={formData.code}
          required={true}
        >
          CodeName
        </Input>
        <div className="flex flex-col items-center">
          <Button
            onClick={async (e: any) => {
              const res = await onSubmit(e)
              if (res?.data?.id) {
                updateModalState(false)
                updateFormData(initialFormData)
              }
            }}
            className="mt-5"
          >
            Add Department
          </Button>
        </div>
      </Modal>
      {!isLoading && (
        <ListContainer items={departments} ItemComponent={DepartmentItem} />
      )}
    </div>
  )
}

export default DepartmentList
