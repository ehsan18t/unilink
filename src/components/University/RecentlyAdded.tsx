import Image from 'next/image'
import React from 'react'

const RecentlyAdded = () => {
  return (
    <div className='py-10'>
                <div className='flex justify-center'>
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/d/da/BUET_LOGO.svg/1200px-BUET_LOGO.svg.png"
                        alt="Description"
                        width={500}
                        height={50}
                        className="w-3/12 "
                    /> 
                </div>
                <div className=''>
                    <h2 className='text-center mt-5 text-xl'>Bangladesh University Of Engineering and Technology</h2>
                </div>
    </div>
  )
}

export default RecentlyAdded