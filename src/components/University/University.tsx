import Link from 'next/link'
import React from 'react'

const University = () => {
  return (
    <div>
        <div className='flex justify-around items-center my-10'>
            <Link href='/AdminView/UniversityDetail'>
            <p className='text-2xl cursor-pointer hover:text-blue-700 bg-gray-200 py-4 px-6 rounded-lg'>Bangladesh University of Engineering and Technology</p>
            </Link>
            <div className='flex gap-6'>
                <button className='px-8 py-4 text-white bg-blue-600 rounded-lg text-lg hover:bg-blue-500'>Approve</button>
                <button className='px-8 py-4 text-white bg-red-600 rounded-lg text-lg hover:bg-red-500'>Reject</button>
            </div>
        </div>
    </div>
  )
}

export default University