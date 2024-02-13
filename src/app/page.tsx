'use client'
import ProductCard from '@/components/ProductCard'
import useFetchProducts from '@/hooks/useProducts'
import { useState } from 'react'

export default function Home() {
  const [page, setPage] = useState(1)
  const products = useFetchProducts(page)

  return (
    <main className="mx-4 mt-16 max-w-screen-lg bg-slate-800 lg:mx-auto">
      <ul className="mx-auto grid grid-cols-1 gap-6 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.isArray(products) &&
          products.map((item) => (
            <ProductCard
              id={item.id}
              key={item.id}
              title={item.title}
              platform={item.platform}
              price={item.price}
              image={item.image}
            />
          ))}
      </ul>
      <div className="mb-4 mt-6 flex justify-center text-white">
        <button
          className="text-gray-300 transition-transform hover:scale-110"
          onClick={() => setPage((page) => Math.max(page - 1, 1))}
        >
          Previous
        </button>
        <span className="px-4">|</span>
        <button
          className="text-gray-300 transition-transform hover:scale-110"
          onClick={() => setPage((page) => page + 1)}
        >
          Next
        </button>
      </div>
    </main>
  )
}
