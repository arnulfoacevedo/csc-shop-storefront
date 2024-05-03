'use client';

import Link from "next/link";

export default function Gunsmithing() {
  return (
    <>
      <div className="container mx-auto mt-5 px-5">
        <div className="hidden md:flex items-center text-xss space-x-2">
          <Link href="/" className="underline">Home</Link>
          <span>/</span>
          <p>Gunsmithing</p>
        </div>
      </div>
      <div className="container lg:max-w-26 mx-auto mt-12 px-5">
        <h1 className="text-center text-3xl">Gunsmithing</h1>
        <div
          className="flex flex-col md:flex-row md:items-center justify-start font-semibold text-sm pl-2 md:pl-0 md:gap-4 mt-6">
          <Link href="term.html" className="underline -translate-x-2 md:translate-x-0">Services</Link>
          <Link href="term.html" className="underline">Cerakote</Link>
        </div>
        <div className="text-xl border-b border-brand-gray-200 space-y-6 mt-6 lg:mt-12 pb-6">
          <p>
            Calgary Shooting Centre has on-site Gunsmiths who can provide the expert repairs and service you require.
            We are the authorized repair centre for Blaser, Kreighoff, Weatherby, & Grey Birch.
          </p>
          <p>
            Please note that because our gunsmiths are working on your guns, they are not always available via phone.
          </p>
          <p>
            To contact our Gunsmith Department, please visit the relevant pages above, fill out the contact form, and
            they will get back to you as soon as they can. Thanks!
          </p>
        </div>
      </div>
    </>
  );
}
