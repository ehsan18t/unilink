import ForumInside from "@/components/ForumInside/ForumInside";
import ForumPostCard from "@/components/ForumPostCard/ForumPostCard";
import Image from 'next/image'

export default function Home() {
    return (
        <div>
            <ForumInside/>

    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      {/* User Section */}
      <div className="flex items-center justify-start p-4">
        

        <Image
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt="Description"
            width={200}
            height={100}
            className="w-10 h-10 rounded-full mr-2"
        />
        <span className="font-semibold">Ahsan Khan</span>
      </div>
      
      {/* Image Upload Field */}
      <div className="p-4">
        <label className="block text-gray-600 mb-2">Upload Image</label>
        <input type="file" className="border rounded p-2 w-full" />
      </div>
      
      {/* Title Input Field */}
      <div className="p-4">
        <label className="block text-gray-600 mb-2">Title</label>
        <input
          type="text"
          className="border rounded p-2 w-full"
          placeholder="Enter title..."
        />
      </div>
      
      {/* Post Description */}
      <div className="p-4">
        <label className="block text-gray-600 mb-2">Description</label>
        <textarea
          className="border rounded p-2 w-full resize-none"
          placeholder="Write your post description..."
        ></textarea>
      </div>
      
      {/* Post Button */}
      <div className="flex justify-end p-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Post
        </button>
      </div>
    </div>
            
        </div>
    ) 
  }