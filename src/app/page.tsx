'use client'
import ProductCard from '@/components/ProductCard'
import useFetchProducts from '@/hooks/useProducts'

export default function Home() {
  const products = useFetchProducts()

  return (
    <main className="mx-4 mt-16 max-w-screen-lg bg-slate-800 lg:mx-auto">
      <ul className="mx-auto grid grid-cols-1 gap-6 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((item) => (
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
    </main>
  )
}
