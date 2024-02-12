import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { ShoppingCartIcon, TrashIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { getPlatformLogo } from '@/utils/getPlatformLogo'
import { CartContext } from '@/contexts/CartContext'
import { useContext } from 'react'

export type ProductCardProps = {
  id: string
  title: string
  platform: string
  price: number
  image: string | StaticImport
  isInCart?: boolean
  quantity?: number
}

export default function ProductCard({
  isInCart = false,
  ...props
}: ProductCardProps) {
  const cart = useContext(CartContext)

  function onAddToCart() {
    cart?.addItem({
      id: props.id,
      title: props.title,
      price: props.price,
      quantity: 1,
      image: props.image,
      platform: props.platform,
      isInCart: true,
    })
  }

  function onRemoveFromCart() {
    cart?.removeItem(props.id.toString())
  }

  console.log('props:', props.title)
  return (
    <div className="bg-zinc-600 text-slate-100 flex flex-col rounded-xl hover:cursor-pointer">
      <Image
        src={props.image}
        alt={`${'merda'} image`}
        className="w-auto h-auto rounded-t-xl"
        width={250}
        height={353}
      />
      <div className="h-full flex flex-col justify-between">
        <h1 className="px-4 py-2 font-semibold text-lg">{props.title}</h1>
        <div className="px-4 p-1">
          <Image
            src={getPlatformLogo(props.platform)}
            alt={props.platform}
            className="w-auto h-auto max-h-10"
            width={250}
            height={100}
          />
        </div>
        <div className="flex items-center bg-zinc-500 rounded-b-xl">
          {isInCart ? (
            <button
              onClick={onRemoveFromCart}
              className="group flex hover:bg-red-600 transition-all bg-zinc-400 p-2 px-4 rounded-bl-xl"
              aria-label="remove from cart"
              role="button"
            >
              <TrashIcon className="group-hover:fill-red-500 w-6 h-6 mr-2 group-hover:-translate-y-1 transition-transform" />
              <p>Remover</p>
            </button>
          ) : (
            <button
              onClick={onAddToCart}
              className="group flex hover:bg-green-600 transition-all bg-zinc-400 p-2 px-4 rounded-bl-xl"
              aria-label="add to cart"
              role="button"
            >
              <ShoppingCartIcon className="group-hover:fill-green-600 w-6 h-6 mr-2 group-hover:-translate-y-1 transition-transform " />
              <p>Comprar</p>
            </button>
          )}
          <p className="text-green-500 w-full text-center font-bold">{`$${props.price}`}</p>
        </div>
      </div>
    </div>
  )
}
