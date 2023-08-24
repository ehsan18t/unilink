'use client'

import { useRetrieveDepartmentQuery } from '@/redux/features/departmentApiSlice'
import DepartmentItem from '@/components/page-specific/department/DepartmentItem'
import ListContainer from '@/components/common/ListContainer'
import Modal from '@/components/common/Modal'
import Input from '@/components/forms/Input'
import Button from '@/components/common/Button'
import { useCreateDepartment, useSharedModal } from '@/hooks'

const DepartmentList = () => {
  const { data: departments, isLoading, isError } = useRetrieveDepartmentQuery()
  const { department_name, department_code, onChange, onSubmit } =
    useCreateDepartment()

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
          labelId="department_name"
          type="text"
          onChange={onChange}
          value={department_name}
          required={true}
          className="mb-5 w-full"
        >
          Department Name
        </Input>
        <Input
          key="department_code"
          labelId="department_code"
          type="text"
          onChange={onChange}
          value={department_code}
          required={true}
        >
          CodeName
        </Input>
        <div className="flex flex-col items-center">
          <Button
            onClick={(e: any) => {
              onSubmit(e)
              updateModalState(false)
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
