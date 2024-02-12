'use client'
import ProductCard from '@/components/ProductCard'
import { CartContext } from '@/contexts/CartContext'
import { useContext } from 'react'

export default function Cart() {
  const cart = useContext(CartContext)
  return (
    <main className="mx-4 mb-4 mt-16 max-w-screen-lg lg:mx-auto">
      <h1>Seu Carrinho</h1>
      <ul className="mx-auto grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
