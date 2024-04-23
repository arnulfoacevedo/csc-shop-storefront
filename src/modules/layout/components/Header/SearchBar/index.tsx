'use client'

import { useEffect, useState } from "react";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { signOut } from "@modules/account/actions"
import Image from "next/image"

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from "next/link";
import { HiddenBar } from "./HiddenBar";
import logoImg from "@/public/image/logo.png"

interface Props {
    jwt: string | undefined;
    // toggleMobileMenu: Function
}

const SearchBar = ({jwt}: Props) => {
    const [togglesearch, setTogglesearch] = useState(true);
    const [toggleavatar, setToggleavatar] = useState(true);
    const [togglecard, setTogglecard] = useState(true);
    const avatarRef = React.useRef<HTMLDivElement>(null);
    const cardRef = React.useRef<HTMLDivElement>(null);
    const toplinkRef = React.useRef<HTMLAnchorElement>(null);
    const burgerRef = React.useRef<HTMLButtonElement>(null);
    const router = useRouter();
    const { countryCode } = useParams() as { countryCode: string }

    useEffect(() => {
        const handler = (event: any) => {
            if (avatarRef.current && !avatarRef.current.contains(event.target)) {
                setToggleavatar(true);
            }
            if (cardRef.current && !cardRef.current.contains(event.target)) {
                setTogglecard(true);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, []);

    const toggleSearchBar = () => {
        setTogglesearch(togglesearch ? false : true);
    }

    const toggleAvatar = () => {
        setToggleavatar(toggleavatar ? false : true);
    }

    const toggleCard = () => {
        setTogglecard(togglecard ? false : true);
    }

    const hiddenBars = () => {
        setTogglesearch(true);
        setToggleavatar(true);
    }

    const gotoCart = () => {
        router.push('/cart');
        toggleCard();
    }

    const gotoCheckout = () => {
        router.push('/checkout');
        toggleCard();
    }

    const setToggleMobile = (e: any) => {
        toplinkRef.current?.classList.toggle('hidden')
        burgerRef.current?.classList.toggle('burger_active')
        // toggleMobileMenu();
        document.body.classList.toggle('overflow-hidden')
    }

    const handleLogout = async () => {
        await signOut(countryCode)
    }
    
    return (
        <>
            <HiddenBar closeBar={toggleSearchBar} togglebar={togglesearch} />

            <Link href="#"
                className="top-link block font-arial font-bold text-sm text-center bg-brand-gray-200 hover:text-brand-yellow-100 transition-colors ease-linear underline py-1.5 px-4" ref={toplinkRef}>
                ⛟ Free Shipping on Orders $299+ excl. Ammo
            </Link>

            <div className="searchbar bg-brand-gray-100">
                <div className="container mx-auto p-5">
                    <div className="relative grid grid-cols-8 items-center gap-4 md:py-2.5">
                        <div className="col-span-4 xl:col-span-1 flex items-center gap-5">
                            <button className="md:hidden burger relative w-7 h-5" type="button" onClick={setToggleMobile} ref={burgerRef}>
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
                        <div className="col-span-4 xl:col-span-3 flex items-center justify-end text-white space-x-5">
                            <div className="relative hidden md:block" ref={avatarRef}>
                                {
                                    jwt != undefined ?
                                    <button type="button"
                                        className="dropdown-button w-full border-none flex items-center font-bold hover:text-brand-yellow-100 transition-colors" onClick={toggleAvatar}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                            className="shrink-0 w-5 h-5 pointer-events-none">
                                            <path fillRule="evenodd"
                                                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                                                clipRule="evenodd" />
                                        </svg>
                                        <span className="hidden xl:inline-block pointer-events-none">Account</span>
                                    </button> : <Link
                                        className="dropdown-button w-full border-none flex items-center font-bold hover:text-brand-yellow-100 transition-colors" href={"/account"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                            className="shrink-0 w-5 h-5 pointer-events-none">
                                            <path fillRule="evenodd"
                                                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                                                clipRule="evenodd" />
                                        </svg>
                                        <span className="hidden xl:inline-block pointer-events-none">Account</span>
                                    </Link>
                                }
                                <div className={"avatar-menu absolute right-0 top-10 w-36 text-brand-gray-100 text-sm bg-white z-20" + (toggleavatar ? " hidden" : "")}>
                                    <div className="relative account-shape flex flex-col space-y-2 p-3">
                                        <Link className="underline link-tansition" href="/yourorder">Orders</Link>
                                        <Link className="underline link-tansition" href="#">Messages</Link>
                                        <Link className="underline link-tansition" href="/address">Addresses</Link>
                                        <Link className="underline link-tansition" href="/payment">Payment Methods</Link>
                                        <Link className="underline link-tansition" href="/yourlist">Your Lists</Link>
                                        <Link className="underline link-tansition" href="/recently">Recently Viewed</Link>
                                        <Link className="underline link-tansition" href="#">Account Settings</Link>
                                        <Link className="underline link-tansition" href="#" onClick={handleLogout}>Sign out</Link>
                                    </div>
                                </div>
                            </div>
                            <div ref={cardRef}>
                                <button type="button" className="dropdown-button border-none flex items-center space-x-4" onClick={toggleCard}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        className="w-5 h-5 hover:text-brand-yellow-100 transition-colors ease-linear">
                                        <path
                                            d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                                    </svg>
                                    <span
                                        className="pointer-events-none w-8 h-8 text-white shrink-0 leading-8 bg-brand-yellow-100 rounded-full">0</span>
                                </button>
                                <div
                                    className={"card-bar absolute right-0 top-10 text-brand-gray-100 max-w-xs w-full text-sm bg-white p-5 z-20 mt-7" + (togglecard ? " hidden" : "")}>
                                    <h2 className="shape relative text-xl pb-3">Your card</h2>
                                    <div className="overflow-scroll">
                                        <div className="h-48 overflow-scroll">
                                            <div className="border-t border-brand-gray-200 space-y-2 py-4">
                                                <div className="flex items-start space-x-2">
                                                    <div className="w-14 h-14  shrink-0">
                                                        <Image className="w-full h-full object-cover" src="" fill alt="" />
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        <Link className="block" href="#">
                                                            ZEISS Conquest V4 3-12x56 SFP Ri…
                                                        </Link>
                                                        <p>ISS3182</p>
                                                        <div className="flex items-center gap-1.5">
                                                            <input type="text" className="w-8 h-6 border-brand-gray-200 focus:ring-0" defaultValue="1" />
                                                            <span>×$1,500.00</span>
                                                            <button type="button" className="bg-brand-yellow-100 rounded-full ml-auto">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                                                    stroke="currentColor" className="w-3.5 h-3.5">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="border-t border-brand-gray-200 space-y-2 py-4">
                                                <div className="flex items-start space-x-2">
                                                    <div className="w-14 h-14  shrink-0">
                                                        <Image className="w-full h-full object-cover" src="" fill alt="" />
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        <Link className="block" href="#">
                                                            ZEISS Conquest V4 3-12x56 SFP Ri…
                                                        </Link>
                                                        <p>ISS3182</p>
                                                        <div className="flex items-center gap-1.5">
                                                            <input type="tel" className="w-8 h-6 border-brand-gray-200 focus:ring-0" defaultValue="1" />
                                                            <span>×$1,500.00</span>
                                                            <button type="button" className="bg-brand-yellow-100 rounded-full ml-auto">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                                                    stroke="currentColor" className="w-3.5 h-3.5">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between border-t border-brand-gray-200 py-1.5">
                                        <p> Total Items:</p>
                                        <p>3</p>
                                    </div>

                                    <div className="flex items-center justify-between border-t border-brand-gray-200 py-1.5">
                                        <p>Subtotal:</p>
                                        <p>$1,584.00</p>
                                    </div>

                                    <div className="flex items-center justify-between border-t border-brand-gray-200 py-1.5">
                                        <p>Subtotal:</p>
                                        <p>$1,584.00</p>
                                    </div>

                                    <div className="flex items-center justify-between border-t border-brand-gray-200 py-1.5">
                                        <p>GST (5%):</p>
                                        <p>$79.20</p>
                                    </div>

                                    <div className="flex items-center justify-between border-t border-brand-gray-200 py-1.5">
                                        <p>Grand total:</p>
                                        <p>$1,663.20</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mt-1.5">
                                        <button type="button" className="btn btn-white-outline !block h-10" onClick={gotoCart}>View Cart</button>
                                        <button type="button" className="btn btn-yellow h-10" onClick={gotoCheckout}>Check out</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"overlay fixed inset-0 bg-black/50 z-20" + (togglesearch ? " hidden" : "")} onClick={hiddenBars}></div>
        </>
    )
}

export default SearchBar;