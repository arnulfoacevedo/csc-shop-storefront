'use client'

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default function PopularProducts() {
  return (
    <div className="container mx-auto px-5 pb-10">
    <h2 className="text-xl text-center py-7">Most Popular Products</h2>

    <div className="relative">
      <Swiper
        className="most"
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={0}
        pagination={{
          el: ".swiper-pagination-7",
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
          nextEl: ".swiper-button-next-4",
          prevEl: ".swiper-button-prev-4",
        }}
        modules={[FreeMode, Pagination, Navigation]}
      >
        <SwiperSlide className="relative bg-white border border-brand-gray-200 p-5">
          <Link href="#" className="block w-full h-60 sm:h-40 lg:h-60">
            <Image className="w-full h-full object-contain" src="" fill alt="" />
          </Link>
          <div className="featured mt-3">
            <h3 className="text-xss font-bold">Sig Sauer</h3>
            <Link href="https://store.theshootingcentre.com/sig-sauer-elite-ball-9mm-115-gr-fmj-ammunition/"
            >
              Sig Sauer Elite Ball 9mm, 115 gr, FMJ Ammunition
            </Link>

            <div className="flex items-center gap-1.5 mt-2">
              <button type="button" className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 162, 57, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 162, 57, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 162, 57, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 162, 57, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 235, 235, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
              </button>
              <Link className="text-sm underline"
                href="https://store.theshootingcentre.com/sellier-bellot-canadian-match-22-lr-40-gr-lrn-rimfire-ammunition/#product-reviews"
              >1 review</Link>
            </div>

          </div>
          <div className="mt-2">
            <h2 className="font-bold text-xl/none border-b border-brand-gray-200 pb-4">$8.00</h2>
            <div className="mt-6 lg:mt-8 space-y-2">
              <Link className="btn btn-yellow"
                href="https://store.theshootingcentre.com/sig-sauer-elite-ball-9mm-115-gr-fmj-ammunition/"
                data-event-type="product-click" data-product-id="18100">Choose Options
              </Link>
              <Link href="/wishlist.php?action=addwishlist&amp;product_id=18100" className="btn btn-white-outline">
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

        <SwiperSlide className="relative bg-white border border-brand-gray-200 p-5">
          <Link href="#" className="block w-full h-60 sm:h-40 lg:h-60">
            <Image className="w-full h-full object-contain" src="" fill alt="" />
          </Link>
          <div className="featured mt-3">
            <h3 className="text-xss font-bold">Sig Sauer
              <span className="inline-block font-normal pl-2">SKU: 600299-RSU</span>
            </h3>
            <Link href="https://store.theshootingcentre.com/sig-sauer-elite-ball-9mm-115-gr-fmj-ammunition/"
            >
              Sig Sauer Elite Ball 9mm, 115 gr, FMJ Ammunition
            </Link>

            <div className="flex items-center gap-1.5 mt-2 opacity-0">
              <button type="button" className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 162, 57, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 162, 57, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 162, 57, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 162, 57, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 235, 235, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
              </button>
              <Link className="text-sm underline"
                href="https://store.theshootingcentre.com/sellier-bellot-canadian-match-22-lr-40-gr-lrn-rimfire-ammunition/#product-reviews"
              >1 review</Link>
            </div>

          </div>
          <div className="mt-2">
            <h2 className="font-bold text-xl/none border-b border-brand-gray-200 pb-4">$8.00</h2>
            <div className="mt-6 lg:mt-8 space-y-2">
              <form action="#" className="flex items-stretch">
                <input type="tel" defaultValue="1" min="1" className="w-12 btn btn-white-outline rounded-r-none" />
                <input type="submit" defaultValue="Add to Cart"
                  className="btn btn-yellow flex-1 rounded-l-none cursor-pointer" />
              </form>
              <Link href="/wishlist.php?action=addwishlist&amp;product_id=18100" className="btn btn-white-outline">
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

        <SwiperSlide className="relative bg-white border border-brand-gray-200 p-5">
          <Link href="#" className="block w-full h-60 sm:h-40 lg:h-60">
            <Image className="w-full h-full object-contain" src="" fill alt="" />
          </Link>
          <div className="featured mt-3">
            <h3 className="text-xss font-bold">Sig Sauer</h3>
            <Link href="https://store.theshootingcentre.com/sig-sauer-elite-ball-9mm-115-gr-fmj-ammunition/"
            >
              Sig Sauer Elite Ball 9mm, 115 gr, FMJ Ammunition
            </Link>

            <div className="flex items-center gap-1.5 mt-2 opacity-0">
              <button type="button" className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 162, 57, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 162, 57, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 162, 57, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 162, 57, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 235, 235, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
              </button>
              <Link className="text-sm underline"
                href="https://store.theshootingcentre.com/sellier-bellot-canadian-match-22-lr-40-gr-lrn-rimfire-ammunition/#product-reviews"
              >1 review</Link>
            </div>

          </div>
          <div className="mt-2">
            <h2 className="font-bold text-xl/none border-b border-brand-gray-200 pb-4">$8.00</h2>
            <div className="mt-6 lg:mt-8 space-y-2">
              <Link className="btn btn-yellow"
                href="https://store.theshootingcentre.com/sig-sauer-elite-ball-9mm-115-gr-fmj-ammunition/"
                data-event-type="product-click" data-product-id="18100">Choose Options
              </Link>
              <Link href="/wishlist.php?action=addwishlist&amp;product_id=18100" className="btn btn-white-outline">
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

        <SwiperSlide className="relative bg-white border border-brand-gray-200 p-5">
          <Link href="#" className="block w-full h-60 sm:h-40 lg:h-60">
            <Image className="w-full h-full object-contain" src="" fill alt="" />
          </Link>
          <div className="featured mt-3">
            <h3 className="text-xss font-bold">Sig Sauer</h3>
            <Link href="https://store.theshootingcentre.com/sig-sauer-elite-ball-9mm-115-gr-fmj-ammunition/"
            >
              Sig Sauer Elite Ball 9mm, 115 gr, FMJ Ammunition
            </Link>

            <div className="flex items-center gap-1.5 mt-2">
              <button type="button" className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 162, 57, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 162, 57, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 162, 57, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 162, 57, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 235, 235, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
              </button>
              <Link className="text-sm underline"
                href="https://store.theshootingcentre.com/sellier-bellot-canadian-match-22-lr-40-gr-lrn-rimfire-ammunition/#product-reviews"
              >1 review</Link>
            </div>

          </div>
          <div className="mt-2">
            <h2 className="font-bold text-xl/none border-b border-brand-gray-200 pb-4">$8.00</h2>
            <div className="mt-6 lg:mt-8 space-y-2">
              <form action="#" className="flex items-stretch">
                <input type="tel" defaultValue="1" min="1" className="w-12 btn btn-white-outline rounded-r-none" />
                <input type="submit" defaultValue="Add to Cart" className="btn btn-yellow flex-1 rounded-l-none cursor-pointer" />
              </form>
              <Link href="/wishlist.php?action=addwishlist&amp;product_id=18100" className="btn btn-white-outline">
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

        <SwiperSlide className="relative bg-white border border-brand-gray-200 p-5">
          <Link href="#" className="block w-full h-60 sm:h-40 lg:h-60">
            <Image className="w-full h-full object-contain" src="" fill alt="" />
          </Link>
          <div className="featured mt-3">
            <h3 className="text-xss font-bold">Sig Sauer</h3>
            <Link href="https://store.theshootingcentre.com/sig-sauer-elite-ball-9mm-115-gr-fmj-ammunition/"
            >
              Sig Sauer Elite Ball 9mm, 115 gr, FMJ Ammunition
            </Link>

            <div className="flex items-center gap-1.5 mt-2">
              <button type="button" className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 162, 57, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 162, 57, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 162, 57, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 162, 57, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 235, 235, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
              </button>
              <Link className="text-sm underline"
                href="https://store.theshootingcentre.com/sellier-bellot-canadian-match-22-lr-40-gr-lrn-rimfire-ammunition/#product-reviews"
              >1 review</Link>
            </div>

          </div>
          <div className="mt-2">
            <h2 className="font-bold text-xl/none border-b border-brand-gray-200 pb-4">$8.00</h2>
            <div className="mt-6 lg:mt-8 space-y-2">
              <Link className="btn btn-yellow"
                href="https://store.theshootingcentre.com/sig-sauer-elite-ball-9mm-115-gr-fmj-ammunition/"
                data-event-type="product-click" data-product-id="18100">Choose Options
              </Link>
              <Link href="/wishlist.php?action=addwishlist&amp;product_id=18100" className="btn btn-white-outline">
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

        <SwiperSlide className="relative bg-white border border-brand-gray-200 p-5">
          <Link href="#" className="block w-full h-60 sm:h-40 lg:h-60">
            <Image className="w-full h-full object-contain" src="" fill alt="" />
          </Link>
          <div className="featured mt-3">
            <h3 className="text-xss font-bold">Sig Sauer</h3>
            <Link href="https://store.theshootingcentre.com/sig-sauer-elite-ball-9mm-115-gr-fmj-ammunition/"
            >
              Sig Sauer Elite Ball 9mm, 115 gr, FMJ Ammunition
            </Link>

            <div className="flex items-center gap-1.5 mt-2">
              <button type="button" className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 162, 57, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 162, 57, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 162, 57, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 162, 57, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 235, 235, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
              </button>
              <Link className="text-sm underline"
                href="https://store.theshootingcentre.com/sellier-bellot-canadian-match-22-lr-40-gr-lrn-rimfire-ammunition/#product-reviews"
              >1 review</Link>
            </div>

          </div>
          <div className="mt-2">
            <h2 className="font-bold text-xl/none border-b border-brand-gray-200 pb-4">$8.00</h2>
            <div className="mt-6 lg:mt-8 space-y-2">
              <Link className="btn btn-yellow"
                href="https://store.theshootingcentre.com/sig-sauer-elite-ball-9mm-115-gr-fmj-ammunition/"
                data-event-type="product-click" data-product-id="18100">Choose Options
              </Link>
              <Link href="/wishlist.php?action=addwishlist&amp;product_id=18100" className="btn btn-white-outline">
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

        <SwiperSlide className="relative bg-white border border-brand-gray-200 p-5">
          <Link href="#" className="block w-full h-60 sm:h-40 lg:h-60">
            <Image className="w-full h-full object-contain" src="" fill alt="" />
          </Link>
          <div className="featured mt-3">
            <h3 className="text-xss font-bold">Sig Sauer
              <span className="inline-block font-normal pl-2">SKU: 600299-RSU</span>
            </h3>
            <Link href="https://store.theshootingcentre.com/sig-sauer-elite-ball-9mm-115-gr-fmj-ammunition/"
            >
              Sig Sauer Elite Ball 9mm, 115 gr, FMJ Ammunition
            </Link>

            <div className="flex items-center gap-1.5 mt-2 opacity-0">
              <button type="button" className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 162, 57, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 162, 57, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 162, 57, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 162, 57, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 235, 235, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
              </button>
              <Link className="text-sm underline"
                href="https://store.theshootingcentre.com/sellier-bellot-canadian-match-22-lr-40-gr-lrn-rimfire-ammunition/#product-reviews"
              >1 review</Link>
            </div>

          </div>
          <div className="mt-2">
            <h2 className="font-bold text-xl/none border-b border-brand-gray-200 pb-4">$8.00</h2>
            <div className="mt-6 lg:mt-8 space-y-2">
              <form action="#" className="flex items-stretch">
                <input type="tel" defaultValue="1" min="1" className="w-12 btn btn-white-outline rounded-r-none" />
                <input type="submit" defaultValue="Add to Cart" className="btn btn-yellow flex-1 rounded-l-none cursor-pointer" />
              </form>
              <Link href="/wishlist.php?action=addwishlist&amp;product_id=18100" className="btn btn-white-outline">
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

        <SwiperSlide className="relative bg-white border border-brand-gray-200 p-5">
          <Link href="#" className="block w-full h-60 sm:h-40 lg:h-60">
            <Image className="w-full h-full object-contain" src="" fill alt="" />
          </Link>
          <div className="featured mt-3">
            <h3 className="text-xss font-bold">Sig Sauer</h3>
            <Link href="https://store.theshootingcentre.com/sig-sauer-elite-ball-9mm-115-gr-fmj-ammunition/"
            >
              Sig Sauer Elite Ball 9mm, 115 gr, FMJ Ammunition
            </Link>

            <div className="flex items-center gap-1.5 mt-2 opacity-0">
              <button type="button" className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 162, 57, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 162, 57, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 162, 57, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 162, 57, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 235, 235, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
              </button>
              <Link className="text-sm underline"
                href="https://store.theshootingcentre.com/sellier-bellot-canadian-match-22-lr-40-gr-lrn-rimfire-ammunition/#product-reviews"
              >1 review</Link>
            </div>

          </div>
          <div className="mt-2">
            <h2 className="font-bold text-xl/none border-b border-brand-gray-200 pb-4">$8.00</h2>
            <div className="mt-6 lg:mt-8 space-y-2">
              <Link className="btn btn-yellow"
                href="https://store.theshootingcentre.com/sig-sauer-elite-ball-9mm-115-gr-fmj-ammunition/"
                data-event-type="product-click" data-product-id="18100">Choose Options
              </Link>
              <Link href="/wishlist.php?action=addwishlist&amp;product_id=18100" className="btn btn-white-outline">
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

        <SwiperSlide className="relative bg-white border border-brand-gray-200 p-5">
          <Link href="#" className="block w-full h-60 sm:h-40 lg:h-60">
            <Image className="w-full h-full object-contain" src="" fill alt="" />
          </Link>
          <div className="featured mt-3">
            <h3 className="text-xss font-bold">Sig Sauer</h3>
            <Link href="https://store.theshootingcentre.com/sig-sauer-elite-ball-9mm-115-gr-fmj-ammunition/"
            >
              Sig Sauer Elite Ball 9mm, 115 gr, FMJ Ammunition
            </Link>

            <div className="flex items-center gap-1.5 mt-2">
              <button type="button" className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 162, 57, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 162, 57, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 162, 57, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 162, 57, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 235, 235, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
              </button>
              <Link className="text-sm underline"
                href="https://store.theshootingcentre.com/sellier-bellot-canadian-match-22-lr-40-gr-lrn-rimfire-ammunition/#product-reviews"
              >1 review</Link>
            </div>

          </div>
          <div className="mt-2">
            <h2 className="font-bold text-xl/none border-b border-brand-gray-200 pb-4">$8.00</h2>
            <div className="mt-6 lg:mt-8 space-y-2">
              <form action="#" className="flex items-stretch">
                <input type="tel" defaultValue="1" min="1" className="w-12 btn btn-white-outline rounded-r-none" />
                <input type="submit" defaultValue="Add to Cart" className="btn btn-yellow flex-1 rounded-l-none cursor-pointer" />
              </form>
              <Link href="/wishlist.php?action=addwishlist&amp;product_id=18100" className="btn btn-white-outline">
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

        <SwiperSlide className="relative bg-white border border-brand-gray-200 p-5">
          <Link href="#" className="block w-full h-60 sm:h-40 lg:h-60">
            <Image className="w-full h-full object-contain" src="" fill alt="" />
          </Link>
          <div className="featured mt-3">
            <h3 className="text-xss font-bold">Sig Sauer</h3>
            <Link href="https://store.theshootingcentre.com/sig-sauer-elite-ball-9mm-115-gr-fmj-ammunition/"
            >
              Sig Sauer Elite Ball 9mm, 115 gr, FMJ Ammunition
            </Link>

            <div className="flex items-center gap-1.5 mt-2">
              <button type="button" className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 162, 57, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 162, 57, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 162, 57, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 162, 57, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  style={{ fill: "rgba(253, 235, 235, 1)" }}>
                  <path
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                  </path>
                </svg>
              </button>
              <Link className="text-sm underline"
                href="https://store.theshootingcentre.com/sellier-bellot-canadian-match-22-lr-40-gr-lrn-rimfire-ammunition/#product-reviews"
              >1 review</Link>
            </div>

          </div>
          <div className="mt-2">
            <h2 className="font-bold text-xl/none border-b border-brand-gray-200 pb-4">$8.00</h2>
            <div className="mt-6 lg:mt-8 space-y-2">
              <Link className="btn btn-yellow"
                href="https://store.theshootingcentre.com/sig-sauer-elite-ball-9mm-115-gr-fmj-ammunition/"
                data-event-type="product-click" data-product-id="18100">Choose Options
              </Link>
              <Link href="/wishlist.php?action=addwishlist&amp;product_id=18100" className="btn btn-white-outline">
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

      </Swiper>
      <div className="absolute top-1/2 -translate-y-1/2 flex justify-between items-center -inset-x-2 lg:-inset-x-10 z-10">
        <button type="button" className="swiper-button-prev-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1"
            stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button type="button" className="swiper-button-next-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1"
            stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
      <div className="swiper-pagination-7 z-20 !text-center !mt-3"></div>
    </div>
    <hr className="mt-10 !border-t-brand-gray-200" />
  </div>
  )
}
