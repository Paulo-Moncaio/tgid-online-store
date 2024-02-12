'use client'
import { CartContext } from '@/contexts/CartContext'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useContext } from 'react'

export default function Header() {
  const cart = useContext(CartContext)

  return (
    <header className="fixed inset-x-0 top-0 z-10 flex items-center justify-between bg-slate-300 px-4 py-2 shadow-md">
      <Link className="text-xl font-bold" href={'/'}>
        Home
      </Link>
      <Link
        href="/cart"
        className="group flex items-center text-blue-500 transition-all hover:text-blue-600"
      >
        {cart.getTotalQuantity() > 0 && (
          <span className="mr-2 size-7 rounded-full bg-red-600 pl-[10px] pt-1 text-white">
            {cart.getTotalQuantity()}
          </span>
        )}
        Carrinho
        <ShoppingCartIcon className="ml-2 size-6 group-hover:scale-110" />
      </Link>
    </header>
  )
}
