import { Comment } from '@/types'
import { useEffect, useState } from 'react'
import { User } from '@/types'
import { useRetrieveUserByIdQuery } from '@/redux/features/authApiSlice'
import dayjs from 'dayjs'

interface Props {
  comment: Comment
}

const Comment = ({ comment }: Props) => {
  const host = process.env.NEXT_PUBLIC_HOST
  const [user, setUser] = useState<User>()

  const {
    data: fetchedUser,
    isLoading,
    isError,
  } = useRetrieveUserByIdQuery(comment.author)

  useEffect(() => {
    setUser(fetchedUser)
  }, [fetchedUser])

  return (
    <div className="w-full flex flex-col gap-3 bg-white shadow-md rounded-2xl p-4 px-5">
      {/* <!-- Head Section --> */}
      <div className="flex">
        <div className="flex-shrink-0">
          <img
            src={`${host}/${user?.profile_picture}`}
            alt="avatar"
            className="rounded-full w-10 h-10"
          />
        </div>
        <div className="ml-3">
          <div className="font-semibold">{`${user?.first_name} ${user?.last_name}`}</div>
          <div className="text-sm text-gray-500">
            {dayjs(comment.created_at).format('DD-MMM-YYYY HH:mm A')}
          </div>
        </div>
      </div>
      <div className="h-full flex flex-col justify-between ">
        <div className="mt-2">{comment.content}</div>
      </div>
    </div>
  )
}

export default Comment
