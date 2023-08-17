'use client'
import { useFetch } from '@/hooks/requests'
import { UniversityList } from '@/components/page-specific'
import { University } from '@/types'

const PendingUniversityList = () => {
  const apiUrl = process.env.NEXT_PUBLIC_HOST + '/api/university/approved/'

  const {
    data: pendingUniversities,
    loading,
    error,
  } = useFetch<University>(apiUrl)

  if (loading) {
    return <div>Loading...</div>
  } else {
    console.log(pendingUniversities)
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      <UniversityList
        title="Approved University"
        universityList={pendingUniversities}
      />
    </div>
  )
}

export default PendingUniversityList
