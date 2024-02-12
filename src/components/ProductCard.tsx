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
    <div className="flex flex-col rounded-xl bg-zinc-600 text-slate-100 transition-all hover:scale-105 hover:cursor-pointer">
      <Image
        src={props.image}
        alt={`${'merda'} image`}
        className="size-auto rounded-t-xl"
        width={250}
        height={353}
      />
      <div className="flex h-full flex-col justify-between">
        <h2 className="px-4 py-2 text-lg font-semibold">{props.title}</h2>
        <div className="flex justify-between p-1 px-4">
          <Image
            src={getPlatformLogo(props.platform)}
            alt={props.platform}
            className="size-auto max-h-10"
            width={250}
            height={100}
          />
          {props.quantity && (
            <p className="">
              Quantidade:{' '}
              <span className="font-semibold text-green-500">
                {props.quantity}
              </span>
            </p>
          )}
        </div>
        <div className="flex items-center rounded-b-xl bg-zinc-700">
          {isInCart ? (
            <button
              onClick={onRemoveFromCart}
              className="group flex rounded-bl-xl bg-zinc-500 p-2 px-4 transition-all hover:bg-red-600"
              aria-label="remove from cart"
              role="button"
            >
              <TrashIcon className="mr-2 size-6 transition-transform group-hover:-translate-y-1 group-hover:fill-red-500" />
              <p>Remover</p>
            </button>
          ) : (
            <button
              onClick={onAddToCart}
              className="group flex rounded-bl-xl bg-zinc-500 p-2 px-4 transition-all hover:bg-green-600"
              aria-label="add to cart"
              role="button"
            >
              <ShoppingCartIcon className="mr-2 size-6 transition-transform group-hover:-translate-y-1 group-hover:fill-green-600 " />
              <p>Comprar</p>
            </button>
          )}
          <p className="w-full text-center font-bold text-green-500">{`$${props.price}`}</p>
        </div>
      </div>
    </div>
  )
}
