"use client"

import { Popover, Transition } from "@headlessui/react"
import { Cart } from "@medusajs/medusa"
import { Button } from "@medusajs/ui"
import { useParams, usePathname } from "next/navigation"
import { Fragment, useEffect, useRef, useState } from "react"

import { formatAmount } from "@lib/util/prices"
import DeleteButton from "@modules/common/components/delete-button"
import LineItemOptions from "@modules/common/components/line-item-options"
import LineItemPrice from "@modules/common/components/line-item-price"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "@modules/products/components/thumbnail"

const CartDropdown = ({
    cart: cartState,
}: {
    cart?: Omit<Cart, "beforeInsert" | "afterLoad"> | null
}) => {
    const [activeTimer, setActiveTimer] = useState<NodeJS.Timer | undefined>(
        undefined
    )
    const [cartDropdownOpen, setCartDropdownOpen] = useState(false)

    const { countryCode } = useParams()

    const open = () => setCartDropdownOpen(true)
    const close = () => setCartDropdownOpen(false)

    const totalItems =
        cartState?.items?.reduce((acc, item) => {
            return acc + item.quantity
        }, 0) || 0

    const itemRef = useRef<number>(totalItems || 0)

    const timedOpen = () => {
        open()

        const timer = setTimeout(close, 5000)

        setActiveTimer(timer)
    }

    const openAndCancel = () => {
        if (activeTimer) {
            clearTimeout(activeTimer)
        }

        open()
    }

    // Clean up the timer when the component unmounts
    useEffect(() => {
        return () => {
            if (activeTimer) {
                clearTimeout(activeTimer)
            }
        }
    }, [activeTimer])

    const pathname = usePathname()

    // open cart dropdown when modifying the cart items, but only if we're not on the cart page
    useEffect(() => {
        if (itemRef.current !== totalItems && !pathname.includes("/cart")) {
            timedOpen()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [totalItems, itemRef.current])

    return (
        <div
            className="h-full z-50"
            onMouseEnter={openAndCancel}
            onMouseLeave={close}
        >
            <Popover className="relative h-full">
                <Popover.Button className="dropdown-button border-none flex items-center space-x-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        className="w-5 h-5 hover:text-brand-yellow-100 transition-colors ease-linear">
                        <path
                            d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                    </svg>
                    <span className="pointer-events-none w-8 h-8 text-white shrink-0 leading-8 bg-brand-yellow-100 rounded-full">{totalItems}</span>
                </Popover.Button>
                <Transition
                    show={cartDropdownOpen}
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                >
                    <Popover.Panel
                        static
                        className="hidden small:block absolute top-11 right-0 bg-white border-x border-b border-gray-200 w-[420px] text-ui-fg-base p-3 account-shape"
                        data-testid="nav-cart-dropdown"
                    >
                        <div className="py-2 flex items-center justify-center">
                            <h3 className="shape relative text-xl"> Your Cart</h3>
                        </div>
                        {cartState && cartState.items?.length ? (
                            <>
                                <div className="overflow-y-scroll max-h-[402px] grid grid-cols-1 gap-y-8 no-scrollbar p-px">
                                    {cartState.items
                                        .sort((a, b) => {
                                            return a.created_at > b.created_at ? -1 : 1
                                        })
                                        .map((item) => (
                                            <div
                                                className="grid grid-cols-[122px_1fr] gap-x-4"
                                                key={item.id}
                                                data-testid="cart-item"
                                            >
                                                <LocalizedClientLink
                                                    href={`/product/${item.variant.product.handle}`}
                                                    className="w-24"
                                                >
                                                    <Thumbnail thumbnail={item.thumbnail} size="square" />
                                                </LocalizedClientLink>
                                                <div className="flex flex-col justify-between flex-1">
                                                    <div className="flex flex-col flex-1">
                                                        <div className="flex items-start justify-between">
                                                            <div className="flex flex-col overflow-ellipsis whitespace-nowrap mr-4 w-[180px]">
                                                                <h3 className="text-base-regular overflow-hidden text-ellipsis">
                                                                    <LocalizedClientLink
                                                                        href={`/product/${item.variant.product.handle}`}
                                                                        data-testid="product-link"
                                                                    >
                                                                        {item.title}
                                                                    </LocalizedClientLink>
                                                                </h3>
                                                                <LineItemOptions
                                                                    variant={item.variant}
                                                                    data-testid="cart-item-variant"
                                                                    data-value={item.variant}
                                                                />
                                                                <span
                                                                    className="txt-small"
                                                                    data-testid="cart-item-quantity"
                                                                    data-value={item.quantity}
                                                                >
                                                                    Quantity: {item.quantity}
                                                                </span>
                                                            </div>
                                                            <div className="flex justify-end">
                                                                <LineItemPrice
                                                                    region={cartState.region}
                                                                    item={item}
                                                                    style="tight"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <DeleteButton
                                                        id={item.id}
                                                        className="mt-1"
                                                        data-testid="cart-item-remove-button"
                                                    >
                                                        Remove
                                                    </DeleteButton>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                                <div className="flex items-center justify-between border-t border-brand-gray-200 py-1.5">
                                    <p> Total Items:</p>
                                    <p>{totalItems}</p>
                                </div>

                                <div className="flex items-center justify-between border-t border-brand-gray-200 py-1.5">
                                    <p>Subtotal:</p>
                                    <p>
                                        {formatAmount({
                                            amount: cartState.subtotal || 0,
                                            region: cartState.region,
                                            includeTaxes: false,
                                        })}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between border-t border-brand-gray-200 py-1.5">
                                    <p>GST (0%):</p>
                                    <p>$0.0</p>
                                </div>

                                <div className="flex items-center justify-between border-t border-brand-gray-200 py-1.5">
                                    <p>Grand total:</p>
                                    <p>
                                        {formatAmount({
                                            amount: cartState.subtotal || 0,
                                            region: cartState.region,
                                            includeTaxes: false,
                                        })}
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-1.5">
                                    <LocalizedClientLink href="/cart">
                                        <Button type="button" variant="secondary" className="btn btn-white-outline !block h-10 w-full">View Cart</Button>
                                    </LocalizedClientLink>
                                    <LocalizedClientLink href="/checkout?step=address">
                                        <Button type="button" variant="secondary" className="btn btn-yellow h-10 w-full">Check out</Button>
                                    </LocalizedClientLink>
                                </div>
                            </>
                        ) : (
                            <div>
                                <div className="flex py-16 flex-col gap-y-4 items-center justify-center">
                                    <div className="bg-gray-900 text-small-regular flex items-center justify-center w-6 h-6 rounded-full text-white">
                                        <span>0</span>
                                    </div>
                                    <span>Your shopping bag is empty.</span>
                                    <div>
                                        <LocalizedClientLink href="/store/all">
                                            <>
                                                <span className="sr-only">Go to all products page</span>
                                                <Button onClick={close}>Explore products</Button>
                                            </>
                                        </LocalizedClientLink>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Popover.Panel>
                </Transition>
            </Popover>
        </div>
    )
}

export default CartDropdown
