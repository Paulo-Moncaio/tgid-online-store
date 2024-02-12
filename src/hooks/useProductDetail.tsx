'use client'
import { useState, useEffect } from 'react'

export type ProductDetailResponse = {
  id: string
  title: string
  platform: string
  price: number
  image: string
}

type ProductDetailParams = {
  productId: string
}

const useFetchProductDetail = ({ productId }: ProductDetailParams) => {
  const [product, setProduct] = useState<ProductDetailResponse | null>(null)

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await fetch(`http://localhost:3000/items/${productId}`)
        const data = await response.json()
        setProduct(data)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    fetchProductDetail()
  }, [productId])

  return product
}

export default useFetchProductDetail
