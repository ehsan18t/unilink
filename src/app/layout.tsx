import { SideBar } from '@/components/nav/SideBar'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home Page',
  description: 'This is the home page',
}

export default function RootLayout({ children }:any) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  )
}
