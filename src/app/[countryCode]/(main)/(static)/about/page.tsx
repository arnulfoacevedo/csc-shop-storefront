'use client';

import Link from "next/link";
import Image from "next/image";

import Img from "@/public/image/proudly-canadian-v2.png"

export default function About() {
  return (
    <>
      <div className="container mx-auto mt-5 px-5">
        <div className="hidden md:flex items-center text-xss space-x-2">
          <Link href="/" className="underline">Home</Link>
          <span>/</span>
          <p>About CSC</p>
        </div>
      </div>
      <div className="container lg:max-w-26 mx-auto mt-12 px-5">
        <div className="border-b border-brand-gray-200 space-y-6 pb-6">
          <h1 className="text-center text-3xl">About CSC</h1>
          <div className="max-w-lg w-full h-24">
            <Image className="w-full h-full object-contain" src={Img} alt="" />
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl">CSC is Canada&apos;s Gun Shop</h2>
            <p className="text-sm">
              We&apos;re dedicated to bringing you the firearms, optics, ammunition and accessories that you&apos;re looking for at
              the best prices around, and now we&apos;re taking steps to enhance your shopping experience. We&apos;ve designed a new
              website for you and with it will be coming new features, products, and functionality.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="font-bold text-xl">Create a New Account</h2>
            <ul className="text-sm list-disc pl-5">
              <li>
                Your account and order history from the previous website is not available on this new site. However, we do
                still have your records available in-store should you need them.
              </li>
              <li>
                <Link className="font-bold link-tansition underline" href="https://store.theshootingcentre.com/login.php">
                  Click here to create your new account.</Link>
              </li>
            </ul>

          </div>
          <div className="space-y-3">
            <h2 className="text-xl">With your new account you&apos;ll be able to:</h2>
            <ul className="text-sm list-disc pl-5">
              <li>Check out faster</li>
              <li>Save multiple shipping addresses</li>
              <li>Access your order history</li>
              <li>Track new orders</li>
              <li>Save items to your lists</li>
              <li>... and much more.</li>
            </ul>
          </div>
        </div>
        <div className="text-sm space-y-5 mt-6">
          <h2>Retail Store and Firing Range</h2>
          <p>
            Did you know we also have a shooting club?
            <Link href="#" className="inline-block link-tansition underline">Click here to visit our Calgary Shooting Club
              website.</Link>
            <br />
            If you&apos;re local to Calgary, come visit the firing range, rent a few firearms, and join in on the fun!
          </p>
          <p>
            Our retail store and firing range is open from <b>9:00 AM to 9:00 PM MST</b> every day, excluding holidays and
            special events.
            Staff will always be standing by during store hours to take your call and answer your general inquiries. <br />
            <b>Phone:</b> <Link href="tel:+1 (403) 451-1777" className="inline-block link-tansition underline">+1 (403)
              451-1777</Link>
          </p>
          <p>
            <b>If you&apos;d like to visit us, you can find us at:</b>
            <br /> Calgary Shooting Centre Ltd. <br />
            Bay 4, 7130 Fisher Road SE <br />
            Calgary, Alberta T2H 0W3 <br />
            Canada
          </p>
          <div>
            <iframe className="max-w-5xl xl:w-[996px] w-full h-60 md:h-96 xl:h-[492px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus" style={{ border: 0 }} loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
