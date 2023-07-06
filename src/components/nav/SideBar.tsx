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
        } fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <SideBarItem name="Home" icon={FaHome} link="#" />
            </li>
            <li>
              <SideBarItem
                name="Kanban"
                badge="Pro"
                icon={RiApps2Line}
                link="#"
              />
            </li>
            <li>
              <SideBarItem
                name="Inbox"
                count="18"
                icon={RiInboxArchiveFill}
                link="#"
              />
            </li>
            <li>
              <SideBarItem name="Users" icon={RiUser3Fill} link="#" />
            </li>
          </ul>
        </div>
      </aside>
    </>
  )
}
