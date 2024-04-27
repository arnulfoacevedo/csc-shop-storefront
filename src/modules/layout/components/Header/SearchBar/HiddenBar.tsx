'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import Link from "next/link";
import Image from "next/image";
import { MouseEventHandler, useState } from 'react';

import logoImg from "@/public/image/logo.png";
import Img from "@/public/image/mono.jpg"

export const HiddenBar = () => {
    const [togglesearch, setTogglesearch] = useState(true);

    const toggleSearchBar = () => {
        setTogglesearch(togglesearch ? false : true);
    }

    return (
        <div className={"menu absolute left-0 w-full bg-white text-brand-gray-300 transition duration-500 ease-linear z-30" + (togglesearch ? " -translate-y-full" : "")}>
        <div className="fixed top-0 left-0 w-full flex items-center bg-brand-gray-100 gap-5 p-4 z-30">
            <Link href="#" className="w-28">
                <Image src={logoImg} alt="" />
            </Link>
            <form className="relative flex-1">
                <input type="search"
                    className="w-full border-x-0 border-t-0 !border-b border-b-brand-yellow-100 focus:border-b-brand-yellow-100 focus:ring-0 py-2.5 px-8"
                    placeholder="Search..." />

                <svg className="absolute top-1/2 -translate-y-1/2 left-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    width="24px" height="24px">
                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                    <path
                        d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                    </path>
                </svg>

                <svg className="absolute top-1/2 -translate-y-1/2 right-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    width="24px" height="24px">
                    <path
                        d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.02-.43 5.42-2.78 5.91-5.78.1-.6-.39-1.14-1-1.14z">
                    </path>
                </svg>
            </form>

            <button type="button" className="menuBtn bg-white/50" onClick={toggleSearchBar}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                    stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        <div className="relative lg:flex items-start px-6 md:px-12 mt-20 space-y-6 lg:space-y-0 lg:space-x-6 p-6">
            <div className="border-line w-40 shrink-0 space-y-5">
                <h3 className="font-bold text-lg">Popular searches</h3>
                <button type="button" dfd-click="click-suggestion" dfd-value-term="10/22">10/22</button>
                <button type="button" dfd-click="click-suggestion" dfd-value-term="tikka">tikka</button>
                <button type="button" dfd-click="click-suggestion" dfd-value-term="tikka t3x">tikka t3x</button>
                <button type="button" dfd-click="click-suggestion" dfd-value-term="bergara">bergara</button>
                <button type="button" dfd-click="click-suggestion" dfd-value-term="ruger 10/22">ruger 10/22</button>
                <button type="button" dfd-click="click-suggestion" dfd-value-term="magpul">magpul</button>
                <button type="button" dfd-click="click-suggestion" dfd-value-term="sako">sako</button>
                <button type="button" dfd-click="click-suggestion" dfd-value-term="sks">sks</button>
                <button type="button" dfd-click="click-suggestion" dfd-value-term="bipod">bipod</button>
                <button type="button" dfd-click="click-suggestion" dfd-value-term="surplus">surplus</button>
            </div>

            <div className="hidden lg:flex items-center overflow-hidden">
                <button type="button" className="swiper-button-prev-1 text-brand-yellow-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                        stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <Swiper
                    className="assets relative flex items-center assets-items"
                    slidesPerView={1}
                    spaceBetween={16}
                    breakpoints={{
                        480: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 3.5,
                        },
                        1440: {
                            slidesPerView: 5,
                        },
                        1516: {
                            slidesPerView: 6,
                        },
                    }}
                    mousewheel={true}
                    keyboard={true}
                    navigation={{
                        nextEl: ".swiper-button-next-1",
                        prevEl: ".swiper-button-prev-1",
                    }}
                    modules={[FreeMode, Navigation, Keyboard, Mousewheel]}
                >
                    <SwiperSlide>
                        <Link href="#"
                            className="block border border-brand-gray-50 hover:border-brand-yellow-100 rounded space-y-3 p-6">
                            <div className="h-48">
                                <Image className="w-full h-full object-cover" src={Img} fill alt="" />
                            </div>
                            <p>
                                Tikka T3x Compact Tactical Rifle
                            </p>
                            <button type="button" className="opacity-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    style={{ fill: "rgba(255, 255, 255, 1)" }}>
                                    <path
                                        d="M21 4H2v2h2.3l3.28 9a3 3 0 0 0 2.82 2H19v-2h-8.6a1 1 0 0 1-.94-.66L9 13h9.28a2 2 0 0 0 1.92-1.45L22 5.27A1 1 0 0 0 21.27 4 .84.84 0 0 0 21 4zm-2.75 7h-10L6.43 6h13.24z">
                                    </path>
                                    <circle cx="10.5" cy="19.5" r="1.5"></circle>
                                    <circle cx="16.5" cy="19.5" r="1.5"></circle>
                                </svg>
                            </button>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="#"
                            className="block border border-brand-gray-50 hover:border-brand-yellow-100 rounded space-y-3 p-6">
                            <div className="h-48">
                                <Image className="w-full h-full object-cover" src={Img} fill alt="" />
                            </div>
                            <p>
                                Tikka T3x Compact Tactical Rifle
                            </p>
                            <button type="button" className="opacity-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    style={{ fill: "rgba(255, 255, 255, 1)" }}>
                                    <path
                                        d="M21 4H2v2h2.3l3.28 9a3 3 0 0 0 2.82 2H19v-2h-8.6a1 1 0 0 1-.94-.66L9 13h9.28a2 2 0 0 0 1.92-1.45L22 5.27A1 1 0 0 0 21.27 4 .84.84 0 0 0 21 4zm-2.75 7h-10L6.43 6h13.24z">
                                    </path>
                                    <circle cx="10.5" cy="19.5" r="1.5"></circle>
                                    <circle cx="16.5" cy="19.5" r="1.5"></circle>
                                </svg>
                            </button>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="#"
                            className="block border border-brand-gray-50 hover:border-brand-yellow-100 rounded space-y-3 p-6">
                            <div className="h-48">
                                <Image className="w-full h-full object-cover" src={Img} fill alt="" />
                            </div>
                            <p>
                                Tikka T3x Compact Tactical Rifle
                            </p>
                            <button type="button" className="opacity-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    style={{ fill: "rgba(255, 255, 255, 1)" }}>
                                    <path
                                        d="M21 4H2v2h2.3l3.28 9a3 3 0 0 0 2.82 2H19v-2h-8.6a1 1 0 0 1-.94-.66L9 13h9.28a2 2 0 0 0 1.92-1.45L22 5.27A1 1 0 0 0 21.27 4 .84.84 0 0 0 21 4zm-2.75 7h-10L6.43 6h13.24z">
                                    </path>
                                    <circle cx="10.5" cy="19.5" r="1.5"></circle>
                                    <circle cx="16.5" cy="19.5" r="1.5"></circle>
                                </svg>
                            </button>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="#"
                            className="block border border-brand-gray-50 hover:border-brand-yellow-100 rounded space-y-3 p-6">
                            <div className="h-48">
                                <Image className="w-full h-full object-cover" src={Img} fill alt="" />
                            </div>
                            <p>
                                Tikka T3x Compact Tactical Rifle
                            </p>
                            <button type="button" className="opacity-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(255, 255, 255, 1)" }}>
                                    <path d="M21 4H2v2h2.3l3.28 9a3 3 0 0 0 2.82 2H19v-2h-8.6a1 1 0 0 1-.94-.66L9 13h9.28a2 2 0 0 0 1.92-1.45L22 5.27A1 1 0 0 0 21.27 4 .84.84 0 0 0 21 4zm-2.75 7h-10L6.43 6h13.24z">
                                    </path>
                                    <circle cx="10.5" cy="19.5" r="1.5"></circle>
                                    <circle cx="16.5" cy="19.5" r="1.5"></circle>
                                </svg>
                            </button>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="#"
                            className="block border border-brand-gray-50 hover:border-brand-yellow-100 rounded space-y-3 p-6">
                            <div className="h-48">
                                <Image className="w-full h-full object-cover" src={Img} fill alt="" />
                            </div>
                            <p>
                                Tikka T3x Compact Tactical Rifle
                            </p>
                            <button type="button" className="opacity-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    style={{ fill: "rgba(255, 255, 255, 1)" }}>
                                    <path
                                        d="M21 4H2v2h2.3l3.28 9a3 3 0 0 0 2.82 2H19v-2h-8.6a1 1 0 0 1-.94-.66L9 13h9.28a2 2 0 0 0 1.92-1.45L22 5.27A1 1 0 0 0 21.27 4 .84.84 0 0 0 21 4zm-2.75 7h-10L6.43 6h13.24z">
                                    </path>
                                    <circle cx="10.5" cy="19.5" r="1.5"></circle>
                                    <circle cx="16.5" cy="19.5" r="1.5"></circle>
                                </svg>
                            </button>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="#"
                            className="block border border-brand-gray-50 hover:border-brand-yellow-100 rounded space-y-3 p-6">
                            <div className="h-48">
                                <Image className="w-full h-full object-cover" src={Img} fill alt="" />
                            </div>
                            <p>
                                Tikka T3x Compact Tactical Rifle
                            </p>
                            <button type="button" className="opacity-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    style={{ fill: "rgba(255, 255, 255, 1)" }}>
                                    <path
                                        d="M21 4H2v2h2.3l3.28 9a3 3 0 0 0 2.82 2H19v-2h-8.6a1 1 0 0 1-.94-.66L9 13h9.28a2 2 0 0 0 1.92-1.45L22 5.27A1 1 0 0 0 21.27 4 .84.84 0 0 0 21 4zm-2.75 7h-10L6.43 6h13.24z">
                                    </path>
                                    <circle cx="10.5" cy="19.5" r="1.5"></circle>
                                    <circle cx="16.5" cy="19.5" r="1.5"></circle>
                                </svg>
                            </button>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="#"
                            className="block border border-brand-gray-50 hover:border-brand-yellow-100 rounded space-y-3 p-6">
                            <div className="h-48">
                                <Image className="w-full h-full object-cover" src={Img} fill alt="" />
                            </div>
                            <p>
                                Tikka T3x Compact Tactical Rifle
                            </p>
                            <button type="button" className="opacity-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    style={{ fill: "rgba(255, 255, 255, 1)" }}>
                                    <path
                                        d="M21 4H2v2h2.3l3.28 9a3 3 0 0 0 2.82 2H19v-2h-8.6a1 1 0 0 1-.94-.66L9 13h9.28a2 2 0 0 0 1.92-1.45L22 5.27A1 1 0 0 0 21.27 4 .84.84 0 0 0 21 4zm-2.75 7h-10L6.43 6h13.24z">
                                    </path>
                                    <circle cx="10.5" cy="19.5" r="1.5"></circle>
                                    <circle cx="16.5" cy="19.5" r="1.5"></circle>
                                </svg>
                            </button>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="#"
                            className="block border border-brand-gray-50 hover:border-brand-yellow-100 rounded space-y-3 p-6">
                            <div className="h-48">
                                <Image className="w-full h-full object-cover" src={Img} fill alt="" />
                            </div>
                            <p>
                                Tikka T3x Compact Tactical Rifle
                            </p>
                            <button type="button" className="opacity-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    style={{ fill: "rgba(255, 255, 255, 1)" }}>
                                    <path
                                        d="M21 4H2v2h2.3l3.28 9a3 3 0 0 0 2.82 2H19v-2h-8.6a1 1 0 0 1-.94-.66L9 13h9.28a2 2 0 0 0 1.92-1.45L22 5.27A1 1 0 0 0 21.27 4 .84.84 0 0 0 21 4zm-2.75 7h-10L6.43 6h13.24z">
                                    </path>
                                    <circle cx="10.5" cy="19.5" r="1.5"></circle>
                                    <circle cx="16.5" cy="19.5" r="1.5"></circle>
                                </svg>
                            </button>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="#"
                            className="block border border-brand-gray-50 hover:border-brand-yellow-100 rounded space-y-3 p-6">
                            <div className="h-48">
                                <Image className="w-full h-full object-cover" src={Img} fill alt="" />
                            </div>
                            <p>
                                Tikka T3x Compact Tactical Rifle
                            </p>
                            <button type="button" className="opacity-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    style={{ fill: "rgba(255, 255, 255, 1)" }}>
                                    <path
                                        d="M21 4H2v2h2.3l3.28 9a3 3 0 0 0 2.82 2H19v-2h-8.6a1 1 0 0 1-.94-.66L9 13h9.28a2 2 0 0 0 1.92-1.45L22 5.27A1 1 0 0 0 21.27 4 .84.84 0 0 0 21 4zm-2.75 7h-10L6.43 6h13.24z">
                                    </path>
                                    <circle cx="10.5" cy="19.5" r="1.5"></circle>
                                    <circle cx="16.5" cy="19.5" r="1.5"></circle>
                                </svg>
                            </button>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href="#"
                            className="block border border-brand-gray-50 hover:border-brand-yellow-100 rounded space-y-3 p-6">
                            <div className="h-48">
                                <Image className="w-full h-full object-cover" src={Img} fill alt="" />
                            </div>
                            <p>
                                Tikka T3x Compact Tactical Rifle
                            </p>
                            <button type="button" className="opacity-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    style={{ fill: "rgba(255, 255, 255, 1)" }}>
                                    <path
                                        d="M21 4H2v2h2.3l3.28 9a3 3 0 0 0 2.82 2H19v-2h-8.6a1 1 0 0 1-.94-.66L9 13h9.28a2 2 0 0 0 1.92-1.45L22 5.27A1 1 0 0 0 21.27 4 .84.84 0 0 0 21 4zm-2.75 7h-10L6.43 6h13.24z">
                                    </path>
                                    <circle cx="10.5" cy="19.5" r="1.5"></circle>
                                    <circle cx="16.5" cy="19.5" r="1.5"></circle>
                                </svg>
                            </button>
                        </Link>
                    </SwiperSlide>
                </Swiper>
                <button type="button" className="swiper-button-next-1 text-brand-yellow-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                        stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
    )
}