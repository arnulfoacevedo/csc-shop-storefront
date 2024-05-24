"use client"

import { getProductMark } from "@lib/util/get-product-mark"
import StarRatings from "react-star-ratings"
import { ReviewType } from "types/global"

interface Props {
  reviews: ReviewType[]
}

export default function ProductMark({ reviews }: Props) {
  return reviews.length > 0 ? (
    <StarRatings
      rating={getProductMark(reviews)}
      starDimension={"20px"}
      starSpacing={"0px"}
      starRatedColor={"#f1a545"}
      name="rating"
    />
  ) : (
    "No reviews yet"
  )
}
