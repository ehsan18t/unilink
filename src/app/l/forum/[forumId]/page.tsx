'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useRetrieveForumPostQuery } from '@/redux/features/forumApiSlice'
import ForumList from '@/components/page-specific/forum/ForumList'
import Post from '@/components/page-specific/forum/Post'
import CategoryList from '@/components/page-specific/forum/CategoryList'
import Button from '@/components/common/Button'
import { ForumPost } from '@/types'

const ForumView = () => {
  const params = useParams()
  const forum_id = params.forumId
  const [searchValue, setSearchValue] = useState('')
  const {
    data: forumPosts,
    isLoading,
    isError,
  } = useRetrieveForumPostQuery(Number(forum_id))

  const [postList, setPostList] = useState<any>([])

  useEffect(() => {
    if (forumPosts) {
      const filteredPosts = forumPosts.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase())
      })
      setPostList(filteredPosts)
    }
  }, [searchValue, forumPosts])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error: Fetch Failed!</div>
  }

  return (
    <div className="flex h-screen border-t-[1px] border-gray-200">
      {/* <!-- Category List (Left Pane) --> */}
      <CategoryList />

      {/* <!-- Posts (Middle Pane) --> */}
      <div className="w-1/2 bg-white border-r border-gray-100 p-4">
        {/* Search */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex w-9/12 items-center gap-2">
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <Button> Create Post </Button>
        </div>

        <div className="h-full flex flex-col gap-5 overflow-y-scroll scrollbar-hide">
          {/* <!-- Post Messages Here --> */}
          {postList?.map((post: ForumPost) => (
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

export default ForumView
