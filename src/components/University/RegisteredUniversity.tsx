import Image from 'next/image'
import React from 'react'

const RegisteredUniversity = () => {
  return (
    <div className='flex items-center justify-between bg-gray-400 py-4 px-3 rounded-3xl text-white w-full my-7'>
        <div className='w-fit'>
            <p className='text-lg'>Bangladesh University of Engineering and Technology</p>
        </div>
        <div>
               <Image
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/d/da/BUET_LOGO.svg/1200px-BUET_LOGO.svg.png"
                    alt="Description"
                    width={200}
                    height={50}
                    className="w-3/12 ml-5"
                />            
        </div>
    </div>
  )
}

export default RegisteredUniversity