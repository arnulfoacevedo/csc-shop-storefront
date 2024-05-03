'use client';

import Link from "next/link";

export default function Support() {
  return (
    <>
      <div className="container mx-auto mt-5 px-5">
        <div className="hidden md:flex items-center text-xss space-x-2">
          <Link href="/" className="underline">Home</Link>
          <span>/</span>
          <p>Support</p>
        </div>
      </div>
      <div className="container lg:max-w-26 mx-auto mt-12 px-5">
        <h1 className="text-center text-3xl">Support</h1>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between font-semibold text-sm pl-2 md:pl-0 md:gap-4 mt-4">
          <Link href="/terms#shipping" className="underline -translate-x-2 md:translate-x-0">Shipping</Link>
          <Link href="/terms#policy" className="underline">Returns</Link>
          <Link href="/terms#exchange" className="underline">Exchanges</Link>
          <Link href="/terms#price" className="underline">Price Matching</Link>
          <Link href="/privacy" className="underline">Privacy Policy</Link>
          <Link href="/resources" className="underline">Resources</Link>
          <Link href="#" className="underline">Sezzle</Link>
          <Link href="/contact" className="underline">Contact</Link>
        </div>
        <div className="space-y-3 mt-14">
          <h2 className="text-2xl">What do you need help with?</h2>
          <p className="text-sm">
            Answers to many of the commonly asked questions can be found in the links above. However, if you are unable to
            find the answer to your question, please feel free to
            <Link href="#" className="inline-block link-tansition underline">contact us</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
