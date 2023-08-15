import Image from 'next/image'
import React from 'react'

const Forum = () => {
  return (
    <div className='my-10 '>
        <div className='max-w-5xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden pb-3.5 '>
        <Image
            src="https://static.vecteezy.com/system/resources/thumbnails/017/396/302/small_2x/banner-background-full-color-blue-and-black-gradations-geometric-effect-eps-10-free-vector.jpg"
            alt="Description"
            width={200}
            height={500}
            className="w-full h-36"
        />

        <div className="p-4">
            {/* Forum Title */}
            <h2 className="text-xl font-semibold mb-2">UIU CULTURAL FORUM</h2>
            
            {/* Forum Detail */}
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, ipsa?</p>
        </div>

        <div className="flex justify-end mt-4 space-x-2 mr-2">
          <button className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            View
          </button>
          <button className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600">
            Leave
          </button>
        </div>
        </div>
    </div>
  )
}

export default Forum