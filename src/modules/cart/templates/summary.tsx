"use client"

import { Button } from "@medusajs/ui"

import CartTotals from "@modules/common/components/cart-totals"
import Divider from "@modules/common/components/divider"
import { CartWithCheckoutStep } from "types/global"
import DiscountCode from "@modules/checkout/components/discount-code"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type SummaryProps = {
  cart: CartWithCheckoutStep
}

const Summary = ({ cart }: SummaryProps) => {
  return (
    <div className="flex flex-col gap-y-4">
      {/* <DiscountCode cart={cart} /> */}
      {/* <Divider /> */}
      <CartTotals data={cart} />
      <LocalizedClientLink href={"/checkout?step=" + cart.checkout_step} data-testid="checkout-button">
        <Button variant="secondary" className="w-full h-10 btn btn-yellow">Go to checkout</Button>
      </LocalizedClientLink>
    </div>
  )
}

export default Summary
