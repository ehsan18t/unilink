'use client'
import { UniversityList } from '@/components/page-specific'
import { useRetrievePendingUniversityQuery } from '@/redux/features/universityApiSlice'

const PendingUniversityList = () => {
  const {
    data: pendingUniversities,
    isLoading,
    isError,
  } = useRetrievePendingUniversityQuery()

  if (isLoading) {
    return <div>Loading...</div>
  } else {
    console.log(pendingUniversities)
  }

  if (isError) {
    return <div>Error: Fetch Failed!</div>
  }

  return (
    <div>
      <UniversityList
        title="Pending University"
        universityList={pendingUniversities}
      />
    </div>
  )
}

export default PendingUniversityList
