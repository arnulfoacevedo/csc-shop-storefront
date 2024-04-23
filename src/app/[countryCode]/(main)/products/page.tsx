import Link from "next/link";
import Image from "next/image";

export default function Products() {
    // const articles = await getArticles();
    return (
        <div className="container mx-auto mt-5 px-5">
            <div className="grid md:grid-cols-5 gap-5">
                <div className="hidden md:block">
                    <p>Refine by</p>
                    <p className="mt-2.5">No filters applied</p>
                    <div className="accordion space-y-2 mt-7">
                        <section>
                            <div>
                                <button type="button"
                                    className="accordionBtn w-full flex justify-between items-center cursor-pointer transition ease-linear duration-700">
                                    <p className="font-bold text-sm pointer-events-none">Brand</p>
                                    <svg className="plus-icon pointer-events-none w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                                    </svg>
                                    <svg className="minus-icon hidden pointer-events-none w-4 h-4" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                                    </svg>
                                </button>
                            </div>

                            <div className="w-full h-0 text-xs transition-[height] duration-200 ease-in overflow-hidden space-y-2.5">
                                <div className="space-x-2 mt-2">
                                    <input className="w-4 h-4 rounded focus:ring-0" type="checkbox" name="" id="" />
                                    <Link href="#">Aimpoint<span>(4)</span></Link>
                                </div>
                                <div className="space-x-2">
                                    <input className="w-4 h-4 rounded focus:ring-0" type="checkbox" name="" id="" />
                                    <Link href="#"> American Defense Mfg.<span>(1)</span></Link>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div>
                                <button type="button"
                                    className="accordionBtn w-full flex justify-between items-center cursor-pointer transition ease-linear duration-700">
                                    <p className="font-bold text-sm">Magnification</p>

                                    <svg className="plus-icon pointer-events-none w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                                    </svg>

                                    <svg className="minus-icon hidden pointer-events-none w-4 h-4" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                                    </svg>
                                </button>
                            </div>
                            <div className="w-full h-0 text-xs transition-[height] duration-200 ease-in overflow-hidden space-y-2.5">
                                <div className="space-x-2 mt-2">
                                    <input className="w-4 h-4 rounded focus:ring-0" type="checkbox" name="" id="" />
                                    <Link href="#">1x<span>(42)</span></Link>
                                </div>
                                <div className="space-x-2">
                                    <input className="w-4 h-4 rounded focus:ring-0" type="checkbox" name="" id="" />
                                    <Link href="#">5x<span>(1)</span></Link>
                                </div>

                            </div>
                        </section>
                        <section>
                            <div>
                                <button type="button"
                                    className="accordionBtn w-full flex justify-between items-center cursor-pointer transition ease-linear duration-700">
                                    <p className="font-bold text-sm">Rating</p>
                                    <svg className="plus-icon pointer-events-none w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                                    </svg>

                                    <svg className="minus-icon hidden pointer-events-none w-4 h-4" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                                    </svg>
                                </button>
                            </div>
                            <div className="w-full h-0 text-xss transition-[height] duration-200 ease-in overflow-hidden">
                                <div className="space-y-1 mt-2">
                                    <Link href="#" className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                            style={{ fill: "rgba(253, 162, 57, 1)" }}>
                                            <path
                                                d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                                            </path>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                            style={{fill: "rgba(253, 235, 235, 1)"}}>
                                            <path
                                                d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                                            </path>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                            style={{fill: "rgba(253, 235, 235, 1)"}}>
                                            <path
                                                d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                                            </path>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                            style={{fill: "rgba(253, 235, 235, 1)"}}>
                                            <path
                                                d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                                            </path>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                            style={{fill: "rgba(253, 235, 235, 1)"}}>
                                            <path
                                                d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                                            </path>
                                        </svg>

                                        &amp; up
                                        <span className="inline-block pl-0.5">(6)</span>
                                    </Link>
                                    <Link href="#" className="flex items-center">
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
                                            style={{fill: "rgba(253, 235, 235, 1)"}}>
                                            <path
                                                d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                                            </path>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                            style={{fill: "rgba(253, 235, 235, 1)"}}>
                                            <path
                                                d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                                            </path>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                            style={{fill: "rgba(253, 235, 235, 1)"}}>
                                            <path
                                                d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                                            </path>
                                        </svg>

                                        &amp; up
                                        <span className="inline-block pl-0.5">(6)</span>
                                    </Link>
                                    <Link href="#" className="flex items-center">
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
                                            style={{fill: "rgba(253, 235, 235, 1)"}}>
                                            <path
                                                d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                                            </path>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                            style={{fill: "rgba(253, 235, 235, 1)"}}>
                                            <path
                                                d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                                            </path>
                                        </svg>

                                        &amp; up
                                        <span className="inline-block pl-0.5">(6)</span>
                                    </Link>
                                    <Link href="#" className="flex items-center">
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
                                            style={{fill: "rgba(253, 235, 235, 1)"}}>
                                            <path
                                                d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                                            </path>
                                        </svg>

                                        &amp; up
                                        <span className="inline-block pl-0.5">(6)</span>
                                    </Link>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
                <div className="md:col-span-4">
                    <div className="hidden md:flex items-center text-xss space-x-2">
                        <Link href="./index.html" className="underline">Home</Link>
                        <span>/</span>
                        <Link href="optics.html" className="underline">Optics</Link>
                        <span>/</span>
                        <p>Red Dot Sights</p>
                    </div>
                    <div className="md:flex items-center space-y-2 md:space-x-2 md:mt-7">
                        <h1 className="text-[28px]/8">Red Dot Sights</h1>
                        <p className="text-xss">(Showing 12 of 48)</p>
                    </div>
                    <div
                        className="relative grid grid-cols-2 sm:flex justify-between md:justify-end items-center text-xss gap-2 mt-5">
                        <div className="md:hidden">
                            <button type="button"
                                className="dropdown-button w-full justify-center sm:w-auto font-bold bg-brand-yellow-100 text-sm rounded py-2.5 px-9">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                                    <path fillRule="evenodd"
                                        d="M3.792 2.938A49.069 49.069 0 0112 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 011.541 1.836v1.044a3 3 0 01-.879 2.121l-6.182 6.182a1.5 1.5 0 00-.439 1.061v2.927a3 3 0 01-1.658 2.684l-1.757.878A.75.75 0 019.75 21v-5.818a1.5 1.5 0 00-.44-1.06L3.13 7.938a3 3 0 01-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836z"
                                        clipRule="evenodd" />
                                </svg>
                                <span className="pointer-events-none">Filter</span>
                            </button>

                            <div className="hidden absolute top-4 inset-x-0 h-full z-20 -mt-0.5">
                                <div className="accordion filter-shape mt-7 bg-brand-gray-400">
                                    <section>
                                        <div>
                                            <button type="button"
                                                className="accordionBtn w-full flex justify-between items-center border-b border-brand-gray-50 cursor-pointer transition ease-linear duration-700 py-4 px-3">
                                                <p className="font-bold text-sm pointer-events-none">Brand</p>
                                                <svg className="plus-icon pointer-events-none w-4 h-4" xmlns="http://www.w3.org/2000/svg"
                                                    fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                                                </svg>

                                                <svg className="minus-icon hidden pointer-events-none w-4 h-4" xmlns="http://www.w3.org/2000/svg"
                                                    fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                                                </svg>
                                            </button>
                                        </div>

                                        <div
                                            className="w-full h-0 text-xs transition-[height] duration-200 ease-in overflow-hidden space-y-2.5 px-3.5">
                                            <div className="space-x-2 mt-2">
                                                <input className="w-4 h-4 rounded focus:ring-0" type="checkbox" name="" id="" />
                                                <Link href="#">Aimpoint<span>(4)</span></Link>
                                            </div>
                                            <div className="space-x-2">
                                                <input className="w-4 h-4 rounded focus:ring-0" type="checkbox" name="" id="" />
                                                <Link href="#"> American Defense Mfg.<span>(1)</span></Link>
                                            </div>

                                            <div className="space-x-2">
                                                <input className="w-4 h-4 rounded focus:ring-0" type="checkbox" name="" id="" />
                                                <Link href="#">Blaser<span>(1)</span></Link>
                                            </div>
                                            <div className="space-x-2">
                                                <input className="w-4 h-4 rounded focus:ring-0" type="checkbox" name="" id="" />
                                                <Link href="#">Browning<span>(1)</span></Link>
                                            </div>
                                            <div className="space-x-2">
                                                <input className="w-4 h-4 rounded focus:ring-0" type="checkbox" name="" id="" />
                                                <Link href="#">Burris<span>(1)</span></Link>
                                            </div>
                                            <div className="space-x-2">
                                                <input className="w-4 h-4 rounded focus:ring-0" type="checkbox" name="" id="" />
                                                <Link href="#">Bushnell<span>(1)</span></Link>
                                            </div>
                                            <div className="space-x-2">
                                                <input className="w-4 h-4 rounded focus:ring-0" type="checkbox" name="" id="" />
                                                <Link href="#">EOTECH<span>(1)</span></Link>
                                            </div>
                                            <div className="space-x-2">
                                                <input className="w-4 h-4 rounded focus:ring-0" type="checkbox" name="" id="" />
                                                <Link href="#">HOLOSUN<span>(7)</span></Link>
                                            </div>
                                            <div className="space-x-2">
                                                <input className="w-4 h-4 rounded focus:ring-0" type="checkbox" name="" id="" />
                                                <Link href="#">Leupold.<span>(1)</span></Link>
                                            </div>

                                            <div className="space-x-2">
                                                <input className="w-4 h-4 rounded focus:ring-0" type="checkbox" name="" id="" />
                                                <Link href="#">Primary Arms<span>(1)</span></Link>
                                            </div>

                                        </div>
                                    </section>
                                    <section>
                                        <div>
                                            <button type="button"
                                                className="accordionBtn w-full flex justify-between border-b border-brand-gray-50 items-center cursor-pointer transition ease-linear duration-700 py-4 px-3">
                                                <p className="font-bold text-sm">Magnification</p>
                                                <svg className="plus-icon pointer-events-none w-4 h-4" xmlns="http://www.w3.org/2000/svg"
                                                    fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                                                </svg>

                                                <svg className="minus-icon hidden pointer-events-none w-4 h-4" xmlns="http://www.w3.org/2000/svg"
                                                    fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div
                                            className="w-full h-0 text-xs transition-[height] duration-200 ease-in overflow-hidden space-y-2.5 px-3.5">
                                            <div className="space-x-2 mt-2">
                                                <input className="w-4 h-4 rounded focus:ring-0" type="checkbox" name="" id="" />
                                                <Link href="#">1x<span>(42)</span></Link>
                                            </div>
                                            <div className="space-x-2">
                                                <input className="w-4 h-4 rounded focus:ring-0" type="checkbox" name="" id="" />
                                                <Link href="#">5x<span>(1)</span></Link>
                                            </div>

                                        </div>
                                    </section>
                                    <section>
                                        <div>
                                            <button type="button"
                                                className="accordionBtn w-full flex justify-between border-b border-brand-gray-50 items-center cursor-pointer transition ease-linear duration-700 py-4 px-3">
                                                <p className="font-bold text-sm">Rating</p>

                                                <svg className="plus-icon pointer-events-none w-4 h-4" xmlns="http://www.w3.org/2000/svg"
                                                    fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                                                </svg>

                                                <svg className="minus-icon hidden pointer-events-none w-4 h-4" xmlns="http://www.w3.org/2000/svg"
                                                    fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="w-full h-0 text-xss transition-[height] duration-200 ease-in overflow-hidden px-3.5">
                                            <div className="space-y-1 mt-2">
                                                <Link href="#" className="flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                                        style={{ fill: "rgba(253, 162, 57, 1)" }}>
                                                        <path
                                                            d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                                                        </path>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                                        style={{fill: "rgba(253, 235, 235, 1)"}}>
                                                        <path
                                                            d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                                                        </path>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                                        style={{fill: "rgba(253, 235, 235, 1)"}}>
                                                        <path
                                                            d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                                                        </path>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                                        style={{fill: "rgba(253, 235, 235, 1)"}}>
                                                        <path
                                                            d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                                                        </path>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                                        style={{fill: "rgba(253, 235, 235, 1)"}}>
                                                        <path
                                                            d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                                                        </path>
                                                    </svg>

                                                    &amp; up
                                                    <span className="inline-block pl-0.5">(6)</span>
                                                </Link>
                                                <Link href="#" className="flex items-center">
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
                                                        style={{fill: "rgba(253, 235, 235, 1)"}}>
                                                        <path
                                                            d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                                                        </path>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                                        style={{fill: "rgba(253, 235, 235, 1)"}}>
                                                        <path
                                                            d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                                                        </path>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                                        style={{fill: "rgba(253, 235, 235, 1)"}}>
                                                        <path
                                                            d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                                                        </path>
                                                    </svg>

                                                    &amp; up
                                                    <span className="inline-block pl-0.5">(6)</span>
                                                </Link>
                                                <Link href="#" className="flex items-center">
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
                                                        style={{fill: "rgba(253, 235, 235, 1)"}}>
                                                        <path
                                                            d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                                                        </path>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                                        style={{fill: "rgba(253, 235, 235, 1)"}}>
                                                        <path
                                                            d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                                                        </path>
                                                    </svg>

                                                    &amp; up
                                                    <span className="inline-block pl-0.5">(6)</span>
                                                </Link>
                                                <Link href="#" className="flex items-center pb-3">
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
                                                        style={{fill: "rgba(253, 235, 235, 1)"}}>
                                                        <path
                                                            d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                                                        </path>
                                                    </svg>

                                                    &amp; up
                                                    <span className="inline-block pl-0.5">(6)</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </section>

                                </div>
                            </div>
                        </div>

                        <form className="flex items-center justify-end sm:space-x-5">
                            <label className="hidden sm:block font-bold whitespace-nowrap" htmlFor="sort">Sort By:</label>
                            <select
                                className="w-full sm:w-auto text-xss cursor-pointer border-brand-gray-200 hover:border-brand-yellow-100 rounded focus:ring-0"
                                name="sort" id="sort" data-gtm-form-interact-field-id="0">
                                <option value="featured">Featured Items</option>
                                <option value="newest">Newest Items</option>
                                <option value="bestselling">Best Selling</option>
                                <option value="alphaasc">A to Z</option>
                                <option value="alphadesc">Z to A</option>
                                <option value="avgcustomerreview">By Review</option>
                                <option value="priceasc">Price: Ascending</option>
                                <option value="pricedesc">Price: Descending</option>
                            </select>
                        </form>
                        <div className="hidden md:flex items-center space-x-2.5">
                            <span className="font-bold">Show</span>
                            <Link href="https://store.theshootingcentre.com/optics/red-dot-sights/?limit=12" className=""
                                data-count="12">12</Link>
                            <Link href="https://store.theshootingcentre.com/optics/red-dot-sights/?limit=24" className="underline"
                                data-count="24">24</Link>
                            <Link href="https://store.theshootingcentre.com/optics/red-dot-sights/?limit=36" className="underline"
                                data-count="36">36</Link>
                            <Link href="https://store.theshootingcentre.com/optics/red-dot-sights/?limit=48" className="underline"
                                data-count="48">48</Link>
                        </div>
                        <button data-tab-target="#cards" type="button" className="tab active hidden lg:block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20">
                                <path
                                    d="M4 4h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 16h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4z"
                                    fill="currentColor"></path>
                            </svg>
                        </button>

                        <button data-tab-target="#card" type="button" className="tab  hidden lg:block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20">
                                <path d="M4 6h2v2H4zm0 5h2v2H4zm0 5h2v2H4zm16-8V6H8.023v2H18.8zM8 11h12v2H8zm0 5h12v2H8z"
                                    fill="currentColor"></path>
                            </svg>
                        </button>
                    </div>

                    <div id="cards" data-tab-content className="active">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 mt-5">
                            <div className="relative flex flex-col bg-white border border-brand-gray-200 p-5">
                                <Link href="#" className="block relative w-full h-40 xl:h-60">
                                    <Image className="w-full h-full object-contain" src="" alt="" />
                                </Link>
                                <div className="featured mt-3 pb-2">
                                    <h3 className="text-xss font-bold">Sig Sauer</h3>
                                    <Link href="/products/1"
                                        tabIndex={0}>
                                        ADM Spek Red Dot Sight w/ Aluminum QD Mount
                                    </Link>
                                </div>
                                <div className="pt-5 mt-auto">
                                    <h2 className="font-bold text-xl/none border-b border-brand-gray-200 pb-4">$33.60</h2>
                                    <div className="mt-5 lg:mt-8 space-y-2">
                                        <Link className="btn btn-yellow"
                                            href="https://store.theshootingcentre.com/sig-sauer-elite-ball-9mm-115-gr-fmj-ammunition/"
                                            data-event-type="product-click" data-product-id="18100" tabIndex={0}>Choose Options
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
                            </div>

                            <div className="relative flex flex-col bg-white border border-brand-gray-200 p-5">
                                <Link href="#" className="block relative w-full h-40 xl:h-60">
                                    <Image className="w-full h-full object-contain" src="" alt="" />
                                </Link>
                                <div className="featured mt-3 pb-2">
                                    <h3 className="text-xss font-bold">Sig Sauer
                                        <span className="inline-block font-normal pl-2">SKU: 600299-RSU</span>
                                    </h3>
                                    <Link href="https://store.theshootingcentre.com/sellier-bellot-rifle-line-303-british-180-gr-sp-ammunition/"
                                        tabIndex={0}>Aimpoint Acro C-2 3.5 MOA Red Dot Reflex Sight with Integrated Acro Interface</Link>
                                </div>
                                <div className="pt-5 mt-auto">
                                    <h2 className="font-bold text-xl/none border-b border-brand-gray-200 pb-4">$33.60</h2>
                                    <div className="mt-5 lg:mt-8 space-y-2">
                                        <form action="#" className="flex items-stretch">
                                            <input type="tel" defaultValue="1" min="1" autoComplete="off"
                                                className="w-12 btn btn-white-outline rounded-r-none" />
                                            <input type="submit" defaultValue="Add to Cart"
                                                className="btn btn-yellow flex-1 rounded-l-none cursor-pointer" />
                                        </form>
                                        <Link href="/wishlist.php?action=addwishlist&amp;product_id=18100" className="btn btn-white-outline">
                                            <span>Add to Your List</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                                stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                                </path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="relative flex flex-col bg-white border border-brand-gray-200 p-5">
                                <Link href="#" className="block relative w-full h-40 xl:h-60">
                                    <Image className="w-full h-full object-contain" src="" alt="" />
                                </Link>
                                <div className="featured mt-3 pb-2">
                                    <h3 className="text-xss font-bold">Sig Sauer</h3>
                                    <Link href="https://store.theshootingcentre.com/sellier-bellot-rifle-line-303-british-150-gr-sp-ammunition/"
                                        tabIndex={0}>Aimpoint Acro P-2 3.5 MOA Red Dot Reflex Sight with Integrated Acro Interface</Link>
                                </div>
                                <div className="pt-5 mt-auto">
                                    <h2 className="font-bold text-xl/none border-b border-brand-gray-200 pb-4">$33.60</h2>
                                    <div className="mt-5 lg:mt-8 space-y-2">
                                        <form action="#" className="flex items-stretch">
                                            <input type="tel" defaultValue="1" min="1" autoComplete="off"
                                                className="w-12 btn btn-white-outline rounded-r-none" />
                                            <input type="submit" defaultValue="Add to Cart"
                                                className="btn btn-yellow flex-1 rounded-l-none cursor-pointer" />
                                        </form>
                                        <Link href="/wishlist.php?action=addwishlist&amp;product_id=18100" className="btn btn-white-outline">
                                            <span>Add to Your List</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                                stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                                </path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="relative flex flex-col bg-white border border-brand-gray-200 p-5">
                                <Link href="#" className="block relative w-full h-40 xl:h-60">
                                    <Image className="w-full h-full object-contain" src="" alt="" />
                                </Link>
                                <div className="featured mt-3 pb-2">
                                    <h3 className="text-xss font-bold">Sig Sauer</h3>
                                    <Link href="https://store.theshootingcentre.com/federal-syntech-range-9mm-124-gr-syntech-jacket-flat-nose-ammunition/"
                                        tabIndex={0}>
                                        Aimpoint CompM5 Reflex
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
                                                style={{fill: "rgba(253, 235, 235, 1)"}}>
                                                <path
                                                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                                                </path>
                                            </svg>
                                        </button>
                                        <Link className="text-sm underline"
                                            href="https://store.theshootingcentre.com/sellier-bellot-canadian-match-22-lr-40-gr-lrn-rimfire-ammunition/#product-reviews"
                                            tabIndex={0}>1 review</Link>
                                    </div>
                                </div>
                                <div className="pt-5 mt-auto">
                                    <h2 className="font-bold text-xl/none border-b border-brand-gray-200 pb-4">$33.60</h2>
                                    <div className="mt-5 lg:mt-8 space-y-2">
                                        <Link className="btn btn-yellow"
                                            href="https://store.theshootingcentre.com/sig-sauer-elite-ball-9mm-115-gr-fmj-ammunition/"
                                            data-event-type="product-click" data-product-id="18100" tabIndex={0}>Choose Options
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
                            </div>

                            <div className="relative flex flex-col bg-white border border-brand-gray-200 p-5">
                                <Link href="#" className="block relative w-full h-40 xl:h-60">
                                    <Image className="w-full h-full object-contain" src="" alt="" />
                                </Link>
                                <div className="featured mt-3 pb-2">
                                    <h3 className="text-xss font-bold">Sig Sauer</h3>
                                    <Link href="https://store.theshootingcentre.com/sig-sauer-elite-ball-9mm-115-gr-fmj-ammunition/"
                                        tabIndex={0}>
                                        ADM Spek Red Dot Sight w/ Aluminum QD Mount
                                    </Link>
                                </div>
                                <div className="pt-5 mt-auto">
                                    <h2 className="font-bold text-xl/none border-b border-brand-gray-200 pb-4">$33.60</h2>
                                    <div className="mt-5 lg:mt-8 space-y-2">
                                        <Link className="btn btn-yellow"
                                            href="https://store.theshootingcentre.com/sig-sauer-elite-ball-9mm-115-gr-fmj-ammunition/"
                                            data-event-type="product-click" data-product-id="18100" tabIndex={0}>Choose Options
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
                            </div>

                            <div className="relative flex flex-col bg-white border border-brand-gray-200 p-5">
                                <Link href="#" className="block relative w-full h-40 xl:h-60">
                                    <Image className="w-full h-full object-contain" src="" alt="" />
                                </Link>
                                <div className="featured mt-3 pb-2">
                                    <h3 className="text-xss font-bold">Sig Sauer
                                        <span className="inline-block font-normal pl-2">SKU: 600299-RSU</span>
                                    </h3>
                                    <Link href="https://store.theshootingcentre.com/sellier-bellot-rifle-line-303-british-180-gr-sp-ammunition/"
                                        tabIndex={0}>Aimpoint Acro C-2 3.5 MOA Red Dot Reflex Sight with Integrated Acro Interface</Link>
                                </div>
                                <div className="pt-5 mt-auto">
                                    <h2 className="font-bold text-xl/none border-b border-brand-gray-200 pb-4">$33.60</h2>
                                    <div className="mt-5 lg:mt-8 space-y-2">
                                        <form action="#" className="flex items-stretch">
                                            <input type="tel" defaultValue="1" min="1" autoComplete="off"
                                                className="w-12 btn btn-white-outline rounded-r-none" />
                                            <input type="submit" defaultValue="Add to Cart"
                                                className="btn btn-yellow flex-1 rounded-l-none cursor-pointer" />
                                        </form>
                                        <Link href="/wishlist.php?action=addwishlist&amp;product_id=18100" className="btn btn-white-outline">
                                            <span>Add to Your List</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                                stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                                </path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="relative flex flex-col bg-white border border-brand-gray-200 p-5">
                                <Link href="#" className="block relative w-full h-40 xl:h-60">
                                    <Image className="w-full h-full object-contain" src="" alt="" />
                                </Link>
                                <div className="featured mt-3 pb-2">
                                    <h3 className="text-xss font-bold">Sig Sauer</h3>
                                    <Link href="https://store.theshootingcentre.com/sellier-bellot-rifle-line-303-british-150-gr-sp-ammunition/"
                                        tabIndex={0}>Aimpoint Acro P-2 3.5 MOA Red Dot Reflex Sight with Integrated Acro Interface</Link>
                                </div>
                                <div className="pt-5 mt-auto">
                                    <h2 className="font-bold text-xl/none border-b border-brand-gray-200 pb-4">$33.60</h2>
                                    <div className="mt-5 lg:mt-8 space-y-2">
                                        <form action="#" className="flex items-stretch">
                                            <input type="tel" defaultValue="1" min="1" autoComplete="off"
                                                className="w-12 btn btn-white-outline rounded-r-none" />
                                            <input type="submit" defaultValue="Add to Cart"
                                                className="btn btn-yellow flex-1 rounded-l-none cursor-pointer" />
                                        </form>
                                        <Link href="/wishlist.php?action=addwishlist&amp;product_id=18100" className="btn btn-white-outline">
                                            <span>Add to Your List</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                                stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                                </path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="relative flex flex-col bg-white border border-brand-gray-200 p-5">
                                <Link href="#" className="block relative w-full h-40 xl:h-60">
                                    <Image className="w-full h-full object-contain" src="" alt="" />
                                </Link>
                                <div className="featured mt-3 pb-2">
                                    <h3 className="text-xss font-bold">Sig Sauer</h3>
                                    <Link href="https://store.theshootingcentre.com/federal-syntech-range-9mm-124-gr-syntech-jacket-flat-nose-ammunition/"
                                        tabIndex={0}>
                                        Aimpoint CompM5 Reflex
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
                                                style={{fill: "rgba(253, 235, 235, 1)"}}>
                                                <path
                                                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                                                </path>
                                            </svg>
                                        </button>
                                        <Link className="text-sm underline"
                                            href="https://store.theshootingcentre.com/sellier-bellot-canadian-match-22-lr-40-gr-lrn-rimfire-ammunition/#product-reviews"
                                            tabIndex={0}>1 review</Link>
                                    </div>
                                </div>
                                <div className="pt-5 mt-auto">
                                    <h2 className="font-bold text-xl/none border-b border-brand-gray-200 pb-4">$33.60</h2>
                                    <div className="mt-5 lg:mt-8 space-y-2">
                                        <Link className="btn btn-yellow"
                                            href="https://store.theshootingcentre.com/sig-sauer-elite-ball-9mm-115-gr-fmj-ammunition/"
                                            data-event-type="product-click" data-product-id="18100" tabIndex={0}>Choose Options
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
                            </div>

                            <div className="relative flex flex-col bg-white border border-brand-gray-200 p-5">
                                <Link href="#" className="block relative w-full h-40 xl:h-60">
                                    <Image className="w-full h-full object-contain" src="" alt="" />
                                </Link>
                                <div className="featured mt-3 pb-2">
                                    <h3 className="text-xss font-bold">Sig Sauer</h3>
                                    <Link href="https://store.theshootingcentre.com/sig-sauer-elite-ball-9mm-115-gr-fmj-ammunition/"
                                        tabIndex={0}>
                                        ADM Spek Red Dot Sight w/ Aluminum QD Mount
                                    </Link>
                                </div>
                                <div className="pt-5 mt-auto">
                                    <h2 className="font-bold text-xl/none border-b border-brand-gray-200 pb-4">$33.60</h2>
                                    <div className="mt-5 lg:mt-8 space-y-2">
                                        <Link className="btn btn-yellow"
                                            href="https://store.theshootingcentre.com/sig-sauer-elite-ball-9mm-115-gr-fmj-ammunition/"
                                            data-event-type="product-click" data-product-id="18100" tabIndex={0}>Choose Options
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
                            </div>

                            <div className="relative flex flex-col bg-white border border-brand-gray-200 p-5">
                                <Link href="#" className="block relative w-full h-40 xl:h-60">
                                    <Image className="w-full h-full object-contain" src="" alt="" />
                                </Link>
                                <div className="featured mt-3 pb-2">
                                    <h3 className="text-xss font-bold">Sig Sauer
                                        <span className="inline-block font-normal pl-2">SKU: 600299-RSU</span>
                                    </h3>
                                    <Link href="https://store.theshootingcentre.com/sellier-bellot-rifle-line-303-british-180-gr-sp-ammunition/"
                                        tabIndex={0}>Aimpoint Acro C-2 3.5 MOA Red Dot Reflex Sight with Integrated Acro Interface</Link>
                                </div>
                                <div className="pt-5 mt-auto">
                                    <h2 className="font-bold text-xl/none border-b border-brand-gray-200 pb-4">$33.60</h2>
                                    <div className="mt-5 lg:mt-8 space-y-2">
                                        <form action="#" className="flex items-stretch">
                                            <input type="tel" defaultValue="1" min="1" autoComplete="off"
                                                className="w-12 btn btn-white-outline rounded-r-none" />
                                            <input type="submit" defaultValue="Add to Cart"
                                                className="btn btn-yellow flex-1 rounded-l-none cursor-pointer" />
                                        </form>
                                        <Link href="/wishlist.php?action=addwishlist&amp;product_id=18100" className="btn btn-white-outline">
                                            <span>Add to Your List</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                                stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                                </path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="relative flex flex-col bg-white border border-brand-gray-200 p-5">
                                <Link href="#" className="block relative w-full h-40 xl:h-60">
                                    <Image className="w-full h-full object-contain" src="" alt="" />
                                </Link>
                                <div className="featured mt-3 pb-2">
                                    <h3 className="text-xss font-bold">Sig Sauer</h3>
                                    <Link href="https://store.theshootingcentre.com/sellier-bellot-rifle-line-303-british-150-gr-sp-ammunition/"
                                        tabIndex={0}>Aimpoint Acro P-2 3.5 MOA Red Dot Reflex Sight with Integrated Acro Interface</Link>
                                </div>
                                <div className="pt-5 mt-auto">
                                    <h2 className="font-bold text-xl/none border-b border-brand-gray-200 pb-4">$33.60</h2>
                                    <div className="mt-5 lg:mt-8 space-y-2">
                                        <form action="#" className="flex items-stretch">
                                            <input type="tel" defaultValue="1" min="1" autoComplete="off"
                                                className="w-12 btn btn-white-outline rounded-r-none" />
                                            <input type="submit" defaultValue="Add to Cart"
                                                className="btn btn-yellow flex-1 rounded-l-none cursor-pointer" />
                                        </form>
                                        <Link href="/wishlist.php?action=addwishlist&amp;product_id=18100" className="btn btn-white-outline">
                                            <span>Add to Your List</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                                stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                                </path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="relative flex flex-col bg-white border border-brand-gray-200 p-5">
                                <Link href="#" className="block relative w-full h-40 xl:h-60">
                                    <Image className="w-full h-full object-contain" src="" alt="" />
                                </Link>
                                <div className="featured mt-3 pb-2">
                                    <h3 className="text-xss font-bold">Sig Sauer</h3>
                                    <Link href="https://store.theshootingcentre.com/federal-syntech-range-9mm-124-gr-syntech-jacket-flat-nose-ammunition/"
                                        tabIndex={0}>
                                        Aimpoint CompM5 Reflex
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
                                                style={{fill: "rgba(253, 235, 235, 1)"}}>
                                                <path
                                                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                                                </path>
                                            </svg>
                                        </button>
                                        <Link className="text-sm underline"
                                            href="https://store.theshootingcentre.com/sellier-bellot-canadian-match-22-lr-40-gr-lrn-rimfire-ammunition/#product-reviews"
                                            tabIndex={0}>1 review</Link>
                                    </div>
                                </div>
                                <div className="pt-5 mt-auto">
                                    <h2 className="font-bold text-xl/none border-b border-brand-gray-200 pb-4">$33.60</h2>
                                    <div className="mt-5 lg:mt-8 space-y-2">
                                        <Link className="btn btn-yellow"
                                            href="https://store.theshootingcentre.com/sig-sauer-elite-ball-9mm-115-gr-fmj-ammunition/"
                                            data-event-type="product-click" data-product-id="18100" tabIndex={0}>Choose Options
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
                            </div>
                        </div>
                    </div>

                    <div id="card" data-tab-content className="mt-5 space-y-4">
                        <div
                            className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-white border border-brand-gray-200 gap-5 p-5">
                            <Link href="#" className="row-span-2 md:row-span-1 block relative w-full h-40 lg:h-48">
                                <Image className="w-full h-full object-contain" src="" alt="" />
                            </Link>
                            <div className="featured lg:col-span-2 pb-2">
                                <h3 className="text-xss font-bold">Sig Sauer</h3>
                                <Link href="https://store.theshootingcentre.com/sig-sauer-elite-ball-9mm-115-gr-fmj-ammunition/"
                                    tabIndex={0}>
                                    ADM Spek Red Dot Sight w/ Aluminum QD Mount
                                </Link>
                            </div>
                            <div className="">
                                <h2 className="font-bold text-xl/none border-b border-brand-gray-200 pb-4">$33.60</h2>
                                <div className="mt-5 lg:mt-8 space-y-2">
                                    <Link className="btn btn-yellow"
                                        href="https://store.theshootingcentre.com/sig-sauer-elite-ball-9mm-115-gr-fmj-ammunition/"
                                        data-event-type="product-click" data-product-id="18100" tabIndex={0}>Choose Options
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
                        </div>
                        <div
                            className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-white border border-brand-gray-200 gap-5 p-5">
                            <Link href="#" className="row-span-2 md:row-span-1 block relative w-full h-40 lg:h-48">
                                <Image className="w-full h-full object-contain" src="" alt="" />
                            </Link>
                            <div className="featured lg:col-span-2 pb-2">
                                <h3 className="text-xss font-bold">Sig Sauer</h3>
                                <Link href="https://store.theshootingcentre.com/sig-sauer-elite-ball-9mm-115-gr-fmj-ammunition/"
                                    tabIndex={0}>
                                    ADM Spek Red Dot Sight w/ Aluminum QD Mount
                                </Link>
                            </div>
                            <div className="">
                                <h2 className="font-bold text-xl/none border-b border-brand-gray-200 pb-4">$33.60</h2>
                                <div className="mt-5 lg:mt-8 space-y-2">
                                    <Link className="btn btn-yellow"
                                        href="https://store.theshootingcentre.com/sig-sauer-elite-ball-9mm-115-gr-fmj-ammunition/"
                                        data-event-type="product-click" data-product-id="18100" tabIndex={0}>Choose Options
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
                        </div>

                        <div
                            className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-white border border-brand-gray-200 gap-5 p-5">
                            <Link href="#" className="row-span-2 md:row-span-1 block relative w-full h-40 lg:h-48">
                                <Image className="w-full h-full object-contain" src="" alt="" />
                            </Link>
                            <div className="featured lg:col-span-2 pb-2">
                                <h3 className="text-xss font-bold">Sig Sauer</h3>
                                <Link href="https://store.theshootingcentre.com/sig-sauer-elite-ball-9mm-115-gr-fmj-ammunition/"
                                    tabIndex={0}>
                                    ADM Spek Red Dot Sight w/ Aluminum QD Mount
                                </Link>
                            </div>
                            <div className="">
                                <h2 className="font-bold text-xl/none border-b border-brand-gray-200 pb-4">$33.60</h2>
                                <div className="mt-5 lg:mt-8 space-y-2">
                                    <Link className="btn btn-yellow"
                                        href="https://store.theshootingcentre.com/sig-sauer-elite-ball-9mm-115-gr-fmj-ammunition/"
                                        data-event-type="product-click" data-product-id="18100" tabIndex={0}>Choose Options
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
                        </div>
                        <div
                            className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-white border border-brand-gray-200 gap-5 p-5">
                            <Link href="#" className="row-span-2 md:row-span-1 block relative w-full h-40 lg:h-48">
                                <Image className="w-full h-full object-contain" src="" alt="" />
                            </Link>
                            <div className="featured lg:col-span-2 pb-2">
                                <h3 className="text-xss font-bold">Sig Sauer</h3>
                                <Link href="https://store.theshootingcentre.com/sig-sauer-elite-ball-9mm-115-gr-fmj-ammunition/"
                                    tabIndex={0}>
                                    ADM Spek Red Dot Sight w/ Aluminum QD Mount
                                </Link>
                            </div>
                            <div className="">
                                <h2 className="font-bold text-xl/none border-b border-brand-gray-200 pb-4">$33.60</h2>
                                <div className="mt-5 lg:mt-8 space-y-2">
                                    <Link className="btn btn-yellow"
                                        href="https://store.theshootingcentre.com/sig-sauer-elite-ball-9mm-115-gr-fmj-ammunition/"
                                        data-event-type="product-click" data-product-id="18100" tabIndex={0}>Choose Options
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
                        </div>
                    </div>

                    <div className="flex items-center justify-center text-sm space-x-2.5 mt-10">
                        <Link href="#"
                            className="hover:text-brand-yellow-100 border border-brand-gray-200 rounded transition-colors ease-linear py-1 px-1.5">1</Link>
                        <Link href="#" className="hover:text-brand-yellow-100 transition-colors ease-linear">2</Link>
                        <Link href="#" className="hover:text-brand-yellow-100 transition-colors ease-linear">3</Link>
                        <Link href="#" className="hover:text-brand-yellow-100 transition-colors ease-linear">4</Link>
                        <Link href="#" className="underline hover:text-brand-yellow-100 transition-colors ease-linear">Next</Link>
                    </div>

                </div>
            </div>
        </div>
    );
}
