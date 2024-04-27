import { getProductsListWithSort, getRegion, listCategories } from "@lib/data"
import ProductPreview from "@modules/products/components/product-preview"
import { Pagination } from "@modules/store/components/pagination"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

type PaginatedProductsParams = {
  limit: number
  collection_id?: string[]
  category_id?: string[]
  id?: string[]
}

export default async function PaginatedProducts({
  sortBy,
  page,
  limit,
  collectionId,
  categoryId,
  productsIds,
  countryCode,
}: {
  sortBy?: SortOptions
  page: number
  limit: number
  collectionId?: string
  categoryId?: string
  productsIds?: string[]
  countryCode: string
}) {
  const region = await getRegion(countryCode)
  const categories = await listCategories();  

  if (!region) {
    return null
  }

  const queryParams: PaginatedProductsParams = {
    limit: Number(limit),
  }

  if (collectionId) {
    queryParams["collection_id"] = [collectionId]
  }

  if (categoryId) {
    queryParams["category_id"] = [categoryId];
  }

  if (productsIds) {
    queryParams["id"] = productsIds
  }

  const {
    response: { products, count },
  } = await getProductsListWithSort({
    page,
    queryParams,
    sortBy,
    countryCode,
  })

  const totalPages = Math.ceil(count / limit)

  return (
    <>
      <div id="cards">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 mt-5">
          {products.map((p) => {
            return (
              <ProductPreview productPreview={p} region={region} key={p.id} countryCode={countryCode} />
            )
          })}
        </div>
        {totalPages > 1 && <Pagination data-testid="product-pagination" page={page} totalPages={totalPages} />}
      </div>
    </>
  )
}
