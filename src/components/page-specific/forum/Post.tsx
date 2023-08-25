'use client'
import dayjs from 'dayjs'
import { useState, useEffect } from 'react'
import { ForumPost, User, Forum } from '@/types'
import React from 'react'
import { BiCommentDetail, BiUpvote } from 'react-icons/bi'
import { useRetrieveUserByIdQuery } from '@/redux/features/authApiSlice'
import { useRetrieveForumQuery } from '@/redux/features/forumApiSlice'

interface Props {
  post: ForumPost
}

const Post = ({ post }: Props) => {
  const host = process.env.NEXT_PUBLIC_HOST
  const [user, setUser] = useState<User>()
  const [forum, setForum] = useState<Forum>()

  const {
    data: fetchedUser,
    isLoading,
    isError,
  } = useRetrieveUserByIdQuery(post.author)

  const {
    data: fetchedForum,
    isLoading: isForumLoading,
    isError: isForumError,
  } = useRetrieveForumQuery(post.forum)

  useEffect(() => {
    setUser(fetchedUser)
  }, [fetchedUser])

  useEffect(() => {
    setForum(fetchedForum)
  }, [fetchedForum])

  if (isLoading && isForumLoading) return <div>Loading...</div>

  if (isError && isForumError) return <div>Something went wrong...</div>

  return (
    <div className="w-full flex flex-col gap-3 h-64 bg-gray-100 shadow-md rounded-2xl p-4 px-5">
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
            {dayjs(post.created_at).format('DD-MMM-YYYY HH:mm A')}
          </div>
        </div>
        {/* <!-- title --> */}
        <div className="ml-auto">
          <div className="text-sm text-gray-500">{forum?.title}</div>
        </div>
      </div>
      <div className="h-full flex flex-col justify-between ">
        {/* <!-- Body Section --> */}
        <div>
          <div className="text-lg font-semibold">{post.title}</div>
          <div className="mt-2">{post.content}</div>
        </div>
        {/* <!-- Footer Section (comment, upvote count) --> */}
        <div className="flex justify-between text-gray-500">
          <div className="flex gap-1 justify-center items-center">
            <BiUpvote /> 5{/* {post.votes} */}
          </div>
          <div className="flex gap-1 justify-center items-center">
            <BiCommentDetail /> 10
            {/* {post.comments} */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
