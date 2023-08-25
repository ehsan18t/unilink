'use client'

import { useRetrieveForumListQuery } from '@/redux/features/forumApiSlice'

const CategoryList = () => {
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
