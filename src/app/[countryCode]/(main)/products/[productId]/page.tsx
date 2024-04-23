import Link from "next/link";
import Image from 'next/image';

// import directus from '@/lib/directus';
// import { readItem } from '@directus/sdk';
import productImg from "@/public/image/10070_source_1688050381.jpg";

interface ProductPageProps {
    params: {
        productId: string;
    };
}

// const getArticle = async (articleId: string) => {
//     try {
//         const article = await directus.request(readItem('articles', articleId));
//         return article;
//     } catch (error) {
//         console.log(error);
//         return {};
//     }
// }

const ProductPage =  ({ params }: ProductPageProps) => {
    // const article = await getArticle(params.articleId);

    return (
        <>
            <div className="container mx-auto hidden md:flex items-center text-xss space-x-2 p-5">
                <Link href="./index.html" className="underline">Home</Link>
                <span>/</span>
                <Link href="https://store.theshootingcentre.com/ammunition/" className="underline">
                    Ammunition
                </Link>
                <span>/</span>
                <Link href="https://store.theshootingcentre.com/ammunition/centrefire/" className="underline">
                    Centrefire
                </Link>
                <span>/</span>
                <p>Sig Sauer Elite Ball 9mm, 115 gr, FMJ Ammunition</p>
            </div>

            <div className="bg-white border-y border-brand-gray-200">
                <div className="container mx-auto py-10 px-5">
                    <div className="grid md:grid-cols-2 xl:grid-cols-11 gap-x-6 gap-y-4 xl:gap-8">
                        <div id="image-container" className="md:row-span-2 xl:row-span-1 xl:col-span-4 max-w-100 aspect-square overflow-hidden cursor-zoom-in">
                            <Image className="w-full h-full origin-center" src={productImg} alt="" />
                        </div>
                        <div className="order-first md:order-none text-sm space-y-4 xl:col-span-4">
                            <div className="md:border-b border-brand-gray-200 space-y-2 pb-5">
                                <h1 className="font-bold text-xl">Sig Sauer Elite Ball 9mm, 115 gr, FMJ Ammunition</h1>
                                <Link href="https://store.theshootingcentre.com/sig-sauer/" className="block underline">Sig Sauer</Link>
                                <p>No reviews yet
                                    <Link className="inline-block underline ml-2.5"
                                        href="https://store.theshootingcentre.com/sig-sauer-elite-ball-9mm-115-gr-fmj-ammunition/">
                                        Write a Review
                                    </Link>
                                </p>
                                <p>SKU:ISS6449</p>
                            </div>
                            <div className="hidden xl:block space-y-2">
                                <button type="button"
                                    className="font-bold text-xss bg-brand-red text-white uppercase px-3 py-0.5">Sale</button>
                                <p className="text-brand-red-100">Was: <s>$42.00</s></p>
                                <p className="font-bold text-xl">$33.60</p>
                            </div>
                            <p className="hidden md:block"> UPC:798681516889</p>
                        </div>
                        <div className="xl:col-span-3">
                            <p className="md:hidden pb-5"> UPC:798681516889</p>
                            <div className="text-xss border border-brand-gray-200 space-y-4 lg:space-y-6 p-5">
                                <div className="space-y-2">
                                    <p className="font-bold text-xl">$33.60</p>
                                    <label className="hidden lg:block font-semibold"> Package Quantity:
                                        <span className="inline-block">50</span>
                                        <span className="font-normal">Required</span>
                                    </label>
                                    <input
                                        className="hidden lg:block w-10 h-7 border-brand-yellow-100 focus:border-brand-yellow-100 focus:ring-0 px-2"
                                        type="tel" defaultValue="50" id="number" />
                                </div>
                                <div className="space-y-2">
                                    <label className="font-semibold">Quantity:</label>
                                    <input
                                        className="block w-12 h-10 border-brand-gray-200 focus:ring-0 focus:border-brand-gray-200 text-center rounded "
                                        type="tel" defaultValue="1" id="tel" />
                                </div>
                                <div className="space-y-2.5">
                                    <button type="button" className="btn btn-yellow w-full h-10">Add to Cart</button>
                                    <button type="button" className="btn btn-white-outline w-full h-10 flex">Add to Your List</button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div className="px-5 lg:px-16">
                <div className="container mx-auto text-sm bg-white border border-brand-gray-200 space-y-5 mt-5 p-5">
                    <h2 className="text-xl font-bold">Description</h2>
                    <p>
                        From RV adventures to camping trips to backyard BBQs, this versatile, stainless-steel set is right at home.
                        Fill the vacuum-insulated pitcher with cocktails, mocktails, iced tea, or even hot cider. The rugged handle
                        and pour-through lid make for easy serving into the matching pint glasses. Cheers!
                    </p>
                    <p>
                        We lead the industry, creating solutions that make life better. We continue to create legendary technology to
                        serve the all-day food and beverage needs.
                    </p>
                    <p>Our products do what we say they do or we replace them. We guarantee it.</p>
                    <ul className="list-disc pl-5">
                        <li>
                            <strong>Specs</strong>
                            <ul className="pl-5" style={{ listStyleType: "circle" }}>
                                <li>Weight: 2.74 lb.</li>
                                <li>Dimensions: 9.2L x 5.8W x 9.8H in<br /><br /></li>
                            </ul>
                        </li>
                        <li><strong>Details</strong>
                            <ul className="pl-5" style={{ listStyleType: "circle" }}>
                                <li>Classic Series</li>
                                <li>18/8 stainless steel, BPA-free</li>
                                <li>Double-wall vacuum insulation</li>
                                <li>Heavy-duty handle</li>
                                <li>Tritan™ pour-through lid</li>
                                <li>Dishwasher safe</li>
                                <li>Set includes:
                                    <ul className="pl-5" style={{ listStyle: "square" }}>
                                        <li>[1] Classic Stay Chill Pitcher (64 OZ / 1.9 L)</li>
                                        <li>[2] Stacking steel pint glasses (16 OZ / .47 L)</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="px-5 lg:px-16">
                <div className="container mx-auto text-sm bg-white border border-brand-gray-200 mt-5 p-5">
                    <h2 className="text-xl font-bold">Extra Information</h2>
                    <div className="grid grid-cols-4 border border-brand-gray-200 text-sm mt-5">
                        <p className="font-bold bg-brand-gray-500 py-1 px-3">Brand:</p>
                        <p className="col-span-3 py-1 px-3">Stanley</p>
                    </div>
                    <div className="grid grid-cols-4 border border-t-0 border-brand-gray-200 text-sm">
                        <p className="font-bold bg-brand-gray-500 py-1 px-3">Product:</p>
                        <p className="col-span-3 py-1 px-3">Beer Pitcher</p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-5">
                <h2 className="text-xl text-center border-t border-brand-gray-200 py-7">Related Products</h2>

                <div className="relative">
                    <div className="swiper product">
                        <div className="swiper-wrapper lg:!justify-center">
                            <div className="swiper-slide relative bg-white border border-brand-gray-200 p-5">
                                <Link href="#" className="block relative w-full h-60 sm:h-40 lg:h-60">
                                    <Image className="w-full h-full object-contain" src="" alt="" />
                                    <button type="button" className="btn-red">Sale • Save 20% </button>
                                </Link>
                                <div className="featured mt-3">
                                    <h3 className="text-xss font-bold">Sig Sauer <span className="inline-block font-normal pl-2">SKU:
                                        600299-RSU</span></h3>
                                    <Link href="https://store.theshootingcentre.com/sig-sauer-elite-ball-9mm-115-gr-fmj-ammunition/"
                                        tabIndex={0}>
                                        Sig Sauer Elite Ball 9mm, 115 gr, FMJ Ammunition
                                    </Link>
                                </div>
                                <div className="mt-3">
                                    <p className="text-brand-red-100 text-sm">Was: <s>$42.00</s></p>
                                    <h2 className="font-bold text-xl/none border-b border-brand-gray-200 pb-4">$33.60</h2>
                                    <div className="mt-6 lg:mt-8 space-y-2">
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

                            <div className="swiper-slide relative bg-white border border-brand-gray-200 p-5">
                                <Link href="#" className="block relative w-full h-60 sm:h-40 lg:h-60">
                                    <Image className="w-full h-full object-contain" src="" alt="" />
                                    <button type="button" className="btn-red">Sale • Save 20% </button>
                                </Link>
                                <div className="featured mt-3">
                                    <h3 className="text-xss font-bold">Sig Sauer <span className="inline-block font-normal pl-2">SKU:
                                        600299-RSU</span></h3>
                                    <Link className="!line-clamp-2"
                                        href="https://store.theshootingcentre.com/federal-syntech-range-9mm-124-gr-syntech-jacket-flat-nose-ammunition/"
                                        tabIndex={0}>Federal Syntech Range 9mm, 124 gr, Syntech Jacket Flat Nose Ammunition</Link>
                                </div>
                                <div className="mt-3">
                                    <p className="text-brand-red-100 text-sm opacity-0">Was: <s>$42.00</s></p>
                                    <h2 className="font-bold text-xl/none border-b border-brand-gray-200 pb-4">$33.60</h2>
                                    <div className="mt-6 lg:mt-8 space-y-2">
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

                            <div className="swiper-slide relative bg-white border border-brand-gray-200 p-5">
                                <Link href="#" className="block relative w-full h-60 sm:h-40 lg:h-60">
                                    <Image className="w-full h-full object-contain" src="" alt="" />
                                    <button type="button" className="btn-red">Sale • Save 20% </button>
                                </Link>
                                <div className="featured mt-3">
                                    <h3 className="text-xss font-bold">Sig Sauer <span className="inline-block font-normal pl-2">SKU:
                                        600299-RSU</span></h3>
                                    <Link href="https://store.theshootingcentre.com/sellier-bellot-rifle-line-303-british-180-gr-sp-ammunition/"
                                        tabIndex={0}>Sellier &amp; Bellot Rifle Line 303 British, 180 gr, SP Ammunition</Link>
                                </div>
                                <div className="mt-3">
                                    <p className="text-brand-red-100 text-sm">Was: <s>$42.00</s></p>
                                    <h2 className="font-bold text-xl/none border-b border-brand-gray-200 pb-4">$33.60</h2>
                                    <div className="mt-6 lg:mt-8 space-y-2">
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

                            <div className="swiper-slide relative bg-white border border-brand-gray-200 p-5">
                                <Link href="#" className="block relative w-full h-60 sm:h-40 lg:h-60">
                                    <Image className="w-full h-full object-contain" src="" alt="" />
                                    <button type="button" className="btn-red">Sale • Save 20% </button>
                                </Link>
                                <div className="featured mt-3">
                                    <h3 className="text-xss font-bold">Sig Sauer <span className="inline-block font-normal pl-2">SKU:
                                        600299-RSU</span></h3>
                                    <Link href="https://store.theshootingcentre.com/sellier-bellot-rifle-line-303-british-150-gr-sp-ammunition/"
                                        tabIndex={0}>Sellier &amp; Bellot Rifle Line 303 British, 150 gr, SP Ammunition</Link>
                                </div>
                                <div className="mt-3">
                                    <p className="text-brand-red-100 text-sm">Was: <s>$42.00</s></p>
                                    <h2 className="font-bold text-xl/none border-b border-brand-gray-200 pb-4">$33.60</h2>
                                    <div className="mt-6 lg:mt-8 space-y-2">
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
                    <div className="absolute top-1/2 -translate-y-1/2 flex justify-between items-center -inset-x-2 lg:-inset-x-10 z-10">
                        <button type="button" className="swiper-button-prev-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1"
                                stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <button type="button" className="swiper-button-next-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1"
                                stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                    <div className="swiper-pagination-1 !text-center !mt-3"></div>
                </div>
            </div>
        </>
    );
}
export default ProductPage;
