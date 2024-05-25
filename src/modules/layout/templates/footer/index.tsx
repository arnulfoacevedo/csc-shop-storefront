import Link from "next/link"
import Image from "next/image"

import visaImg from "@/public/image/visa.png"
import cardImg from "@/public/image/mastercard-icon-512x395-qoejqj7z.png"
import expressImg from "@/public/image/american-express-icon-12.jpg"

const Footer = () => {
  return (
    <footer>
      <div className="bg-brand-gray-100 mt-5">
        <div className="container mx-auto text-white pt-10 pb-20 lg:pb-7 px-5">
          <div className="grid md:grid-cols-2 lg:grid-cols-6 text-center md:text-start gap-y-10 gap-6">
            <div className="footer-link flex flex-col space-y-3">
              <h5>Pages</h5>
              <Link href="/about">About CSC</Link>
              <Link href="/orders">Orders</Link>
              <Link href="/articles">Articles</Link>
              <Link href="/support">Support</Link>
              <Link href="/contact">Contact Us</Link>
              <Link href="/gunsmithing">Gunsmithing</Link>
              <Link href="/terms">Terms &amp; Conditions</Link>
              <Link href="/sitemap">Sitemap</Link>
            </div>
            <div className="footer-link flex flex-col space-y-3">
              <h5>Categories</h5>
              <Link href="#">Firearms</Link>
              <Link href="#">Optics</Link>
              <Link href="#">Ammunition</Link>
              <Link href="#">Reloading</Link>
              <Link href="#">Parts &amp; Accessories</Link>
              <Link href="#">Lifestyle</Link>
            </div>
            <div className="footer-link flex flex-col space-y-3">
              <h5>Info</h5>
              <p className="text-sm">
                Calgary Shooting Centre Ltd. Bay 4, 7130 Fisher Road SE Calgary,
                AlbertLink T2H 0W3
              </p>
              <Link href="tel:+1 (403) 451-1777">
                Call us: +1 (403) 451-1777
              </Link>
            </div>
            <div className="md:col-span-2 lg:col-span-3 flex flex-col space-y-3">
              <h5>Subscribe to our newsletter</h5>
              <p className="text-sm">
                Get the latest updates on new products and upcoming sales
              </p>
              <form
                action="#"
                className="w-full flex flex-col xl:flex-row items-start text-brand-gray-100 rounded gap-y-3"
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  className="relative w-full border-none focus:ring-0 text-sm rounded xl:rounded-r-none py-2.5 px-3"
                />
                <Link
                  href="#"
                  className="h-10 w-full xl:w-auto btn btn-yellow rounded xl:rounded-r xl:rounded-l-none px-8 py-2"
                >
                  Subscime
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1a1a1a]">
        <div className="container mx-auto text-white py-7 px-5">
          <div className="flex flex-col md:flex-row justify-between text-center md:text-start items-center gap-6">
            <div className="footer-link text-[13px]/5">
              <p>© 2024 CSC - Canada&quot;s Gun Shop </p>
              <Link href="#" className="underline decoration-white">
                Manage Website DatLink Collection Preferences
              </Link>
            </div>

            <div className="order-first md:order-none flex items-center gap-2.5">
              <div className="w-16">
                <Image
                  className="w-full h-full object-contain"
                  src={visaImg}
                  alt=""
                />
              </div>
              <div className="w-16 h-8">
                <Image
                  className="w-full h-full object-contain"
                  src={cardImg}
                  alt=""
                />
              </div>
              <div className="w-8 h-8">
                <Image
                  className="w-full h-full object-contain bg-white"
                  src={expressImg}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
