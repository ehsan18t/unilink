'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useRetrievePostByIdQuery } from '@/redux/features/forumApiSlice'
import Post from '@/components/page-specific/forum/Post'
import CommentList from '@/components/page-specific/forum/CommentList'

const PostView = () => {
  const params = useParams()
  const post_id = params.postId
  const {
    data: post,
    isLoading,
    isError,
  } = useRetrievePostByIdQuery(Number(post_id))

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error: Fetch Failed!</div>
  }

  return (
    <div className="flex flex-col bg-gray-100 items-center h-screen w-full border-t-[1px] border-gray-200">
      {post && (
        <Post className="w-11/12 m-10 bg-white" post={post} bigTitle={true} />
      )}
      <CommentList post_id={post_id} />
    </div>
  )
}

export default PostView
