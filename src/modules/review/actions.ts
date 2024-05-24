"use server"

import { saveReview } from "@lib/data"

type FormState = {
  product_id: string
}
export async function review(_currentState: FormState, formData: FormData) {
  const rating = formData.get("rating") as string
  const content = formData.get("content") as string
  const product_id = formData.get("product_id") as string
  const customer_id = formData.get("customer_id") as string
  const display_name = formData.get("display_name") as string

  try {
    const response = await saveReview({
      product_id: product_id,
      customer_id: customer_id,
      display_name: display_name,
      rating: Number(rating),
      content: content,
    })
    return response
  } catch (error: any) {
    return error.toString()
  }
}
