'use client'
import ProductCard from '@/components/ProductCard'
import { CartContext } from '@/contexts/CartContext'
import { useContext } from 'react'

export default function Cart() {
  const cart = useContext(CartContext)
  return (
    <main className="mx-4 lg:mx-auto max-w-screen-lg mt-16 mb-4">
      <h2>Seu Carrinho</h2>
      <ul className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
        {cart.items.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            title={item.title}
            platform={item.platform}
            price={item.price}
            image={item.image}
            isInCart={item.isInCart}
            quantity={item.quantity}
          />
        ))}
      </ul>
    </main>
  )
}
