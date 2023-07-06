'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Logo from './Logo'
import NavbarItem from './NavbarItem'
import { RiMenu5Line } from 'react-icons/ri'

const Navbar = ({ onMenuToggle }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)

  const handleBarToggle = () => {
    const updatedMenuState = !isSideBarOpen
    setIsSideBarOpen(updatedMenuState)
    onMenuToggle(updatedMenuState)
  }

  useEffect(() => {
    onMenuToggle(isSideBarOpen)
  }, [isSideBarOpen, onMenuToggle])

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={handleBarToggle}
            >
              <span className="sr-only">Open sidebar</span>
              <RiMenu5Line className="w-6 h-6" />
            </button>
            {/* Logo */}
            <Logo />
          </div>
          <div className="flex items-center">
            <div className="flex items-center ml-3">
              <div>
                <button
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-user"
                  onClick={toggleMenu}
                >
                  <span className="sr-only">Open user menu</span>
                  {/* User Avatar */}
                  <Image
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    width={32}
                    height={32}
                    className="rounded-full"
                    alt="User Photo"
                  />
                </button>
              </div>
              <div
                className={`z-50 fixed right-2 top-9 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 ${
                  isMenuOpen ? '' : 'hidden'
                }`}
                id="dropdown-user"
              >
                <div className="px-4 py-3" role="none">
                  <p
                    className="text-sm text-gray-900 dark:text-white"
                    role="none"
                  >
                    Ehsan Khan
                  </p>
                  <p
                    className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                    role="none"
                  >
                    ehsan18t@gmail.com
                  </p>
                </div>
                <ul className="py-1" role="none">
                  <li>
                    <NavbarItem name="Dashboard" link="#" />
                  </li>
                  <li>
                    <NavbarItem name="Settings" link="#" />
                  </li>
                  <li>
                    <NavbarItem name="Earnings" link="#" />
                  </li>
                  <li>
                    <NavbarItem name="Sign Out" link="#" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
