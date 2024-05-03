import LinkBar from "@modules/account/LinkBar";
import RouteBar from "@modules/account/RouteBar";
import Link from "next/link";
import Image from "next/image";

export default function RecentlyView() {
  return (
    <>
        <div className="space-y-5 mt-10">
          <div
            className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-white border border-brand-gray-200 gap-5 p-5">
            <Link href="#" className="row-span-2 md:row-span-1 block relative w-full h-40 lg:h-48">
              <Image className="w-full h-full object-contain" src="" alt="" />
            </Link>
            <div className="featured lg:col-span-2 pb-2">
              <h3 className="text-xss font-bold">Sig Sauer</h3>
              <Link href="https://store.theshootingcentre.com/sig-sauer-elite-ball-9mm-115-gr-fmj-ammunition/" >
                ADM Spek Red Dot Sight w/ Aluminum QD Mount
              </Link>
            </div>
            <div>
              <h2 className="font-bold text-xl/none border-b border-brand-gray-200 pb-4">$33.60</h2>
              <div className="mt-5 lg:mt-8 space-y-2">
                <Link className="btn btn-yellow"
                  href="https://store.theshootingcentre.com/sig-sauer-elite-ball-9mm-115-gr-fmj-ammunition/"
                  data-event-type="product-click" data-product-id="18100" >Choose Options
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
              <Link href="https://store.theshootingcentre.com/sig-sauer-elite-ball-9mm-115-gr-fmj-ammunition/" >
                ADM Spek Red Dot Sight w/ Aluminum QD Mount
              </Link>
            </div>
            <div>
              <h2 className="font-bold text-xl/none border-b border-brand-gray-200 pb-4">$33.60</h2>
              <div className="mt-5 lg:mt-8 space-y-2">
                <Link className="btn btn-yellow"
                  href="https://store.theshootingcentre.com/sig-sauer-elite-ball-9mm-115-gr-fmj-ammunition/"
                  data-event-type="product-click" data-product-id="18100" >Choose Options
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
              <Link href="https://store.theshootingcentre.com/sig-sauer-elite-ball-9mm-115-gr-fmj-ammunition/" >
                ADM Spek Red Dot Sight w/ Aluminum QD Mount
              </Link>
            </div>
            <div>
              <h2 className="font-bold text-xl/none border-b border-brand-gray-200 pb-4">$33.60</h2>
              <div className="mt-5 lg:mt-8 space-y-2">
                <Link className="btn btn-yellow"
                  href="https://store.theshootingcentre.com/sig-sauer-elite-ball-9mm-115-gr-fmj-ammunition/"
                  data-event-type="product-click" data-product-id="18100" >Choose Options
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
              <Link href="https://store.theshootingcentre.com/sig-sauer-elite-ball-9mm-115-gr-fmj-ammunition/" >
                ADM Spek Red Dot Sight w/ Aluminum QD Mount
              </Link>
            </div>
            <div>
              <h2 className="font-bold text-xl/none border-b border-brand-gray-200 pb-4">$33.60</h2>
              <div className="mt-5 lg:mt-8 space-y-2">
                <Link className="btn btn-yellow"
                  href="https://store.theshootingcentre.com/sig-sauer-elite-ball-9mm-115-gr-fmj-ammunition/"
                  data-event-type="product-click" data-product-id="18100" >Choose Options
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
    </>
  );
}
