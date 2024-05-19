import { Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import React, { Suspense, useState } from "react"

import ProductActions from "@modules/products/components/product-actions"
import { notFound } from "next/navigation"
import ProductActionsWrapper from "./product-actions-wrapper"
import Link from "next/link"

import RouteBar from "@modules/account/RouteBar"
import ImageGallery from "../components/image-gallery"
import ProductInfo from "../components/product-tabs"

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
            <div className="container mx-auto hidden md:flex items-center text-xss space-x-2 px-5 py-3">
                <div className="hidden md:flex items-center text-xss space-x-2">
                    <Link href="/" className="underline">Home</Link>
                    <span>/</span>
                    <Link href={`/store/all`} className="underline">Store</Link>
                    <span>/</span>
                    <span>{product.title}</span>
                </div>
            </div>

            <div className="bg-white border-y border-brand-gray-200">
                <div className="container mx-auto py-10 px-5">
                    <div className="grid md:grid-cols-2 xl:grid-cols-11 gap-x-6 gap-y-4 xl:gap-8 mb-20">
                        {product.images && <ImageGallery thumbnail={product.thumbnail} images={product.images} />}
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
                                <p>{ }</p>
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
                            <h2 className="text-xl font-bold">Product Information</h2>
                            <ProductInfo product={product} />
                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}

export default ProductTemplate
