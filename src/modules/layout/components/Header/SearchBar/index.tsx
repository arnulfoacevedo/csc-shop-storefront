// 'use client'

// import { useEffect, useState } from "react";
// import React from "react";
import Image from "next/image"
// import { useParams, useRouter } from "next/navigation";
import { signOut } from "@modules/account/actions"
import CartButton from "@modules/layout/components/cart-button"

import Link from "next/link";
import { HiddenBar } from "./HiddenBar";
import logoImg from "@/public/image/logo.png"
import { AvatarBar } from "./AvatarBar";
import { FormBar } from "./FormBar";
import { getCustomer } from "@lib/data";



const SearchBar = async () => {
    // const [togglesearch, setTogglesearch] = useState(true);
    // const toplinkRef = React.useRef<HTMLAnchorElement>(null);
    // const burgerRef = React.useRef<HTMLButtonElement>(null);

    // const toggleSearchBar = () => {
    //     setTogglesearch(togglesearch ? false : true);
    // }

    // const hiddenBars = () => {
    //     setTogglesearch(true);
    // }

    // const setToggleMobile = (e: any) => {
    //     toplinkRef.current?.classList.toggle('hidden')
    //     burgerRef.current?.classList.toggle('burger_active')
    //     // toggleMobileMenu();
    //     document.body.classList.toggle('overflow-hidden')
    // }
    
    const customer = await getCustomer().catch(() => null)

    return (
        <>
            <HiddenBar />

            <Link href="#"
                className="top-link block font-arial font-bold text-sm text-center bg-brand-gray-200 hover:text-brand-yellow-100 transition-colors ease-linear underline py-1.5 px-4">
                ⛟ Free Shipping on Orders $299+ excl. Ammo
            </Link>

            <div className="searchbar bg-brand-gray-100">
                <div className="container mx-auto p-5">
                    <div className="relative grid grid-cols-8 items-center gap-4 md:py-2.5">
                        <FormBar />
                        <div className="col-span-4 xl:col-span-3 flex items-center justify-end text-white space-x-5">
                            <AvatarBar customer={customer} />
                            <CartButton />
                        </div>
                    </div>
                </div>
            </div>
            <div className={"overlay fixed inset-0 bg-black/50 z-20 hidden"}></div>
        </>
    )
}

export default SearchBar;