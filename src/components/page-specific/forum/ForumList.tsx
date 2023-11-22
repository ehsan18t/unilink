'use client'

import { useState, useEffect } from 'react'
import Button from '@/components/common/Button'
import Modal from '@/components/common/Modal'
import Input from '@/components/forms/Input'
import Select from '@/components/forms/Select'
import { UserType } from '@/enums'
import { useFormSubmit, useSharedModal } from '@/hooks'
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice'
import {
  useRetrieveForumListQuery,
  useRegisterForumMutation,
  useRetrieveForumCategoryQuery,
} from '@/redux/features/forumApiSlice'
import { ForumCategory } from '@/types'
import Link from 'next/link'

const ForumList = () => {
  const { data: list, isLoading, isError } = useRetrieveForumListQuery()
  const { data: categoryList } = useRetrieveForumCategoryQuery()
  const [register] = useRegisterForumMutation()
  const { data: user } = useRetrieveUserQuery()
  const { updateModalState } = useSharedModal()
  const [options, setOptions] = useState([])

  useEffect(() => {
    if (categoryList) {
      const forumCategoryOptions: any = [
        {
          value: 0,
          label: 'Select a Category',
          isEnabled: true,
        },
        ...categoryList.map((category: ForumCategory) => ({
          value: category.id,
          label: category.title,
          isEnabled: true,
        })),
      ]
      setOptions(forumCategoryOptions)
    }
  }, [categoryList])

  const initialFormData = {
    title: '',
    description: '',
    category_id: '',
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
    <div className="w-full h-full bg-white border-r border-gray-300 p-4 rounded">
      <h2 className="text-xl font-semibold mb-4">Forum List</h2>
      {user && user.user_type < UserType.REPRESENTATIVE && (
        <>
          <Modal
            sizeClass="w-2/5 space-y-4"
            buttonClass="m-5"
            text="Create Forum"
            title="Create Forum"
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
            <Select
              key="category_id"
              labelId="category_id"
              onChange={onChange}
              value={formData.category_id}
              required={true}
              options={options}
            >
              Category
            </Select>
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
        {list?.map((forum) => (
          <Link
            key={forum.id}
            href={`/l/forum/${forum.id}`}
            className="no-underline flex flex-col items-start space-x-2 p-2 bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer"
          >
            <div className="text-lg text-gray-700 p-1">{forum.title}</div>
            <div className="text-sm text-gray-500 text-justify py-1">
              {forum.description}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ForumList
