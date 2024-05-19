import { Customer, Order } from "@medusajs/medusa"
import Link from "next/link"

type OverviewProps = {
  customer: Omit<Customer, "password_hash"> | null
  // orders: Order[] | null
}

const Overview = ({ customer }: OverviewProps) => {
  return (
    <>
      <div className="container mx-auto mt-5 px-5">
        <div className="hidden md:flex items-center text-xss space-x-2">
          <Link href="/" className="underline">Home</Link>
          <span>/</span>
          <Link href="/yourorder" className="underline">Your Account</Link>
          <span>/</span>
          <p>Your orders</p>
        </div>
      </div>
      <div className="container lg:max-w-26 mx-auto mt-12 px-5">
        <h1 className="text-center text-3xl">Your orders</h1>
        <div className="flex flex-wrap items-center justify-start lg:justify-between font-semibold text-sm gap-y-2 gap-x-4 mt-6">
          <Link href="/yourorder" className="text-brand-gray-600 underline">Orders</Link>
          <Link href="/message" className="link-tansition underline">Messages (0)</Link>
          <Link href="/address" className="link-tansition underline">Addresses</Link>
          {/* <Link href="/payment" className="link-tansition underline">Payment Methods</Link> */}
          {/* <Link href="/yourlist" className="link-tansition underline">Your Lists (0)</Link> */}
          <Link href="/recently" className="link-tansition underline">Recently Viewed</Link>
          <Link href="/settings" className="link-tansition underline">Account Settings</Link>
        </div>
        <div className="flex items-center bg-[#dfdfdf] rounded-md space-x-4 mt-10 py-3 px-4">
          <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z">
            </path>
          </svg>
          <p className="text-sm">
            You have not placed any orders with us. When you do, their status will appear on this page.
          </p>
        </div>
      </div>
    </>

  )
}

export default Overview
