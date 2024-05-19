'use client'

import { Button, Toaster, useToast } from "@medusajs/ui";
import { useState } from "react"

interface Props {
    addToCart: Function
    variantTitle: string
}

export default function AddCartForm ({addToCart, variantTitle}: Props) {
    const [quantity, setQuantity] = useState(1);
    const [isAdding, setIsAdding] = useState(false);

    const { toast } = useToast()

    const handleChangeQty = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(Number(e.target.value));
    }

    const handleAddToCart = async () => {
        setIsAdding(true);

        const res = await addToCart(quantity)

        setIsAdding(false);
        if (res == null) {
            toast({
                title: "Cart",
                description: variantTitle + " does not have the required inventory.",
                variant: "error",
                duration: 3000,
            })
        }
    }

    return (
        <div className="flex items-stretch">
            <Toaster />
            <input type="text" value={quantity} onChange={handleChangeQty}
                className="w-12 btn btn-white-outline rounded-r-none focus:border-gray-400 outline-none" />
            <Button
                variant="secondary"
                isLoading={isAdding}
                className="btn btn-yellow flex-1 rounded-l-none cursor-pointer" 
                onClick={async () => await handleAddToCart()}>
                    Add to Cart
            </Button>
        </div>
    )
}