'use client'

import { useRetrieveForumListQuery } from '@/redux/features/forumApiSlice'
import Link from 'next/link'

const ForumList = () => {
  const { data: list, isLoading, isError } = useRetrieveForumListQuery()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error</div>
  }

  return (
    <div className="w-full h-full bg-white border-r border-gray-300 p-4 rounded">
      <h2 className="text-xl font-semibold mb-4">Forum List</h2>
      <div className="space-y-2">
        {list?.map((forum) => (
          <Link
            key={forum.id}
            href={`forum/${forum.id}`}
            className="no-underline flex flex-col items-start space-x-2 p-2 bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer"
          >
            <div className="text-lg text-gray-700 p-1">{forum.title}</div>
            <div className="text-sm text-gray-500 text-justify py-1">
              {forum.description}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ForumList
