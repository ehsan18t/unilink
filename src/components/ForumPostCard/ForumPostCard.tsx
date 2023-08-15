import Image from 'next/image'
import React from 'react'

const ForumPostCard = () => {
  return (
    <div>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden mb-4">
      {/* User Section */}
      <div className="flex items-center p-4">
      <Image
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt="Description"
            width={200}
            height={100}
            className="w-8 h-8 rounded-full mr-2"
        />
        <span className="font-semibold">Ahsan Khan</span>
      </div>
      
      {/* Post Content */}
      <div className="p-4">
        <p className="text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ratione doloribus hic nam veritatis consequuntur sit at molestiae iure officia ipsam accusantium perspiciatis, repellat necessitatibus!</p>
      </div>
      
      {/* Like Button */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-100">
        <button className="text-blue-500 hover:text-blue-600">
          Like
        </button>
        <span className="text-gray-600">25 Likes</span>
      </div>
      
      {/* Comment Section */}
      <div className="p-4 border-t">
        <textarea
          className="w-full border rounded p-2 resize-none"
          placeholder="Write a comment..."
        ></textarea>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Comment
        </button>
      </div>
    </div>
    </div>
  )
}

export default ForumPostCard