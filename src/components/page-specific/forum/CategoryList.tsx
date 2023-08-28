'use client'

import {
  useRetrieveForumCategoryQuery,
  useRegisterCategoryMutation,
} from '@/redux/features/forumApiSlice'
import Link from 'next/link'
import Modal from '@/components/common/AnotherAnotherModal'
import Input from '@/components/forms/Input'
import Button from '@/components/common/Button'
import { UserType } from '@/enums'
import { useFormSubmit, useSharedModal } from '@/hooks'
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice'

const CategoryList = () => {
  const { data: list, isLoading, isError } = useRetrieveForumCategoryQuery()
  const [register] = useRegisterCategoryMutation()
  const { data: user } = useRetrieveUserQuery()
  const { updateModalState } = useSharedModal()

  const initialFormData = {
    title: '',
    description: '',
  }

  const { formData, onChange, onSubmit, updateFormData } = useFormSubmit(
    register,
    initialFormData,
  )

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error</div>
  }

  return (
    <div className="w-1/4 bg-white border-r border-gray-300 p-4">
      <h2 className="text-xl font-semibold mb-4">Forum Category</h2>
      {user && user.user_type < UserType.REPRESENTATIVE && (
        <>
          <Modal
            modalKey="create-category"
            sizeClass="w-2/5 space-y-4"
            buttonClass="m-5"
            text="Create Category"
            title="Create Category"
          >
            <Input
              key="title"
              labelId="title"
              type="text"
              onChange={onChange}
              value={formData.title}
              required={true}
              className="mb-5 w-full"
            >
              Title
            </Input>
            <Input
              key="description"
              labelId="description"
              type="text"
              onChange={onChange}
              value={formData.description}
              required={true}
            >
              Descriptions
            </Input>
            <div className="flex flex-col items-center">
              <Button
                onClick={async (e: any) => {
                  const res = await onSubmit(e)
                  if (res?.data?.id) {
                    updateModalState(false)
                    updateFormData(initialFormData)
                    // refresh
                    window.location.reload()
                  }
                }}
                className="mt-5"
              >
                Add Forum
              </Button>
            </div>
          </Modal>
        </>
      )}
      <div className="space-y-2">
        {list?.map((category) => (
          <Link
            key={category.id}
            href="#"
            className="no-underline flex text-lg text-gray-700 items-center space-x-2 p-2 bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer"
          >
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryList
