'use client'
import { getRegion } from "@lib/data"
import RecentlyProduct from "../components/recently-product"
import { Region } from "@medusajs/medusa"
import { useEffect, useState } from "react"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"

type Props = {
    region: Region
    countryCode: string
}
const RecentlyTemplate = ({ region, countryCode }: Props) => {    
    const [recentlyitems, setRecentlyitems] = useState([]);
    useEffect(() => {
        const recentlyItems = window?.localStorage?.getItem("recentlyitems") ? JSON.parse(localStorage.getItem("recentlyitems") || "") : [];
        setRecentlyitems(recentlyItems);        
    }, [])
    return (
        <>
            {
                recentlyitems.map((product: PricedProduct, index: number) => (
                    <RecentlyProduct product={product} region={region} countryCode={countryCode} key={index} />
                ))
            }
        </>
    )
}

export default RecentlyTemplate
