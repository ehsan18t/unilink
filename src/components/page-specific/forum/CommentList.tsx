'use client'

import { useRetrievePostCommentsQuery } from '@/redux/features/forumApiSlice'
import Comment from './Comment'
import { useFormSubmit } from '@/hooks'
import { useRegisterPostCommentMutation } from '@/redux/features/forumApiSlice'
import Button from '@/components/common/Button'

const CommentList = ({ post_id }: any) => {
  const host = process.env.NEXT_PUBLIC_HOST
  const {
    data: list,
    isLoading,
    isError,
  } = useRetrievePostCommentsQuery(Number(post_id))
  const [postComment] = useRegisterPostCommentMutation()

  const initialFormData = {
    post_id: post_id,
    content: '',
  }

  const { formData, onChange, onSubmit, updateFormData } = useFormSubmit(
    postComment,
    initialFormData,
  )

  if (isLoading) {
    return <div>Loading...</div>
  }

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
      <div className="">
        <form
          action={`${host}/api/forum/create-post-comment/`}
          method="POST"
          className="flex flex-col space-y-4"
        >
          <input type="hidden" name="post_id" value={post_id} />
          <textarea
            name="content"
            id="content"
            value={formData.content}
            onChange={onChange}
            cols={30}
            rows={10}
            className="border border-gray-300 p-2 rounded-2xl"
          ></textarea>
          <Button
            onClick={async (e: any) => {
              const res = await onSubmit(e)
              if (res?.data?.id) {
                updateFormData(initialFormData)
                // refresh
                window.location.reload()
              }
            }}
            className="mt-5"
          >
            Post Comment
          </Button>
        </form>
      </div>
    </div>
  )
}

export default CommentList
