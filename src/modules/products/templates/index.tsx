import { Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import React, { Suspense } from "react"

import ProductActions from "@modules/products/components/product-actions"
import { notFound } from "next/navigation"
import ProductActionsWrapper from "./product-actions-wrapper"
import Link from "next/link"
import Image from "next/image"

import RouteBar from "@modules/account/RouteBar"

type ProductTemplateProps = {
    product: PricedProduct
    region: Region
    countryCode: string
}

const ProductTemplate: React.FC<ProductTemplateProps> = async ({
    product,
    region,
    countryCode,
}) => {
    if (!product || !product.id) {
        return notFound()
    }

    return (
        <>
            <RouteBar />
            <div className="bg-white border-y border-brand-gray-200">
                <div className="container mx-auto py-10 px-5">
                    <div className="grid md:grid-cols-2 xl:grid-cols-11 gap-x-6 gap-y-4 xl:gap-8 mb-20">
                        <div id="image-container" className="md:row-span-2 xl:row-span-1 xl:col-span-4 max-w-100 overflow-hidden cursor-zoom-in">
                            { product.thumbnail && <Image className="origin-center" width={400} height={400} src={product.thumbnail} alt="No Image" /> }
                        </div>
                        <div className="order-first md:order-none text-sm space-y-4 xl:col-span-4">
                            <div className="md:border-b border-brand-gray-200 space-y-2 pb-5">
                                <h1 className="font-bold text-xl">{product.title}</h1>
                                {/* <Link href="https://store.theshootingcentre.com/sig-sauer/" className="block underline">Sig Sauer</Link> */}
                                <p>No reviews yet
                                    <Link className="inline-block underline ml-2.5"
                                        href="https://store.theshootingcentre.com/sig-sauer-elite-ball-9mm-115-gr-fmj-ammunition/">
                                        Write a Review
                                    </Link>
                                </p>
                                <p>{}</p>
                            </div>
                            {/* <div className="hidden xl:block space-y-2">
                                <button type="button"
                                    className="font-bold text-xss bg-brand-red text-white uppercase px-3 py-0.5">Sale</button>
                                <p className="text-brand-red-100">Was: <s>$42.00</s></p>
                                <p className="font-bold text-xl">$33.60</p>
                            </div> */}
                            {/* <p className="hidden md:block"> SKU: 798681516889</p>
                            <p className="hidden md:block"> UPC: 798681516889</p> */}
                        </div>
                        <div className="xl:col-span-3">
                            <Suspense
                                fallback={
                                    <ProductActions
                                        disabled={true}
                                        product={product}
                                        region={region}
                                    />
                                }
                            >
                                <ProductActionsWrapper id={product.id} region={region} />
                            </Suspense>
                        </div>
                    </div>
                    <div className="px-5 lg:px-16">
                        <div className="container mx-auto text-sm bg-white border border-brand-gray-200 space-y-5 mt-5 p-5">
                            <h2 className="text-xl font-bold">Description</h2>
                            <p>
                                {product.description}
                            </p>
                        </div>
                    </div>
                    <div className="px-5 lg:px-16">
                        <div className="container mx-auto text-sm bg-white border border-brand-gray-200 mt-5 p-5">
                            <h2 className="text-xl font-bold">Extra Information</h2>
                            <div className="grid grid-cols-4 border border-brand-gray-200 text-sm mt-5">
                                <p className="font-bold bg-brand-gray-500 py-1 px-3">Brand:</p>
                                <p className="col-span-3 py-1 px-3">Stanley</p>
                            </div>
                            <div className="grid grid-cols-4 border border-t-0 border-brand-gray-200 text-sm">
                                <p className="font-bold bg-brand-gray-500 py-1 px-3">Product:</p>
                                <p className="col-span-3 py-1 px-3">Beer Pitcher</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}

export default ProductTemplate
