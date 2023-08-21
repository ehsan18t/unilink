'use client'
import { UniversityList } from '@/components/page-specific'
import { useRetrieveApprovedUniversityQuery } from '@/redux/features/universityApiSlice'

const ApprovedUniversityList = () => {
  const {
    data: approvedUniversities,
    isLoading,
    isError,
  } = useRetrieveApprovedUniversityQuery()

  if (isLoading) {
    return <div>Loading...</div>
  } else {
    console.log(approvedUniversities)
  }

  if (isError) {
    return <div>Error: Fetch Failed!</div>
  }

  return (
    <div>
      <UniversityList
        title="Approved University"
        universityList={approvedUniversities}
      />
    </div>
  )
}

export default ApprovedUniversityList
