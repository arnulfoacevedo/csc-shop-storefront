"use client"

import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { useFormState } from "react-dom"

import { Button, Toaster, useToast } from "@medusajs/ui"
import { Customer } from "@medusajs/medusa"
import { review } from "@modules/review/actions"
import StarRatings from "react-star-ratings"

type Props = {
  customer: Omit<Customer, "password_hash"> | null
  product_id: string
  product_handle: string
}

export default function ReviewModal({
  customer,
  product_id,
  product_handle,
}: Props) {
  const router = useRouter()
  const searchRef = useRef(null)
  const [message, formAction] = useFormState(review, null)
  const [rating, setRating] = useState(0)
  const { toast } = useToast()

  const handleOutsideClick = (event: MouseEvent) => {
    if (event.target === searchRef.current) {
      router.push(`/product/${product_handle}`)
    }
  }

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick)
    // cleanup
    return () => {
      window.removeEventListener("click", handleOutsideClick)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  // disable scroll on body when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  // on escape key press, close modal
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        router.push(`/product/${product_handle}`)
      }
    }
    window.addEventListener("keydown", handleEsc)

    // cleanup
    return () => {
      window.removeEventListener("keydown", handleEsc)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (message == "OK") {
      router.push(`/product/${product_handle}`)
      toast({
        title: "Review",
        description: "Successully saved!",
        variant: "success",
        duration: 3000,
      })
    }
  }, [message])

  const changeRating = (newRating: number) => {
    setRating(newRating)
  }
  // close modal on outside click
  const CloseModal = () => {
    router.push(`/product/${product_handle}`)
  }

  return (
    <div className="relative z-[75]">
      <Toaster />
      <div
        className="fixed inset-0 bg-opacity-75 backdrop-blur-md opacity-100 h-screen w-screen"
        ref={searchRef}
      />
      <div className="fixed inset-0 px-5 sm:p-0">
        <div className="flex flex-col justify-start w-full transform p-5 items-center text-left align-middle transition-all h-4/5 bg-transparent shadow-none">
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <form
              action={formAction}
              className="contact order-first md:order-none md:col-span-2 bg-brand-gray-200 border border-brand-gray-200 space-y-7 p-5 w-[400px]"
            >
              <p className="text-xl text-center">Write a Review</p>
              <div className="space-y-2">
                <label>Rating:</label>
                <StarRatings
                  changeRating={(r) => changeRating(r)}
                  rating={rating}
                  starDimension={"30px"}
                  starSpacing={"0px"}
                  starRatedColor={"#f1a545"}
                  starHoverColor={"#f1a545"}
                  name="rating"
                />
              </div>
              {/* {!customer && (
                <>
                  <div className="space-y-2">
                    <label>Name:</label>
                    <input type="text" name="display_name" />
                  </div>
                  <div className="space-y-2">
                    <label>Email:</label>
                    <input type="email" name="email" />
                  </div>
                </>
              )} */}
              <div className="space-y-2">
                <label>Review:</label>
                <textarea name="content" rows={5} required></textarea>
              </div>
              <input type="hidden" name="product_id" value={product_id} />
              <input type="hidden" name="rating" value={rating} />
              {customer && (
                <>
                  <input type="hidden" name="customer_id" value={customer.id} />
                  <input
                    type="hidden"
                    name="display_name"
                    value={customer.first_name + " " + customer.last_name}
                  />
                </>
              )}
              <div className="flex justify-end">
                <Button
                  className="btn btn-yellow py-2 px-5"
                  variant="secondary"
                >
                  Save
                </Button>
                <div
                  className="transition-fg relative inline-flex items-center justify-center overflow-hidden rounded-md outline-none shadow-buttons-neutral text-ui-fg-base bg-ui-button-neutral after:button-neutral-gradient hover:bg-ui-button-neutral-hover hover:after:button-neutral-hover-gradient active:bg-ui-button-neutral-pressed active:after:button-neutral-pressed-gradient focus:shadow-buttons-neutral-focus txt-compact-small-plus ml-2 px-5 py-2 btn btn-white-outline h-10 cursor-pointer"
                  onClick={CloseModal}
                >
                  Close
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
