import Link from 'next/link'

const SideBarItem = ({ name, badge, count, icon: Icon, link }) => {
  const countClass =
    'w-3 h-3 p-3  text-blue-800 bg-blue-100 dark:bg-blue-900 dark:text-blue-300'
  const badgeClass =
    'px-2 text-gray-800 bg-gray-200  dark:bg-gray-700 dark:text-gray-300'
  return (
    <Link
      href={link}
      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      <Icon
        className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
        aria-hidden="true"
      />
      <span className="ml-3">{name}</span>
      {(badge || count) && !(badge && count) && (
        <span
          className={`inline-flex items-center justify-center ml-3 text-sm font-medium rounded-full ${
            badge ? badgeClass : countClass
          }`}
        >
          {badge ? badge : count}
        </span>
      )}
    </Link>
  )
}

export default SideBarItem
