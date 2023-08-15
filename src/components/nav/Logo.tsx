'use client'

import Image from 'next/image'

const Logo = () => {
  return (
    <a href="#" className="flex ml-2 md:mr-24">
      <Image
        src="https://cdn.vectorstock.com/i/preview-1x/22/82/success-education-logo-vector-892282.jpg"
        height={32}
        width={32}
        className="mr-3"
        alt="Logo"
      />
      <span className="self-center text-xl text-blue-900 font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
        UniLink
      </span>
    </a>
  )
}

export default Logo
