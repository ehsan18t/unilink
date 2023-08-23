'use client'

import { useState, useEffect } from 'react'
import CourseItem from '@/components/page-specific/course/CourseItem'
import ListContainer from '@/components/common/ListContainer'
import Modal from '@/components/common/Modal'
import Input from '@/components/forms/Input'
import Select from '@/components/forms/Select'
import Button from '@/components/common/Button'
import { useSharedModal, useFormSubmit } from '@/hooks'
import {
  useRegisterCourseMutation,
  useRetrieveCourseQuery,
} from '@/redux/features/courseApiSlice'
import { useRetrieveDepartmentQuery } from '@/redux/features/departmentApiSlice'
import { Department } from '@/types'

interface Option {
  value: number
  label: string
  isEnabled: boolean
}

const CourseList = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('0')
  const { data: courses, isLoading, isError } = useRetrieveCourseQuery()
  const { data: departments } = useRetrieveDepartmentQuery()

  // Initialize the options state with the initial value
  const [options, setOptions] = useState<Option[]>([
    {
      value: 0,
      label: 'Select a Department',
      isEnabled: true,
    },
  ])

  useEffect(() => {
    if (departments) {
      const updatedOptions = [
        {
          value: 0,
          label: 'Select a Department',
          isEnabled: true,
        },
        ...departments.map((item: Department) => ({
          value: item.id,
          label: item.name,
          isEnabled: true,
        })),
      ]
      setOptions(updatedOptions)
    }
  }, [departments])

  const [register] = useRegisterCourseMutation()

  const initialFormData = {
    name: '',
    code: '',
    credit: 0,
    type: '',
    department_id: '',
  }

  const courseTypeOptions = [
    {
      value: 0,
      label: 'Select a Type',
      isEnabled: true,
    },
    {
      value: 1,
      label: 'Theory',
      isEnabled: true,
    },
    {
      value: 2,
      label: 'Lab',
      isEnabled: true,
    },
  ]

  const { formData, onChange, onSubmit, updateFormData } = useFormSubmit(
    register,
    initialFormData,
  )

  useEffect(() => {
    setSelectedDepartment(formData.department_id)
  }, [formData])

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
        sizeClass="w-2/5 space-y-4"
        buttonClass="m-5"
        text="Add Course"
        title="Add Course"
      >
        <Input
          key="course_name"
          labelId="name"
          type="text"
          onChange={onChange}
          value={formData.name}
          required={true}
          className="mb-5 w-full"
        >
          Course Name
        </Input>
        <Input
          key="course_code"
          labelId="code"
          type="text"
          onChange={onChange}
          value={formData.code}
          required={true}
        >
          Course Code
        </Input>
        <Select
          key="type"
          labelId="type"
          onChange={onChange}
          value={formData.type}
          required={true}
          options={courseTypeOptions}
        >
          Course Type
        </Select>
        <Input
          key="course_credit"
          labelId="credit"
          type="number"
          onChange={onChange}
          value={formData.credit}
          required={true}
        >
          Credit
        </Input>
        <Select
          key="department"
          labelId="department_id"
          onChange={onChange}
          value={selectedDepartment}
          required={true}
          options={options}
        >
          Department
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
            Add Course
          </Button>
        </div>
      </Modal>
      {!isLoading && (
        <ListContainer items={courses} ItemComponent={CourseItem} />
      )}
    </div>
  )
}

export default CourseList
