'use client'
import React, { useEffect, useState } from 'react'
import { useRetrieveDepartmentQuery } from '@/redux/features/departmentApiSlice'
import DepartmentItem from '@/components/page-specific/department/DepartmentItem'
import List from '@mui/material/List'
import { Department } from '@/types'

const ApprovedUniversityList = () => {
  const { data: departments, isLoading, isError } = useRetrieveDepartmentQuery()
  const [departmentList, setDepartmentList] = useState<Department[]>()

  useEffect(() => {
    if (departments) {
      setDepartmentList(departments)
    }
  }, [departments])

  const handleDelete = async (department: Department) => {
    console.log('delete ', department)
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
