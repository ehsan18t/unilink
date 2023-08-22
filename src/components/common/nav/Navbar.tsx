'use client'
import React, { useState, useEffect, useRef } from 'react'
import { HiMenu } from 'react-icons/hi'
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice'
import Link from 'next/link'

const Navbar = ({ children }: any) => {
  const { data: user, isLoading, isFetching } = useRetrieveUserQuery()
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const hamburgerButtonRef = useRef<any>(null)

  useEffect(() => {
    const handleSidebarToggle = (e: any) => {
      if (
        hamburgerButtonRef.current &&
        hamburgerButtonRef.current.contains(e.target)
      ) {
        setSidebarOpen(!isSidebarOpen)
      } else {
        setSidebarOpen(false)
      }
    }

    document.addEventListener('click', handleSidebarToggle)

    return () => {
      document.removeEventListener('click', handleSidebarToggle)
    }
  }, [isSidebarOpen])

  return (
    <nav className="bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center text-gray-600 font-semibold text-3xl font-sans">
          <Link href="/">UniLink</Link>
        </div>
        <div className="flex gap-3 items-center">
          <button
            ref={hamburgerButtonRef}
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="text-gray-800 block"
            aria-label="Toggle sidebar"
          >
            {!isLoading && !isFetching && user?.profile_picture ? (
              <img
                src={user.profile_picture}
                alt="User Profile"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
            ) : (
              <HiMenu className="w-10 h-10" />
            )}
          </button>
        </div>
        <div
          className={`shadow-md fixed top-0 left-0 h-full w-64 bg-white text-gray-800 transform transition-transform ease-in-out ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-4">
            <div className="mt-4">{children}</div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
