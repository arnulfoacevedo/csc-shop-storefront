import { getCustomer } from "@lib/data"
import ReviewModal from "@modules/review/templates/review-modal"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Review",
  description: "Review of product",
}

interface Props {
  searchParams: { product_id: string, product_handle: string }
}

export default async function ReviewPage({searchParams}: Props) {
  const { product_id, product_handle } = searchParams;  

  const customer = await getCustomer().catch(() => null)    

  return <ReviewModal customer={customer} product_id={product_id} product_handle={product_handle} />
}
