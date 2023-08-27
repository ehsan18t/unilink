'use client'

import { useRetrievePostCommentsQuery } from '@/redux/features/forumApiSlice'
import Comment from './Comment'

const CommentList = ({ post_id }: any) => {
  const host = process.env.NEXT_PUBLIC_HOST
  const {
    data: list,
    isLoading,
    isError,
  } = useRetrievePostCommentsQuery(Number(post_id))

  if (isLoading) {
    return <div>Loading...</div>
  }

  console.log(list)

  if (isError) {
    return <div>Error</div>
  }

  return (
    <div className="w-full h-full bg-gray-100 border-gray-300 p-4">
      <h2 className="text-xl mx-4 font-semibold mb-4 flex justify-center">
        Comments
      </h2>
      <div className="space-y-4 ">
        {list?.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  )
}

export default CommentList
