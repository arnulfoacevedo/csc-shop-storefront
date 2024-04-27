import { ProductPreviewType } from "types/global"

import { retrievePricedProductById } from "@lib/data"
import { getProductPrice } from "@lib/util/get-product-price"
import { Region } from "@medusajs/medusa"
import Link from "next/link"
import Image from "next/image"
import PreviewPrice from "./price"
import AddCartForm from "./add-cart-form"
import { addToCart } from "@modules/cart/actions"
import { Button } from "@medusajs/ui"

export default async function ProductPreview({
    productPreview,
    isFeatured,
    region,
    countryCode
}: {
    productPreview: ProductPreviewType
    isFeatured?: boolean
    region: Region
    countryCode: string
}) {
    const pricedProduct = await retrievePricedProductById({
        id: productPreview.id,
        regionId: region.id,
    }).then((product) => product)

    if (!pricedProduct) {
        return null
    }

    const { cheapestPrice } = getProductPrice({
        product: pricedProduct,
        region,
    })

    const handleAddToCart = async (quantity: number) => {
        'use server'        

        const variant = pricedProduct.variants[0];
        if (!variant?.id) return null

        return await addToCart({
            variantId: variant.id,
            quantity: quantity,
            countryCode,
        })
    }

    return (
        <div className="relative flex flex-col bg-white border border-brand-gray-200 p-5">
            <Link href={"/product/" + productPreview.handle} className="block relative w-full h-40 xl:h-60">
                {productPreview.thumbnail ? <Image className="w-full h-full object-contain" src={productPreview.thumbnail} fill alt="" /> : ""}
            </Link>
            <div className="featured mt-3 pb-2">
                {/* <h3 className="text-xss font-bold">Sig Sauer</h3> */}
                <Link href={`/product/${productPreview.handle}`}
                    tabIndex={0}>
                    {productPreview.title}
                </Link>
            </div>
            <div className="pt-5 mt-auto">
                <h2 className="font-bold text-xl/none border-b border-brand-gray-200 pb-4 text-black">{cheapestPrice && <PreviewPrice price={cheapestPrice} />}</h2>
                <div className="mt-5 lg:mt-8 space-y-2">
                    {
                        pricedProduct.variants.length > 1 ?
                            <Link className="btn btn-yellow"
                                href={`/product/${productPreview.handle}`}
                                data-event-type="product-click" data-product-id="18100" tabIndex={0}>Choose Options
                            </Link> :
                            <AddCartForm addToCart={handleAddToCart} variantTitle={productPreview.title} />
                    }
                    <Button variant="secondary" className="btn btn-white-outline w-full">
                        <span>Add to Your List</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                            stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                    </Button>
                </div>
            </div>
        </div >

    )
}
