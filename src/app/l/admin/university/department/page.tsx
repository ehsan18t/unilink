'use client'

import React, { useEffect, useState } from 'react'
import { useRetrieveDepartmentQuery } from '@/redux/features/departmentApiSlice'
import DepartmentItem from '@/components/page-specific/department/DepartmentItem'
import List from '@mui/material/List'
import { Department } from '@/types'

const ApprovedUniversityList = () => {
  const [removedDepartment, setRemovedDepartment] = useState<
    Department | undefined
  >()
  const { data: departments, isLoading, isError } = useRetrieveDepartmentQuery()
  const [departmentList, setDepartmentList] = useState<
    Department[] | undefined
  >([])

  useEffect(() => {
    setDepartmentList(departments)
  }, [departments])

  useEffect(() => {
    if (removedDepartment) {
      setDepartmentList((prev) => {
        return prev?.filter(
          (department) => department.id !== removedDepartment.id,
        )
      })
    }
  }, [removedDepartment])

  const handleDelete = async (department: Department) => {
    setRemovedDepartment(department)
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error: Fetch Failed!</div>
  }

  return (
    <div className="px-5">
      <List dense={false}>
        {departmentList?.map((department: Department) => (
          <DepartmentItem
            key={department.id}
            department={department}
            onDelete={(deletedDepartment) => handleDelete(deletedDepartment)}
          />
        ))}
      </List>
    </div>
  )
}

export default ApprovedUniversityList
