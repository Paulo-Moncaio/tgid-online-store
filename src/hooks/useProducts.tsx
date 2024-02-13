'use client'
import { useState, useEffect } from 'react'

export type ProductsResponse = {
  id: string
  title: string
  platform: string
  price: number
  image: string
}

const useFetchProducts = (page: number) => {
  const [products, setProducts] = useState<ProductsResponse[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/items?_page=${page}&_per_page=8`,
        )
        const data = await response.json()
        setProducts(data.data)
        console.log(data)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    fetchProducts()
  }, [page])

  return products
}

export default useFetchProducts
