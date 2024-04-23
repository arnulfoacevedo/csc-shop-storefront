'use client';

import Link from "next/link";

export default function Contact() {
  return (
    <>
      <div className="container mx-auto mt-5 px-5">
        <div className="hidden md:flex items-center text-xss space-x-2">
          <Link href="/" className="underline">Home</Link>
          <span>/</span>
          <p>Contact Us</p>
        </div>
      </div>
      <div className="container lg:max-w-26 mx-auto mt-12 px-5">
        <h1 className="text-center text-3xl">Contact Us</h1>
        <div
          className="flex flex-col md:flex-row md:items-center justify-start font-semibold text-sm pl-2 md:pl-0 md:gap-4 mt-6">
          <Link href="term.html" className="underline -translate-x-2 md:translate-x-0">General Inquiries</Link>
          <Link href="term.html" className="underline">Online Orders</Link>
          <Link href="term.html" className="underline">Special Orders</Link>
          <Link href="term.html" className="underline">Gunsmith Dept.</Link>
        </div>
        <div className="text-sm space-y-6 mt-6 lg:mt-12">
          <p>
            <strong>Our support staff are a group of individuals dedicated to helping you with any questions or issues you
              might have.</strong> <br />
            Feel free to submit a support request if you need something, have a question, or anything else! We are here to
            help.
          </p>
          <p>
            If you have questions relating to any of the categories above, please click the link, fill out the contact
            form, and we will get back to you as soon as possible! <br />
            <strong>Please Note:</strong> It will take 5 to 7 business days for us to reply due to the high contact centre
            volume.
          </p>
          <p>
            If you&apos;d prefer to speak to our sales-floor staff on the phone, feel free to call us at
            <Link className="inline-block link-tansition underline" href="tel:+1 (403) 451-1777">+1 (403) 451-1777</Link>. <br />
            We are always standing by to take your call during store hours
          </p>
        </div>
      </div>
    </>
  );
}
