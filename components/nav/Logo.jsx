'use client'

import Image from 'next/image'

const Logo = () => {
  return (
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
  )
}

export default Logo
