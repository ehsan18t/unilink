'use client'

import { useRetrieveDepartmentByUniversityQuery } from '@/redux/features/departmentApiSlice'
import { useEffect, useState } from 'react'
import { Select } from '@/components/forms'

const SelectForRegister = ({ university_id, onChange, value }: any) => {
  const { data } = useRetrieveDepartmentByUniversityQuery(university_id)
  const [options, setOptions] = useState([
    {
      value: 0,
      label: 'Select a department',
      isEnabled: true,
    },
  ])

  useEffect(() => {
    if (data) {
      const updatedOptions = [
        {
          value: 0,
          label: 'Select a department',
          isEnabled: true,
        },
        ...data.map((item: any) => ({
          value: item.id,
          label: item.name,
          isEnabled: true,
        })),
      ]
      setOptions(updatedOptions)
    }
  }, [data])

  console.log('departmentList', data)
  console.log('university_id', university_id)

  return (
    <>
      <Select
        key="department"
        labelId="department"
        onChange={onChange}
        value={value}
        required={true}
        options={options}
      >
        Department
      </Select>
    </>
  )
}

export default SelectForRegister
