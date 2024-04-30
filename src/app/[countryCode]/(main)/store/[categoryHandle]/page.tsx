import { Metadata } from "next"

import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import StoreTemplate from "@modules/store/templates"
import { getCategoryStack } from "@lib/data"

export const metadata: Metadata = {
  title: "Store",
  description: "Explore all of our products.",
}

type Params = {
  searchParams: {
    sortBy?: SortOptions
    page?: string
    limit?: number
  }
  params: {
    countryCode: string
    categoryHandle: string
  }
}

export default async function StorePage({ searchParams, params }: Params) {
  const { sortBy, page, limit } = searchParams  
  const categoryStack = await getCategoryStack(params.categoryHandle)

  return (
    <StoreTemplate
      sortBy={sortBy}
      page={page}
      limit={limit}
      countryCode={params.countryCode}
      categoryHandle = {params.categoryHandle}
      categoryStack={categoryStack}
    />
  )
}
