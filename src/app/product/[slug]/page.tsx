'use client'
import { CartContext } from '@/contexts/CartContext'
import useFetchProductDetail from '@/hooks/useProductDetail'
import { getPlatformLogo } from '@/utils/getPlatformLogo'
import Image from 'next/image'
import { useContext } from 'react'

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const product = useFetchProductDetail({ productId: params.slug })
  const cart = useContext(CartContext)

  return (
    <>
      {product && (
        <main className="mx-4 mb-14 mt-16 max-w-screen-lg bg-slate-800 text-slate-200 lg:mx-auto">
          <h1 className="w-full text-center text-3xl font-semibold">
            {product.title}
          </h1>
          <div>
            <Image
              src={product.image}
              alt={product.title + ' image'}
              className="mx-auto mt-4 size-auto rounded-t-xl"
              width={250}
              height={353}
            />
            <Image
              src={getPlatformLogo(product.platform)}
              alt={product.platform}
              className="mx-auto mt-2 size-auto max-h-10"
              width={250}
              height={100}
            />
            <div>
              <h2 className="text-xl font-semibold">
                Price: <span className="text-green-600">${product.price}</span>
              </h2>
              <h2 className="text-xl font-semibold">Description: </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
                impedit iusto unde laboriosam. Repellendus voluptatem repellat
                sint recusandae incidunt facilis commodi nisi provident! Minus
                nulla sunt fugit mollitia neque quia.
              </p>
            </div>
            <div className="fixed inset-x-0 bottom-0 flex w-full grow justify-center ">
              <button
                className="w-full bg-green-600 p-3 text-white"
                type="button"
                onClick={() => {
                  cart.addItem({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    quantity: 1,
                    image: product.image,
                    platform: product.platform,
                    isInCart: true,
                  })
                }}
              >
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        </main>
      )}
    </>
  )
}
