import React from 'react'
import University from './University'

const Universities = () => {
  return (
    <div className='w-4/5 m-auto  mt-10 pl-5 pr-5'>
        <University/>
        <University/>
        <University/>
        <University/>
        <hr className=' border-slate-700'/>
        <div className='flex gap-6 mt-6 justify-end'>
        <button className='px-8 py-4 text-white bg-blue-600 rounded-lg text-lg hover:bg-blue-500'>Approve All</button>
        <button className='px-8 py-4 text-white bg-red-600 rounded-lg text-lg hover:bg-red-500'>Reject All</button>
        </div>
    </div>
  )
}

export default Universities