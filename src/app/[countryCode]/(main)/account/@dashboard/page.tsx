import { Metadata } from "next"

import OrderOverview from "@modules/account/components/order-overview"
import { listCustomerOrders } from "@lib/data"
import { notFound } from "next/navigation"
import LinkBar from "@modules/account/LinkBar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Orders",
  description: "Overview of your previous orders.",
}

export default async function Orders() {
  const orders = await listCustomerOrders()

  if (!orders) {
    notFound()
  }

  return (
    <>
      <div className="container mx-auto mt-5 px-5">
        <div className="hidden md:flex items-center text-xss space-x-2">
          <Link href="/" className="underline">Home</Link>
          <span>/</span>
          <Link href="/account" className="underline">Account</Link>
          <span>/</span>
          <p>Orders</p>
        </div>
      </div>
      <div className="container lg:max-w-26 mx-auto mt-12 px-5">
        <LinkBar />
        <div className="w-full mt-10" data-testid="orders-page-wrapper">
          <OrderOverview orders={orders} />
        </div>
      </div>
    </>
  )
}
