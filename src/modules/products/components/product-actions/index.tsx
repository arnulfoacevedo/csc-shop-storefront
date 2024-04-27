"use client"

import { Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { Button, Toaster, useToast } from "@medusajs/ui"
import { isEqual } from "lodash"
import { useParams } from "next/navigation"
import { useEffect, useMemo, useRef, useState } from "react"

import { useIntersection } from "@lib/hooks/use-in-view"
import { addToCart } from "@modules/cart/actions"
import Divider from "@modules/common/components/divider"
import OptionSelect from "@modules/products/components/option-select"

import ProductPrice from "../product-price"

type ProductActionsProps = {
    product: PricedProduct
    region: Region
    disabled?: boolean
}

export type PriceType = {
    calculated_price: string
    original_price?: string
    price_type?: "sale" | "default"
    percentage_diff?: string
}

export default function ProductActions({
    product,
    region,
    disabled,
}: ProductActionsProps) {
    const [options, setOptions] = useState<Record<string, string>>({})
    const [isAdding, setIsAdding] = useState(false)
    const [quantity, setQuantity] = useState(1)

    const { toast } = useToast()

    const countryCode = useParams().countryCode as string

    const variants = product.variants

    // initialize the option state
    useEffect(() => {
        const optionObj: Record<string, string> = {}

        for (const option of product.options || []) {
            Object.assign(optionObj, { [option.id]: undefined })
        }

        setOptions(optionObj)
    }, [product])

    // memoized record of the product's variants
    const variantRecord = useMemo(() => {
        const map: Record<string, Record<string, string>> = {}

        for (const variant of variants) {
            if (!variant.options || !variant.id) continue

            const temp: Record<string, string> = {}

            for (const option of variant.options) {
                temp[option.option_id] = option.value
            }

            map[variant.id] = temp
        }

        return map
    }, [variants])

    // memoized function to check if the current options are a valid variant
    const variant = useMemo(() => {
        let variantId: string | undefined = undefined

        for (const key of Object.keys(variantRecord)) {
            if (isEqual(variantRecord[key], options)) {
                variantId = key
            }
        }

        return variants.find((v) => v.id === variantId)
    }, [options, variantRecord, variants])

    // if product only has one variant, then select it
    useEffect(() => {
        if (variants.length === 1 && variants[0].id) {
            setOptions(variantRecord[variants[0].id])
        }
    }, [variants, variantRecord])

    // update the options when a variant is selected
    const updateOptions = (update: Record<string, string>) => {
        setOptions({ ...options, ...update })
    }

    // check if the selected variant is in stock
    const inStock = useMemo(() => {
        // If we don't manage inventory, we can always add to cart
        if (variant && !variant.manage_inventory) {
            return true
        }

        // If we allow back orders on the variant, we can add to cart
        if (variant && variant.allow_backorder) {
            return true
        }

        // If there is inventory available, we can add to cart
        if (variant?.inventory_quantity && variant.inventory_quantity > 0) {
            return true
        }

        // Otherwise, we can't add to cart
        return false
    }, [variant])

    const actionsRef = useRef<HTMLDivElement>(null)

    const inView = useIntersection(actionsRef, "0px")

    const handleChangeQty = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(Number(e.target.value));
    }
    // add the selected variant to the cart
    const handleAddToCart = async () => {
        if (!variant?.id) return null

        setIsAdding(true)

        const res = await addToCart({
            variantId: variant.id,
            quantity: quantity,
            countryCode,
        })
        if (res == null) {
            toast({
                title: "Cart",
                description: variant.title + " does not have the required inventory.",
                variant: "error",
                duration: 3000,
            })
        }

        setQuantity(1);
        setIsAdding(false)
    }

    // console.log(product);

    return (
        <>
            <Toaster />
            <div className="flex flex-col gap-y-2" ref={actionsRef}>
                <ProductPrice product={product} variant={variant} region={region} />
                <Divider />

                <div>
                    {product.variants.length > 1 && (
                        <div className="flex flex-col gap-y-4">
                            {(product.options || []).map((option) => {
                                return (
                                    <div key={option.id}>
                                        <OptionSelect
                                            option={option}
                                            current={options[option.id]}
                                            updateOption={updateOptions}
                                            title={option.title}
                                            data-testid="product-options"
                                            disabled={!!disabled || isAdding}
                                        />
                                    </div>
                                )
                            })}
                            <Divider />
                        </div>
                    )}
                </div>

                <div className="space-y-2 flex items-center justify-between">
                    <label className="font-semibold">Quantity:</label>
                    <input
                        className="block w-12 h-10 border-brand-gray-200 focus:ring-0 focus:border-brand-gray-200 text-center rounded "
                        type="text" id="tel" value={quantity} onChange={handleChangeQty} />
                </div>

                <Button
                    onClick={handleAddToCart}
                    disabled={!inStock || !variant || !!disabled || isAdding}
                    variant="secondary"
                    className="btn btn-yellow w-full h-10 bg-slate-200-"
                    isLoading={isAdding}
                    data-testid="add-product-button"
                >
                    {!variant
                        ? "Select variant"
                        : !inStock
                            ? "Out of stock"
                            : "Add to cart"}
                </Button>
                <Button
                    className="btn btn-white-outline w-full h-10 flex"
                    data-testid="add-list-button"
                    variant="secondary"
                >
                    Add to Your List
                </Button>
            </div>
        </>
    )
}
