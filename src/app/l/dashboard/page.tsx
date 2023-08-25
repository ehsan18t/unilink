'use client'

import React from 'react'
import CategoryList from '@/components/page-specific/forum/CategoryList'
import Post from '@/components/page-specific/forum/Post'
import ForumList from '@/components/page-specific/forum/ForumList'
import { useRetrieveAllForumPostQuery } from '@/redux/features/forumApiSlice'

const Dashboard = () => {
  const { data: forumPosts, isLoading } = useRetrieveAllForumPostQuery()

  return (
    <div className="flex h-screen border-t-[1px] border-gray-200">
      {/* <!-- Category List (Left Pane) --> */}
      <CategoryList />

      {/* <!-- Posts (Middle Pane) --> */}
      <div className="w-1/2 bg-white border-r border-gray-100 p-4">
        <div className="h-full flex flex-col gap-5 overflow-y-scroll scrollbar-hide">
          {/* <!-- Post Messages Here --> */}
          {forumPosts?.map((post) => (
            <Post key={post.id} post={post} />
          ))}
          {/* <!-- Post Messages Here --> */}
        </div>
      </div>

      {/* <!-- Space for Something on Right (Right Pane) --> */}
      <div className="w-1/4 bg-gray-200 p-1">
        <ForumList />
      </div>
    </div>
  )
}

export default Dashboard
