'use client'
import { useState, useEffect } from 'react';

export type ProductsResponse = {
  id: string;
  title: string;
  platform: string;
  price: number;
  image: string;
};

const useFetchProducts = () => {
  const [products, setProducts] = useState<ProductsResponse[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/items');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return products;
};

export default useFetchProducts;