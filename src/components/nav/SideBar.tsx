'use client'

import { useState } from 'react'
import { RiApps2Line, RiInboxArchiveFill, RiUser3Fill } from 'react-icons/ri'
import { FaHome } from 'react-icons/fa'
import SideBarItem from './SideBarItem'
import Navbar from './Navbar'

export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = (isOpen) => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar onMenuToggle={toggleSidebar} />
      <aside
        id="logo-sidebar"
        className={`${
          isOpen ? '-translate-x-full' : ''
        } fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-blue-900 border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-blue-900 dark:bg-gray-800">
          <ul className="space-y-2 font-medium ">
            <li>
              <SideBarItem name="Dashboard" icon={FaHome} link="#" />
            </li>
            <li>
            <SideBarItem name="Approval" icon={FaHome} link="/AdminView/UniversityApprove" />
            </li>
            <li>
            <SideBarItem name="Registered University" icon={FaHome} link="/AdminView/RegisteredUniversity" />
            </li>
            <li>
              <SideBarItem name="Notice" icon={RiUser3Fill} link="#" />
            </li>
            <li>
              <SideBarItem name="Message" icon={RiUser3Fill} link="#" />
            </li>
            <li>
              <SideBarItem name="Admin Setting" icon={RiUser3Fill} link="/AdminView/AdminSettings" />
            </li>
          </ul>
        </div>
      </aside>
    </>
  )
}
