import { ReviewType } from "types/global"

export const getProductMark = (reviews: ReviewType[]) => {
  let sum = 0
  reviews.map((review, index) => {
    sum += review.rating
  })
  return reviews.length > 0 ? sum / reviews.length : 0
}
