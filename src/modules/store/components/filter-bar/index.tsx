"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

export function FilterBar() {
    const [limit, setLimit] = useState(12);

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    // Function to handle page changes
    const handleLimitChange = (newLimit: number) => {
        const params = new URLSearchParams(searchParams)
        params.set("limit", newLimit.toString())
        params.set("page", '1')
        router.push(`${pathname}?${params.toString()}`)

        setLimit(newLimit)
    }

    // Render the component
    return (
        <div className="relative grid grid-cols-2 sm:flex justify-between md:justify-end items-center text-xss gap-2 mt-5">
            {/* <form className="flex items-center justify-end sm:space-x-5">
                <label className="hidden sm:block font-bold whitespace-nowrap" htmlFor="sort">Sort By:</label>
                <select
                    className="w-full sm:w-auto text-xss cursor-pointer border-brand-gray-200 hover:border-brand-yellow-100 rounded focus:ring-0"
                    name="sort" id="sort" data-gtm-form-interact-field-id="0">
                    <option value="featured">Featured Items</option>
                    <option value="newest">Newest Items</option>
                    <option value="bestselling">Best Selling</option>
                    <option value="alphaasc">A to Z</option>
                    <option value="alphadesc">Z to A</option>
                    <option value="avgcustomerreview">By Review</option>
                    <option value="priceasc">Price: Ascending</option>
                    <option value="pricedesc">Price: Descending</option>
                </select>
            </form> */}
            <div className="hidden md:flex items-center space-x-2.5">
                <span className="font-bold">Show</span>
                <span className={limit == 12 ? "" : "underline"} onClick={() => handleLimitChange(12)}>12</span>
                <span className={limit == 24 ? "" : "underline"} onClick={() => handleLimitChange(24)}>24</span>
                <span className={limit == 36 ? "" : "underline"} onClick={() => handleLimitChange(36)}>36</span>
                <span className={limit == 48 ? "" : "underline"} onClick={() => handleLimitChange(48)}>48</span>
            </div>
            {/* <button data-tab-target="#cards" type="button" className="tab active hidden lg:block" onClick={() => setViewMode('card')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20">
                    <path
                        d="M4 4h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 16h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4z"
                        fill="currentColor"></path>
                </svg>
            </button>

            <button data-tab-target="#card" type="button" className="tab  hidden lg:block" onClick={() => setViewMode('list')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20">
                    <path d="M4 6h2v2H4zm0 5h2v2H4zm0 5h2v2H4zm16-8V6H8.023v2H18.8zM8 11h12v2H8zm0 5h12v2H8z"
                        fill="currentColor"></path>
                </svg>
            </button> */}
        </div>
    )
}
