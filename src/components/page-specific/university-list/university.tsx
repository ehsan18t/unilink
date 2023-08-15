'use client'
import { useState } from 'react'
import { usePost } from '@/hooks/requests'

interface University {
  id: number
  name: string
  domain: string
  admin: {
    id: number
    username: string
  }
  is_approved: boolean
  is_banned: boolean
}

interface Props {
  university: University
}

const UniversityView = ({ university }: Props) => {
  const [ban, setBan] = useState(university.is_banned)
  const [approve, setApprove] = useState(university.is_approved)

  const { loading, error, success, performPostRequest } = usePost()

  const handleToggleStatus = async (
    task: string,
    universityToUpdate: University,
  ) => {
    let action = ''
    if (task === 'ban') {
      action = ban ? 'unban' : 'ban'
    } else if (task === 'approve') {
      action = approve ? 'disapprove' : 'approve'
    }

    const apiUrl = `${process.env.NEXT_PUBLIC_HOST}/api/university/${action}/`
    const payload = {
      university_id: universityToUpdate.id,
    }

    const response: any = await performPostRequest({ url: apiUrl, payload })
    if (response && response.status === 'success') {
      if (task === 'approve') setApprove(!approve)
      else if (task === 'ban') setBan(!ban)
    }
  }

  return (
    <li key={university.id}>
      <div className="user">
        <div className="primary">
          <h3>{university.name}</h3>
          <p>{university.domain}</p>
        </div>
        <div className="secondary">
          <h4>{university.admin.username}</h4>
          <p>{university.admin.id}</p>
        </div>
        <div className="action">
          <button
            className="btn-blue"
            onClick={() => handleToggleStatus('approve', university)}
            disabled={loading}
          >
            {approve ? 'Disapprove' : 'Approve'}
          </button>
          <button
            className="btn-red"
            onClick={() => handleToggleStatus('ban', university)}
            disabled={loading}
          >
            {ban ? 'Unban' : 'Ban'}
          </button>
        </div>
        {error && <div>Error: {error.message}</div>}
      </div>
    </li>
  )
}

export default UniversityView
