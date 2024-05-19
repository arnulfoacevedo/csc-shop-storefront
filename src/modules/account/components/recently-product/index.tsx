"use client"

import { Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { Button, Toaster, useToast } from "@medusajs/ui"
import { getProductPrice } from "@lib/util/get-product-price"
import PreviewPrice from "@modules/products/components/product-preview/price"
import AddCartForm from "@modules/products/components/product-preview/add-cart-form"
import { addToCart } from "@modules/cart/actions"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

import Link from "next/link"
import Image from "next/image"

type ProductActionsProps = {
  product: PricedProduct
  region: Region
  countryCode: string
  disabled?: boolean
}

export default function RecentlyProduct({
  product,
  region,
  countryCode,
  disabled,
}: ProductActionsProps) {

  const { cheapestPrice } = getProductPrice({
    product: product,
    region,
  })
  const handleAddToCart = async (quantity: number) => {
    // 'use server'        

    const variant = product.variants[0];
    if (!variant?.id) return null

    return await addToCart({
      variantId: variant.id,
      quantity: quantity,
      countryCode,
    })
  }


  return (
    <>
      <div
        className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-white border border-brand-gray-200 gap-5 p-5">
        <Link href={`/product/${product.handle}`} className="row-span-2 md:row-span-1 block relative w-full h-40 lg:h-48">
          {product.thumbnail && <Image className="w-full h-full object-contain" src={product.thumbnail} fill alt="" />}
        </Link>
        <div className="featured lg:col-span-2 pb-2">
          <Link href={`/product/${product.handle}`} >
            {product.title}
          </Link>
        </div>
        <div>
          <h2 className="font-bold text-xl/none border-b border-brand-gray-200 pb-4 text-black">{cheapestPrice && <PreviewPrice price={cheapestPrice} />}</h2>
          <div className="mt-5 lg:mt-8 space-y-2">
            {
              product.variants.length > 1 ?
                <Link
                  href={`/product/${product.handle}`}
                  data-event-type="product-click" data-product-id="18100" tabIndex={0}>
                    <Button className="btn btn-yellow py-1.6 w-full" variant="secondary">Choose Options</Button>
                </Link> :
                <AddCartForm addToCart={handleAddToCart} variantTitle={product.title || ""} />
            }
            {/* <Button variant="secondary" className="btn btn-white-outline w-full">
              <span>Add to Your List</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
            </Button> */}

          </div>
        </div>
      </div>
    </>
  )
}
