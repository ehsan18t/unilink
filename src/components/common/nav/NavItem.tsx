import Link from 'next/link'

interface Props {
  to?: string
  name: string
  icon: any
  [rest: string]: any
}

const NavItem = ({ to, name, icon: Icon, ...rest }: Props) => {
  const className =
    'hover:bg-gray-300/60 flex items-center text-gray-800 no-underline px-3 py-2 rounded-md transition duration-200 ease-in-out'

  if (!to) {
    return (
      <span className={className} role="button" onClick={rest.onClick}>
        <Icon className="w-6 h-6 mr-2" />
        <span>{name}</span>
      </span>
    )
  }

  return (
    <Link href={to} className={className}>
      <Icon className="w-6 h-6 mr-2" />
      <span>{name}</span>
    </Link>
  )
}

export { NavItem }
