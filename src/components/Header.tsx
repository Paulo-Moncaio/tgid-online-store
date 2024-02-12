'use client'
import { CartContext } from '@/contexts/CartContext'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useContext } from 'react'

type HeaderProps = {
  children?: React.ReactNode
}

export default function Header({ children }: HeaderProps) {
  const cart = useContext(CartContext)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md flex items-center justify-between px-4 py-2">
        <Link className="text-xl font-bold" href={'/'}>
          Home
        </Link>
        <Link href="/cart" className="text-blue-500 flex">
          Carrinho{' '}
          {cart.getTotalQuantity() > 0 && (
            <span className="bg-red-500 text-white rounded-full px-2 py-1">
              {cart.getTotalQuantity()}
            </span>
          )}
          <ShoppingCartIcon className="fill-white w-6 h-6 ml-2" />
        </Link>
      </header>
      {children}
    </>
  )
}
