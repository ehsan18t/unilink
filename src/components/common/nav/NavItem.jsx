import Link from 'next/link'

const NavItem = ({ to, name, icon: Icon }) => (
  <Link
    href={to}
    className="hover:bg-gray-300/60 flex items-center text-gray-800 no-underline px-3 py-2 rounded-md transition duration-200 ease-in-out"
  >
    <Icon className="w-6 h-6 mr-2" />
    <span>{name}</span>
  </Link>
)

export { NavItem }
