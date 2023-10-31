'use client'
import './globals.css'

import HeroesProvider from '@/context/heroes_context'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <HeroesProvider>{children}</HeroesProvider>
      </body>
    </html>
  )
}
