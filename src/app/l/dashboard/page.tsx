import React from 'react'
import CategoryList from '@/components/page-specific/forum/CategoryList'
import Post from '@/components/page-specific/forum/Post'

const Dashboard = () => {
  const forumCategory = [
    {
      id: 1,
      title: 'General Discussion',
    },
    {
      id: 2,
      title: 'Announcements',
    },
    {
      id: 3,
      title: 'Q&A',
    },
  ]

  const forumPost = [
    {
      id: 1,
      title: 'How to use React',
      user: {
        id: 1,
        name: 'John Doe',
        profile_picture: 'https://i.pravatar.cc/50',
      },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptates.',
      category: 'General Discussion',
      created_at: '2021-10-10',
      comments: 10,
      votes: 20,
    },
    {
      id: 2,
      title: 'How to use React 2',
      user: {
        id: 1,
        name: 'John Doe',
        profile_picture: 'https://i.pravatar.cc/50',
      },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptates.',
      category: 'General Discussion',
      created_at: '2021-10-10',
      comments: 10,
      votes: 20,
    },
    {
      id: 3,
      title: 'How to use React 3',
      user: {
        id: 1,
        name: 'John Doe',
        profile_picture: 'https://i.pravatar.cc/50',
      },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptates.',
      category: 'General Discussion',
      created_at: '2021-10-10',
      comments: 10,
      votes: 20,
    },
  ]

  return (
    <div className="flex h-screen border-t-[1px] border-gray-200">
      {/* <!-- Category List (Left Pane) --> */}
      <CategoryList list={forumCategory} />

      {/* <!-- Posts (Middle Pane) --> */}
      <div className="w-1/2 bg-white border-r border-gray-100 p-4">
        <div className="h-full flex flex-col gap-5 overflow-y-scroll scrollbar-hide">
          {/* <!-- Post Messages Here --> */}
          {forumPost.map((post) => (
            <Post key={post.id} post={post} />
          ))}
          {/* <!-- Post Messages Here --> */}
        </div>
      </div>

      {/* <!-- Space for Something on Right (Right Pane) --> */}
      <div className="w-1/4 bg-gray-200 p-4">
        <h2 className="text-xl font-semibold mb-4">Something on the Right</h2>
        {/* <!-- Add content for something on the right here --> */}
      </div>
    </div>
  )
}

export default Dashboard
