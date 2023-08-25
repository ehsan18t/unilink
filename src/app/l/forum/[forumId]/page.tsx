'use client'

import { useParams } from 'next/navigation'
import { useRetrieveForumPostQuery } from '@/redux/features/forumApiSlice'
import ForumList from '@/components/page-specific/forum/ForumList'
import Post from '@/components/page-specific/forum/Post'
import CategoryList from '@/components/page-specific/forum/CategoryList'

const SectionList = () => {
  const params = useParams()
  const forum_id = params.forumId
  const {
    data: forumPosts,
    isLoading,
    isError,
  } = useRetrieveForumPostQuery(Number(forum_id))

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

export default SectionList
