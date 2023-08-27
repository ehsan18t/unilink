import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Footer } from '@/components/common'
import ReadyNavBar from '@/components/common/nav/ReadyNavBar'
import RequireNoAuth from '@/components/utils/RequireNoAuth'

export const metadata: Metadata = {
  title: 'UniLink',
  description: 'UniLink application that provides jwt authentication',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <RequireNoAuth>
      <ReadyNavBar />
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 my-8">
        {children}
      </div>
      <Footer />
    </RequireNoAuth>
  )
}
