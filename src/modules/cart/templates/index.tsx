import ItemsTemplate from "./items"
import Summary from "./summary"
import EmptyCartMessage from "../components/empty-cart-message"
import { CartWithCheckoutStep } from "types/global"
import SignInPrompt from "../components/sign-in-prompt"
import Divider from "@modules/common/components/divider"
import { Customer } from "@medusajs/medusa"
import Link from "next/link"

const CartTemplate = ({
    cart,
    customer,
}: {
    cart: CartWithCheckoutStep | null
    customer: Omit<Customer, "password_hash"> | null
}) => {
    return (
        <div className="container mx-auto mt-5 px-5">
            <div className="hidden md:flex items-center text-xss space-x-2">
                <Link href="/" className="underline">Home</Link>
                <span>/</span>
                <p>Your Cart</p>
            </div>
            <h1 className="text-3xl py-5" data-cart-page-title="">
                Your Cart ({cart?.items.length} items)
            </h1>
            {cart?.items.length ? (
                <div className="grid grid-cols-1 small:grid-cols-[1fr_360px] gap-x-5">
                    <div className="flex flex-col gap-y-6">
                        {!customer && (<SignInPrompt />)}
                        <ItemsTemplate region={cart?.region} items={cart?.items} />
                    </div>
                    <div className="relative">
                        <div className="flex flex-col gap-y-8 sticky top-12 p-5 bg-white">
                            {cart && cart.region && (
                                <>
                                    <div className="bg-white pt-5">
                                        <Summary cart={cart} />
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <EmptyCartMessage />
                </div>
            )}
        </div>
    )
}

export default CartTemplate
