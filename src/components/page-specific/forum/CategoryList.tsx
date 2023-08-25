'use client'

import { ForumCategory } from '@/types'
import { useRetrieveForumCategoryQuery } from '@/redux/features/forumApiSlice'

const CategoryList = () => {
  const { data: list, isLoading, isError } = useRetrieveForumCategoryQuery()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error</div>
  }

  return (
    <div className="w-1/4 bg-white border-r border-gray-300 p-4">
      <h2 className="text-xl font-semibold mb-4">Forum Category</h2>
      <div className="space-y-2">
        {list?.map((category) => (
          <a
            key={category.id}
            href="#"
            className="no-underline flex text-lg text-gray-700 items-center space-x-2 p-2 bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer"
          >
            {category.title}
          </a>
        ))}
      </div>
    </div>
  )
}

export default CategoryList