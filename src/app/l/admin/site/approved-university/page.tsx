'use client'
import { useFetch } from '@/hooks/requests'
import { UniversityList } from '@/components/page-specific'

interface User {
  id: number
  first_name: string
  last_name: string
  username: string
  email: string
  university: number
  department: number
  profile_picture: string
  user_type: number
}

interface University {
  id: number
  name: string
  domain: string
  admin: User
  is_approved: boolean
  is_banned: boolean
}

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
