import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

// import StoreProvider from "../store-context"

import PaginatedProducts from "./paginated-products"
import { FilterBar } from "../components/filter-bar"
import { listCategories } from "@lib/data"
import React from "react"
import { NavigationItem } from "types/global"
import RouteBar from "@modules/account/RouteBar"

const StoreTemplate = async ({
    sortBy,
    page,
    limit,
    countryCode,
    categoryHandle,
    categoryStack
}: {
    sortBy?: SortOptions
    page?: string
    limit?: number
    countryCode: string
    categoryHandle?: string
    categoryStack: NavigationItem[]
}) => {
    const pageNumber = page ? parseInt(page) : 1
    const limitNumber = limit ? limit : 12
    const categories = await listCategories();  
    const category = categories.find(item => item.handle == categoryHandle);

    return (
        // <StoreProvider storeData={{viewMode: 'card'}}>
        <div className="container mx-auto mt-5 px-5">
            <div className="grid md:grid-cols-5 gap-5">
                <RefinementList sortBy={sortBy || "created_at"} />
                <div className="md:col-span-4">
                    {/* <RouteBar /> */}
                    <div className="md:flex items-center space-y-2 md:space-x-2 md:mt-7">
                        <h1 className="text-[28px]/8">{category?.name}</h1>
                    </div>
                    <FilterBar />
                    <Suspense fallback={<SkeletonProductGrid />}>
                        <PaginatedProducts
                            sortBy={sortBy || "created_at"}
                            page={pageNumber}
                            limit={limitNumber}
                            countryCode={countryCode}
                            categoryId={category?.id}
                        />
                    </Suspense>
                </div>
            </div>
        </div>
        // </StoreProvider>
    )
}

export default StoreTemplate
