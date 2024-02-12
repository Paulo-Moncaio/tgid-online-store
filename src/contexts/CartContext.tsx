'use client'
import { ProductCardProps } from '@/components/ProductCard'
import { PropsWithChildren, createContext, useState } from 'react'

export type CartItem = {
  quantity: number
} & ProductCardProps

type CartContextValue = {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  clearCart: () => void
  getTotalQuantity: () => number
}

export const CartContext = createContext<CartContextValue>(
  {} as CartContextValue,
)

export function CartProvider({ children }: PropsWithChildren<object>) {
  const [items, setItems] = useState<CartItem[]>([])

  function addItem(item: CartItem) {
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id)
      if (existingItem) {
        // If item already exists in cart, increment quantity
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i,
        )
      } else {
        // If item is not in cart, add it
        return [...prevItems, item]
      }
    })
  }

  function removeItem(id: string) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  function clearCart() {
    setItems([])
  }

  function getTotalQuantity() {
    return items.reduce((total, item) => total + item.quantity, 0)
  }

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, clearCart, getTotalQuantity }}
    >
      {children}
    </CartContext.Provider>
  )
}
