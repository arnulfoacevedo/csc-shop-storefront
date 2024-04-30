import { Button, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const EmptyCartMessage = () => {
  return (
    <div className="text-center bg-white border border-brand-gray-200 space-y-3 py-20 px-5 flex justify-center flex-col items-center">
      <h2 className="text-2xl">
        Your cart is empty
      </h2>
      <LocalizedClientLink href={"/store/all"} className="flex items-center">
        <Button variant="secondary" className="h-10 btn btn-yellow">Click here to continue shopping</Button>
      </LocalizedClientLink>
    </div>
  )
}

export default EmptyCartMessage
