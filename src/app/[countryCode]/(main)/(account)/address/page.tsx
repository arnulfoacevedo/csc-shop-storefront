import LinkBar from "@modules/account/LinkBar";
import RouteBar from "@modules/account/RouteBar";
import Link from "next/link";

export default function Address() {
  return (
    <>
      <RouteBar routeName="Address Book" />
      <div className="container lg:max-w-26 mx-auto mt-12 px-5">
        <LinkBar routeName="Address" />
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
          <div className="relative bg-white border border-brand-gray-200 space-y-2 p-5 pb-16">
            <h3>Your Account Name</h3>
            <ul>
              <li>Home</li>
              <li>2 M.Azimov street #118</li>
              <li></li>
              <li>Andijon, Andijon 170100</li>
              <li>Uzbekistan</li>
            </ul>
            <p className="text-sm">Phone: <span>8979942528</span></p>
            <div className="absolute bottom-6 left-5 flex items-center text-sm space-x-1">
              <Link href="#" className="underline link-tansition">Edit</Link>
              <span>|</span>
              <button type="button" className="underline">Delete</button>
            </div>
          </div>
          <div className="group relative flex items-center justify-center bg-white border border-brand-gray-200 p-5">
            <Link href="#"
              className="flex flex-col items-center group-hover:text-brand-yellow-100 transition-colors ease-linear gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <span>New Address</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
