import { Metadata } from "next"
import { notFound } from "next/navigation"

import {
  getCustomer,
  getProductByHandle,
  getProductsList,
  getRegion,
  getReviews,
  listRegions,
  retrievePricedProductById,
} from "@lib/data"
import { Region } from "@medusajs/medusa"
import ProductTemplate from "@modules/products/templates"

export const metadata: Metadata = {
  title: "Product detail",
  description: "Details",
}

type Props = {
  params: { countryCode: string; productHandle: string }
}

const getPricedProductByHandle = async (handle: string, region: Region) => {
  const { product } = await getProductByHandle(handle).then(
    (product) => product
  )

  if (!product || !product.id) {
    return null
  }

  const pricedProduct = await retrievePricedProductById({
    id: product.id,
    regionId: region.id,
  })

  return pricedProduct
}

export default async function ProductPage({ params }: Props) {
  const region = await getRegion(params.countryCode)

  if (!region) {
    notFound()
  }

  const pricedProduct = await getPricedProductByHandle(
    params.productHandle,
    region
  )

  if (!pricedProduct) {
    notFound()
  }

  const reviews = await getReviews(pricedProduct.id)
  const customer = await getCustomer().catch(() => null)

  return (
    <ProductTemplate
      product={pricedProduct}
      region={region}
      customer={customer}
      countryCode={params.countryCode}
      reviews={reviews}
    />
  )
}
