'use client'

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ProductPreviewType } from "types/global";

interface Props {
  products: ProductPreviewType[];
}

export default function NewProducts({ products }: Props) {
  return (
    <div className="container mx-auto px-5">
    <h2 className="text-xl text-center py-7">New Products</h2>

    <div className="relative">
      <Swiper
        className="newProduct"
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={0}
        pagination={{
          el: ".swiper-pagination-2",
          clickable: true,
        }}
        breakpoints={{
          480: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 0,

          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 16,

          },
          1024: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 16,
          },
          1516: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            spaceBetween: 16,

          }
        }}
        navigation={{
          nextEl: ".swiper-button-next-3",
          prevEl: ".swiper-button-prev-3",
        }}
        modules={[FreeMode, Pagination, Navigation]}
      >
          {
            products.map((product, index) => (

              <SwiperSlide className="relative bg-white border border-brand-gray-200 p-5" key={index}>
                <Link href={"/products/" + product.id} className="block relative w-full h-60 sm:h-40 lg:h-60">
                  <Image className="w-full h-full object-contain" fill src={product.thumbnail?product.thumbnail:""} alt="" />
                  <button type="button" className="btn-red">Sale</button>
                </Link>
                <div className="featured mt-3">
                  <h3 className="text-xss font-bold">Sig Sauer</h3>
                  <Link href={"/products/" + product.id}>
                    {product.title}
                  </Link>
                </div>
                <div className="mt-7">
                  <p className="text-brand-red-100 text-sm">Was: <s>{product.price?.original_price}</s></p>
                  <h2 className="font-bold text-xl/none border-b border-brand-gray-200 pb-4">{product.price?.calculated_price}</h2>
                  <div className="mt-6 lg:mt-8 space-y-2">
                    <Link className="btn btn-yellow"
                      href="#"
                      data-event-type="product-click" data-product-id="18100">Choose Options
                    </Link>
                    <Link href="#" className="btn btn-white-outline">
                      <span>Add to Your List</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                        stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
      </Swiper>
      <div className="absolute top-1/2 -translate-y-1/2 flex justify-between items-center -inset-x-2 lg:-inset-x-10 z-10">
        <button type="button" className="swiper-button-prev-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1"
            stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button type="button" className="swiper-button-next-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1"
            stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
      <div className="swiper-pagination-2 !text-center !mt-3"></div>
    </div>
    <hr className="mt-10 !border-t-brand-gray-200" />
  </div>

  )
}
