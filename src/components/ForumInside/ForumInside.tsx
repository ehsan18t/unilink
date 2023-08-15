import Image from 'next/image'
import React from 'react'

const Forum = () => {
  return (
    <div className='mb-10 '>
        <div className='max-w-5xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden pb-3.5 '>
        <Image
            src="https://static.vecteezy.com/system/resources/thumbnails/017/396/302/small_2x/banner-background-full-color-blue-and-black-gradations-geometric-effect-eps-10-free-vector.jpg"
            alt="Description"
            width={200}
            height={100}
            className="w-full h-36"
        />

        <div className="p-4">
            {/* Forum Title */}
            <h2 className="text-xl font-semibold mb-2">UIU CULTURAL FORUM</h2>
            
            {/* Forum Detail */}
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, ipsa?</p>
        </div>

    
        </div>
    </div>
  )
}

export default Forum