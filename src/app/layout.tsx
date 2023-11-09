import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import './globals.css'

const quicksand = Quicksand({ weight: "400", subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Match!',
  description: 'A website to find intersections between cast and crew in your favourite movies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>{children}</body>
    </html>
  )
}
