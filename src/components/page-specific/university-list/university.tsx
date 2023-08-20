'use client'
import { useState } from 'react'
import { University } from '@/types'
import {
  useApproveMutation,
  useDisapproveMutation,
  useBanMutation,
  useUnbanMutation,
} from '@/redux/features/universityApiSlice'
import { useMutation } from '@/hooks'

interface Props {
  university: University
}

const UniversityView = ({ university }: Props) => {
  // Request hooks
  const { approveOnAction } = useMutation(
    useApproveMutation,
    { university_id: university.id },
    'approve',
  )

  const { disapproveOnAction } = useMutation(
    useDisapproveMutation,
    { university_id: university.id },
    'disapprove',
  )

  const { banOnAction } = useMutation(
    useBanMutation,
    { university_id: university.id },
    'ban',
  )

  const { unbanOnAction } = useMutation(
    useUnbanMutation,
    { university_id: university.id },
    'unban',
  )

  // States
  const [isBanLoading, setIsBanLoading] = useState(false)
  const [isApproveLoading, setIsApproveLoading] = useState(false)
  const [isBan, setIsBan] = useState(university.is_banned)
  const [isApproved, setIsApprove] = useState(university.is_approved)

  // Event handlers
  const handleToggleStatus = async (e: any, task: 'ban' | 'approve') => {
    // Event specific code here
    e.preventDefault()

    let actionFunction: any
    let response: any

    // handle logic for the action
    if (task === 'ban') {
      setIsBanLoading(true)
      actionFunction = isBan ? () => unbanOnAction() : () => banOnAction()

      response = await actionFunction()
      setIsBanLoading(false)
      if (response?.data.status === 'success') {
        setIsBan(!isBan)
      }
    } else {
      setIsApproveLoading(true)
      actionFunction = isApproved
        ? () => disapproveOnAction()
        : () => approveOnAction()

      response = await actionFunction()
      setIsApproveLoading(false)
      if (response?.data.status === 'success') {
        setIsApprove(!isApproved)
      }
    }

    // log errors and response
    try {
      // console.log('Mutation Response:', response) // Log the response
      console.log('Response Status:', response?.data.status) // Log the response
    } catch (error) {
      console.error('Mutation Error:', error) // Log any errors
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
            onClick={(event) => handleToggleStatus(event, 'approve')}
            disabled={isApproveLoading}
          >
            {isApproved ? 'Disapprove' : 'Approve'}
          </button>
          <button
            className="btn-red"
            onClick={(event) => handleToggleStatus(event, 'ban')}
            disabled={isBanLoading}
          >
            {isBan ? 'Unban' : 'Ban'}
          </button>
        </div>
      </div>
    </li>
  )
}

export default UniversityView
