import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/contexts/CartContext'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mini e-commerce',
  description: 'e commerce site for practice purposes',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <CartProvider>
        <body className={inter.className + 'bg-slate-800'}>
          <Header>{children}</Header>
        </body>
      </CartProvider>
    </html>
  )
}
