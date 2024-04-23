import Link from "next/link";
import Image from 'next/image';

import firearmImg from "@/public/image/firearms.jpg";
import opticsImg from "@/public/image/optics-1920x1080__77183.jpg";
import lifestyleImg from "@/public/image/lifestyle-1920x1080.jpg";
import bannerImg from "@/public/image/free-shipping-001-desktop-banner-1600x150.png";

import PopularProducts from "@modules/home/components/popular-products";
import NewProducts from "@modules/home/components/new-products";
import FeaturedProducts from "@modules/home/components/featured-products";
import Brands from "@modules/home/components/brands";
import { Product } from "@medusajs/medusa";
import { ProductCollectionWithPreviews } from "types/global";
import { cache } from "react";
import { getProductsList } from "@lib/data";


export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {

  const result = await getProductsList({countryCode: countryCode});
  const products = result.response.products;  

  return (
    <>
      <div className="container mx-auto px-5 pb-20 mt-5">
        <div className="grid xl:grid-cols-2 gap-5">
          <Link href="#" className="block">
            <Image className="max-h-100 w-full h-full" src={firearmImg} alt="" />
          </Link>
          <Link href="#" className="md:hidden xl:block">
            <Image className="max-h-100 w-full h-full" src={opticsImg} alt="" />
          </Link>
        </div>
        <div className="hidden md:grid grid-cols-2 xl:grid-cols-3 gap-5 mt-5">
          <Link href="#" className="xl:hidden">
            <Image className="max-h-100 w-full h-full" src={opticsImg} alt="" />
          </Link>
          <Link href="#">
            <Image className="max-h-100 w-full h-full" src={opticsImg} alt="" />
          </Link>
          <Link href="#">
            <Image className="max-h-100 w-full h-full" src={firearmImg} alt="" />
          </Link>
          <Link href="#">
            <Image className="max-h-100 w-full h-full" src={lifestyleImg} alt="" />
          </Link>
        </div>
      </div>

      <FeaturedProducts products={products} />

      <NewProducts />

      <PopularProducts />

      <div className="container mx-auto px-5 pb-10 mt-5 md:hidden">
        <div className="grid gap-5 mt-5">
          <Link href="#">
            <Image className="max-h-100 w-full h-full" src="" fill alt="" />
          </Link>
          <Link href="#">
            <Image className="max-h-100 w-full h-full" src="" fill alt="" />
          </Link>
          <Link href="#">
            <Image className="max-h-100 w-full h-full" src="" fill alt="" />
          </Link>
        </div>
      </div>

      <Brands />

      <div className="container mx-auto featured text-center px-5">
        <h2 className="text-xl py-7">Latest News</h2>
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white flex flex-col justify-center items-center border border-brand-gray-200 p-5">
            <div className="space-y-2">
              <p className="text-xss">2023 Apr 28th</p>
              <Link className="font-bold" href="/articles/famae-scar-type-stock-factory-alert/" >
                FAMAE - SCAR Type Stock Factory Alert
              </Link>
              <p className="text-sm line-clamp-3">
                All users of FAMAE rifles that have the folding SCAR type stock should stop using their rifles immed…
              </p>
            </div>
          </div>
          <div className="bg-white flex flex-col justify-center items-center border border-brand-gray-200 p-5">
            <div className="space-y-2">
              <p className="text-xss">2023 Apr 28th</p>
              <Link className="font-bold" href="/articles/how-to-update-your-personal-information-with-the-cfo/" >
                How To Update Your Personal Information With The CFO
              </Link>
              <p className="text-sm line-clamp-3">
                Option 1: Call 1-800-731-4000 Option 2: Go to the RCMP Firearms Individual Web Services website.…
              </p>
            </div>
          </div>
        </div>
        <Link className="underline mt-3 md:mt-5" href="/articles/">View All Articles</Link>
      </div>

      <div className="container mx-auto px-5 mt-20">
        <Link className="w-full h-28" href="https://www.stoegercanada.ca/retail-promotions/sako-90-prize-pack/" target="_blank">
          <Image className="w-full h-full object-cover" src={bannerImg} alt="" /></Link>
      </div>
    </>
  )
}
