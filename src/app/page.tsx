'use client'
import ProductCard from '@/components/ProductCard'
import useFetchProducts from '@/hooks/useProducts'

export default function Home() {
  const products = useFetchProducts()

  return (
    <main className="mx-4 lg:mx-auto max-w-screen-lg mt-16 bg-slate-800">
      <ul className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
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
