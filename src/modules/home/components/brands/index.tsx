'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default async function Brands() {
  return (
    <div className="container mx-auto space-y-7 px-5">
    <h2 className="text-xl text-center">Popular Brands</h2>

    <div className="relative">
      <Swiper
        className="partner !overflow-y-visible text-xs uppercase"
        slidesPerView={2}
        spaceBetween={60}
        grabCursor={true}
        autoplay={{
          delay: 2500
        }}
        loop={true}
        breakpoints={{
          480: {
            slidesPerView: 3,
            spaceBetween: 80,

          },
          768: {
            slidesPerView: 4,
            spaceBetween: 80,

          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 80,
          },


          1280: {
            slidesPerView: 9,
            spaceBetween: 80,

          },
        }}
        navigation={{
          nextEl: ".swiper-button-next-5",
          prevEl: ".swiper-button-prev-5",
        }}
        modules={[FreeMode, Pagination, Navigation]}
      >
        <SwiperSlide className="block relative cursor-pointer">
          <img data-tooltip-target="1" className="w-full h-24 object-contain" src="./image/glock-logo.png" alt="" />
          <div id="1" role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
            glock
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="block relative cursor-pointer">
          <img data-tooltip-target="2" className="w-full h-24 object-contain" src="./image/zeiss-logo.png" alt="" />
          <div id="2" role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
            zeiss
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="block relative cursor-pointer">
          <img data-tooltip-target="3" className="w-full h-24 object-contain" src="./image/trijicon_logo.png" alt="" />
          <div id="3" role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
            trijicon
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="block relative cursor-pointer">
          <img data-tooltip-target="4" className="w-full h-24 object-contain" src="./image/buck-knives-logo.png" alt="" />
          <div id="4" role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2  transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
            buck-knives
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="block relative cursor-pointer">
          <img data-tooltip-target="5" className="w-full h-24 object-contain" src="./image/tikka-logo-stacked.png"
            alt="" />
          <div id="5" role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2  transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
            tikka
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="block relative cursor-pointer">
          <img data-tooltip-target="6" className="w-full h-24 object-contain" src="./image/mcarbo-logo.png" alt="" />
          <div id="6" role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
            mcarbo
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="block relative cursor-pointer">
          <img data-tooltip-target="7" className="w-full h-24 object-contain" src="./image/outstandards-logo.png"
            alt="" />
          <div id="7" role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
            outstandards
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="block relative cursor-pointer">
          <img data-tooltip-target="8" className="w-full h-24 object-contain" src="./image/faxon-firearms-logo.png"
            alt="" />
          <div id="8" role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2  transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
            faxon-firearms
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="block relative cursor-pointer">
          <img data-tooltip-target="9" className="w-full h-24 object-contain" src="./image/drummond-shooting-logo.png"
            alt="" />
          <div id="9" role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
            drummond-shooting
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="block relative cursor-pointer">
          <img data-tooltip-target="10" className="w-full h-24 object-contain" src="./image/hornady-logo-vertical.png"
            alt="" />
          <div id="10" role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
            hornady
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="block relative cursor-pointer">
          <img data-tooltip-target="11" className="w-full h-24 object-contain" src="./image/keltec-logo.png" alt="" />
          <div id="11" role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
            keltec
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute top-1/2 -translate-y-1/2 flex justify-between items-center -inset-x-2 lg:-inset-x-10 z-10">
        <button type="button" className="swiper-button-prev-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
            stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button type="button" className="swiper-button-next-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
            stroke="currentColor" className="w-6  h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
      <div className="swiper-pagination-3 !text-center !mt-3"></div>
    </div>
    <hr className="mt-10 !border-t-brand-gray-200" />
  </div>  )
}
