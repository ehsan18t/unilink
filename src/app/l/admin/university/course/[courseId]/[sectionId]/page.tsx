'use client'

import { useState, useEffect } from 'react'
import { useRetrieveFacultyListQuery } from '@/redux/features/universityApiSlice'
import { useRetrieveSectionQuery } from '@/redux/features/sectionApiSlice'
import SectionItem from '@/components/page-specific/section/SectionItem'
import ListContainer from '@/components/common/ListContainer'
import Modal from '@/components/common/Modal'
import Select from '@/components/forms/Select'
import Button from '@/components/common/Button'
import { useSharedModal, useFormSubmit } from '@/hooks'
import { useAddFacultyToSectionMutation } from '@/redux/features/sectionApiSlice'
import { useParams } from 'next/navigation'
import { User } from '@/types'

interface Option {
  value: number
  label: string
  isEnabled: boolean
}

const SectionList = () => {
  const params = useParams()
  const section_id = params.sectionId
  const { data: facultyList } = useRetrieveFacultyListQuery()

  const {
    data: section,
    isLoading,
    isError,
  } = useRetrieveSectionQuery(Number(section_id))
  const [register] = useAddFacultyToSectionMutation()

  // add to array
  //

  const [userList, setUserList] = useState<User[]>([])

  useEffect(() => {
    if (section) {
      setUserList([...section.faculty, ...section.students])
    }
  }, [section])

  const initialFormData = {
    faculty_id: '',
    section_id: section_id,
  }

  const { formData, onChange, onSubmit, updateFormData } = useFormSubmit(
    register,
    initialFormData,
  )

  const [options, setOptions] = useState<Option[]>([
    {
      value: 0,
      label: 'Select a Faculty',
      isEnabled: true,
    },
  ])

  useEffect(() => {
    if (facultyList) {
      const updatedOptions = [
        {
          value: 0,
          label: 'Select a Faculty',
          isEnabled: true,
        },
        ...facultyList.map((item: User) => ({
          value: item.id,
          label:
            item.first_name + ' ' + item.last_name + ' [' + item.email + ']',
          isEnabled: true,
        })),
      ]
      setOptions(updatedOptions)
    }
  }, [facultyList])

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
        <Select
          key="faculty_id"
          labelId="faculty_id"
          onChange={onChange}
          value={formData.faculty_id}
          required={true}
          options={options}
        >
          Faculty
        </Select>
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
            Add Faculty
          </Button>
        </div>
      </Modal>
      {!isLoading && (
        <ListContainer items={userList} ItemComponent={SectionItem} />
      )}
    </div>
  )
}

export default SectionList
