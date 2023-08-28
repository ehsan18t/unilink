'use client'

import FacultyItem from '@/components/page-specific/faculty/FacultyItem'
import ListContainer from '@/components/common/ListContainer'
import Modal from '@/components/common/Modal'
import Input from '@/components/forms/Input'
import Button from '@/components/common/Button'
import {
  useRegisterFacultyMutation,
  useRealTimeFacultyListUpdates,
} from '@/redux/features/universityApiSlice'
import { useSharedModal, useFormSubmit } from '@/hooks'

const FacultyList = () => {
  const { facultyList, isLoading, isError } = useRealTimeFacultyListUpdates()
  const [register] = useRegisterFacultyMutation()

  const initialFormData = {
    first_name: '',
    last_name: '',
    username: '',
    email: '',
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
        text="Add Faculty"
        title="Add Faculty"
      >
        <Input
          key="first_name"
          labelId="first_name"
          type="text"
          onChange={onChange}
          value={formData.first_name}
          required={true}
          className="mb-5 w-full"
        >
          First Name
        </Input>
        <Input
          key="last_name"
          labelId="last_name"
          type="text"
          onChange={onChange}
          value={formData.last_name}
          required={true}
        >
          Last Name
        </Input>
        <Input
          key="username"
          labelId="username"
          type="text"
          onChange={onChange}
          value={formData.username}
          required={true}
        >
          Username
        </Input>
        <Input
          key="email"
          labelId="email"
          type="text"
          onChange={onChange}
          value={formData.email}
          required={true}
        >
          Email
        </Input>
        <div className="flex flex-col items-center">
          <Button
            onClick={async (e: any) => {
              const res = await onSubmit(e)
              if (res?.data?.status === 'success') {
                updateModalState(false)
                updateFormData(initialFormData)
              }
            }}
            className="mt-5"
          >
            Add Faculty
          </Button>
        </div>
      </Modal>
      {!isLoading && (
        <ListContainer items={facultyList} ItemComponent={FacultyItem} />
      )}
    </div>
  )
}

export default FacultyList
