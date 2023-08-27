import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Provider from '@/redux/provider'
import { Setup } from '@/components/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UniLink | Connect, Collaborate & Succeed',
  description: 'UniLink application that provides jwt authentication',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Setup />
          {children}
        </Provider>
      </body>
    </html>
  )
}
