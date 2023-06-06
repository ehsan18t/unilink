import Image from 'next/image'
import Logo from './Logo'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />
          <div className="flex items-center">
            <div className="flex items-center ml-3">
              <div>
                <button
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-user"
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
                className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
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
