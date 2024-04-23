'use client';

import Link from "next/link";

export default function Orders() {
  return (
    <>
      <div className="container mx-auto mt-5 px-5">
        <div className="hidden md:flex items-center text-xss space-x-2">
          <Link href="/" className="underline">Home</Link>
          <span>/</span>
          <p>Orders</p>
        </div>
      </div>
      <div className="container lg:max-w-26 mx-auto text-sm space-y-6 mt-12 px-5">
        <h1 className="text-center text-3xl">Orders</h1>
        <div className="space-y-4">
          <h2 className="text-xl uppercase">shipping</h2>
          <ul className="list-disc pl-5">
            <li>
              Shipping charges are calculated per order by each carrier, and displayed during checkout. If you place
              multiple orders, you will incur shipping charges for each order placed and agree to pay the shipping charges
              upon checkout. We reserve the right to consolidate multiple orders into one shipment. If orders are
              consolidated, no shipping charges will be refunded. We do not ship outside of Canada.
            </li>

            <ul className="space-y-4 pl-5 mt-4" style={{ listStyle: "circle" }}>
              <li>
                <strong className="block">Canada Post</strong>
                All orders being shipped to a P.O. Box must be shipped via Canada Post. Orders containing ammunition or
                gunpowder cannot be shipped via Canada Post.
              </li>
              <li>
                <strong className="block">UPS</strong>
                UPS will only accept shipments to a valid street address and does not deliver to P.O. Boxes. Orders
                containing ammunition or gunpowder can be shipped via UPS to a street address only, and cannot be
                delivered to a P.O. Box.
              </li>
              <li>
                <strong className="block">In-Store Pickup</strong>
                If you selected In-Store Pickup, please wait until you receive your pickup confirmation email before
                heading to the store.&nbsp; When you have received your pickup confirmation email, we ask that you bring two
                pieces of ID with you.&nbsp; At least one piece of ID must be government-issued photo ID (eg. driver&apos;s
                licence).&nbsp; Once you have arrived, visit our customer service counter and we will retrieve your order for
                you.
              </li>
            </ul>

          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl uppercase">pricing</h2>
          <ul className="list-disc pl-5">
            <li>
              Prices displayed are subject to change at any time with or without notice. Always review pricing at time of
              checkout as the pricing for items in your shopping cart may have changed from when they were originally
              placed in the cart.
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl uppercase">promotions</h2>
          <ul className="list-disc space-y-4 pl-5">
            <li>
              From time to time, we may have promotions on pricing, shipping, etc. These promotions are often time limited
              and may require a promo code. Promotions and promotional pricing cannot be applied to prior purchases.
            </li>
            <li>
              <strong>Free Shipping</strong> - Free shipping is valid for single online orders with a subtotal of $299 or
              more to a single address in Canada. Free Shipping will be automatically applied to qualifying orders at
              checkout. Orders containing ammunition do not qualify for free shipping. If you wish to take advantage of
              the Free Shipping promotion, please place a separate order for ammunition.
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl uppercase">cancellations</h2>
          <ul className="list-disc space-y-4 pl-5">
            <li>
              Orders may be cancelled prior to shipment. We will do our best to accommodate your request, but please note
              once your order has been processed we are unable to cancel. Once orders are cancelled, payment
              pre-authorization related to the order will be cancelled as well.

            </li>
            <li>
              Orders cannot be cancelled after they have been shipped. If you need to cancel an order after it has
              shipped, please refer to our <Link href="#" className="inline-block link-tansition underline">Return Policy.</Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl uppercase">payment faq</h2>
          <ul className="list-disc space-y-4 pl-5">
            <li>
              <i>What payment methods do you accept?</i> <br />
              We accept VISA, Mastercard, American Express, and Sezzle as methods of payment.
            </li>
            <li>
              <i>Do you accept gift cards?</i> <br />
              We do not accept gift cards at this time.
            </li>
            <li>
              <i>How are payments handled?</i> <br />
              Upon submitting your order with a credit card, a pre-authorization for the order total is placed on your
              credit card by our payment processor. When we have processed your order, the pre-authorization is converted
              into a charge.
            </li>
            <li>
              <i>Why is my cancelled order still showing on my credit card statement?</i> <br />
              It takes approximately 5 to 10 business days for a pre-authorization or refund request to be approved by
              most banks. If after this time your statement still shows the amount owing, please contact your bank for
              assistance.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
