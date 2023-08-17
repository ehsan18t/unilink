import Link from 'next/link'

const NavbarItem = ({ name, link }) => {
  return (
    <Link
      href={link}
      className="block px-4 py-2 text-sm text-white-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
      role="menuitem"
    >
      {name}
    </Link>
  )
}

export default NavbarItem
