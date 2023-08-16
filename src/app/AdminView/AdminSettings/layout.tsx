import { SideBar } from '@/components/nav/SideBar'
import '@/styles/globals.css'

export const metadata = {
  title: 'Home Page',
  description: 'This is the home page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SideBar />
        {/* Content */}
        <div className="p-4 sm:ml-64 mt-14">{children}</div>
      </body>
    </html>
  )
}
