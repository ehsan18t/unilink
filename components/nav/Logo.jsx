import { RiMenu5Line } from 'react-icons/ri'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className="flex items-center justify-start">
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <RiMenu5Line className="w-6 h-6" />
      </button>
      <a href="https://flowbite.com" className="flex ml-2 md:mr-24">
        <Image
          src="https://flowbite.com/docs/images/logo.svg"
          height={32}
          width={32}
          className="mr-3"
          alt="Logo"
        />
        <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
          UniLink
        </span>
      </a>
    </div>
  )
}

export default Logo
