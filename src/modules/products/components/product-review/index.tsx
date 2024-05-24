"use client"

import StarRatings from "react-star-ratings"
import { ReviewType } from "types/global"

interface Props {
  reviews: ReviewType[]
}

function nl2br(str: string, replaceMode: boolean, isXhtml: boolean) {
  var breakTag = isXhtml ? "<br />" : "<br>"
  var replaceStr = replaceMode ? "$1" + breakTag : "$1" + breakTag + "$2"
  return (str + "").replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, replaceStr)
}

export default function ProductReview({ reviews }: Props) {
  return (
    <div className="py-3">
      {reviews.map((review, i) => {
        return (
          <div key={review.id} className="border-b-[1px] py-3">
            <div className="text-sm font-semibold">{review.display_name}</div>
            <StarRatings
              rating={review.rating}
              starDimension={"15px"}
              starSpacing={"0px"}
              starRatedColor={"#f1a545"}
              name="rating"
            />
            <div
              className="py-1"
              dangerouslySetInnerHTML={{
                __html: nl2br(review.content, true, true),
              }}
            ></div>
          </div>
        )
      })}
    </div>
  )
}
