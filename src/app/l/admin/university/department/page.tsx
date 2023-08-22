'use client'

import { useRetrieveDepartmentQuery } from '@/redux/features/departmentApiSlice'
import DepartmentItem from '@/components/page-specific/department/DepartmentItem'
import ListContainer from '@/components/common/ListContainer'

const ApprovedUniversityList = () => {
  const { data: departments, isLoading, isError } = useRetrieveDepartmentQuery()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error: Fetch Failed!</div>
  }

  return (
    <div className="px-5">
      {!isLoading && (
        <ListContainer items={departments} ItemComponent={DepartmentItem} />
      )}
    </div>
  )
}

export default ApprovedUniversityList
