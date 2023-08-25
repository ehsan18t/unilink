import { Post } from '@/types'
import React from 'react'
import { BiCommentDetail, BiUpvote } from 'react-icons/bi'

interface Props {
  post: Post
}

const Post = ({ post }: Props) => {
  return (
    <div className="w-full flex flex-col gap-3 h-64 bg-gray-100 shadow-md rounded-2xl p-4 px-5">
      {/* <!-- Head Section --> */}
      <div className="flex">
        <div className="flex-shrink-0">
          <img
            src={post.user.profile_picture}
            alt="avatar"
            className="rounded-full w-10 h-10"
          />
        </div>
        <div className="ml-3">
          <div className="font-semibold">{post.user.name}</div>
          <div className="text-sm text-gray-500">{post.created_at}</div>
        </div>
        {/* <!-- title --> */}
        <div className="ml-auto">
          <div className="text-sm text-gray-500">{post.category}</div>
        </div>
      </div>
      <div className="h-full flex flex-col justify-between ">
        {/* <!-- Body Section --> */}
        <div>
          <div className="text-lg font-semibold">{post.title}</div>
          <div className="mt-2">{post.description}</div>
        </div>
        {/* <!-- Footer Section (comment, upvote count) --> */}
        <div className="flex justify-between text-gray-500">
          <div className="flex gap-1 justify-center items-center">
            <BiUpvote />
            {post.votes}
          </div>
          <div className="flex gap-1 justify-center items-center">
            <BiCommentDetail />
            {post.comments}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
