'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LinkBar() {
    const paths = usePathname().split('/');
    const currentRoute = paths.pop() || '';
    const title = currentRoute[0].toUpperCase() + currentRoute.slice(1);
  
    return (
        <>
            <h1 className="text-center text-3xl">{title}</h1>
            <div className="flex flex-wrap items-center justify-start lg:justify-between font-semibold text-sm gap-y-2 gap-x-4 mt-6">
                <Link href="/yourorder" className="text-brand-gray-600 underline">Orders</Link>
                <Link href="/message" className="link-tansition underline">Messages (0)</Link>
                <Link href="/address" className="link-tansition underline">Addresses</Link>
                <Link href="/payment" className="link-tansition underline">Payment Methods</Link>
                <Link href="/yourlist" className="link-tansition underline">Your Lists (0)</Link>
                <Link href="/recently" className="link-tansition underline">Recently Viewed</Link>
                <Link href="/settings" className="link-tansition underline">Account Settings</Link>
            </div>
        </>
    )
}