'use client'

import { signOut } from "@modules/account/actions";
import Link from "next/link"
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Customer } from "@medusajs/medusa"

interface Props {
    customer: Omit<Customer, "password_hash"> | null
}

export const AvatarBar = ({ customer }: Props) => {
    const [toggleavatar, setToggleavatar] = useState(true);

    const avatarRef = React.useRef<HTMLDivElement>(null);
    const { countryCode } = useParams() as { countryCode: string }

    const handleLogout = async () => {
        await signOut(countryCode)
        toggleAvatar();
    }

    const toggleAvatar = () => {
        setToggleavatar(toggleavatar ? false : true);
    }

    useEffect(() => {
        const handler = (event: any) => {
            if (avatarRef.current && !avatarRef.current.contains(event.target)) {
                setToggleavatar(true);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, []);

    return (
        <div className="relative hidden md:block" ref={avatarRef}>
            {
                customer ?
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
                    <Link className="underline link-tansition" href="/yourorder" onClick={toggleAvatar}>Orders</Link>
                    <Link className="underline link-tansition" href="#" onClick={toggleAvatar}>Messages</Link>
                    <Link className="underline link-tansition" href="/address" onClick={toggleAvatar}>Addresses</Link>
                    <Link className="underline link-tansition" href="/payment" onClick={toggleAvatar}>Payment Methods</Link>
                    <Link className="underline link-tansition" href="/yourlist" onClick={toggleAvatar}>Your Lists</Link>
                    <Link className="underline link-tansition" href="/recently" onClick={toggleAvatar}>Recently Viewed</Link>
                    <Link className="underline link-tansition" href="#" onClick={toggleAvatar}>Account Settings</Link>
                    <Link className="underline link-tansition" href="#" onClick={handleLogout}>Sign out</Link>
                </div>
            </div>
        </div>
    )
}
