'use client'

import Link from "next/link"
import Image from "next/image"
import React from "react";
import logoImg from "@/public/image/logo.png"
import { useRouter } from 'next/navigation'

export const FormBar = () => {
    const router = useRouter()

    const toggleSearchBar = () => {        
        router.push('/search')
    }
    return (
        <>
            <div className="col-span-4 xl:col-span-1 flex items-center gap-5">
                <button className="md:hidden burger relative w-7 h-5" type="button">
                    <i
                        className="absolute top-1/2 left-0 w-full h-0.5 bg-brand-yellow-100 transition-all ease-linear duration-200"></i>
                </button>
                <Link href="/">
                    <Image src={logoImg} alt="" />
                </Link>
            </div>
            <form action="#" className="menuBtn order-last xl:order-none col-span-8 xl:col-span-4 relative md:max-w-lg w-full rounded overflow-hidden xl:pl-3" onClick={toggleSearchBar}>
                <input type="text" placeholder="Search by keyword, brand or SKU"
                    className="w-full border-none focus:ring-0 text-sm py-2.5 pl-3.5 rounded-l pr-20" />
                <button
                    className="absolute right-0 inset-y-0 bg-brand-yellow-100 hover:bg-brand-yellow-200 transition-colors ease-linear p-3 overflow-hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5"
                        stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
            </form>
        </>
    )
}