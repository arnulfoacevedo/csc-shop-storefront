import LinkBar from "@modules/account/LinkBar";
import RouteBar from "@modules/account/RouteBar";
import Link from "next/link";

export default function Payment() {
  return (
    <>
      <h2 className="text-xl mt-10">VISA, MC, AMEX</h2>
      <div className="grid md:grid-cols-2 gap-5 mt-5">
        <div className="group relative min-h-[16rem] flex items-center justify-center border border-brand-gray-200 p-5">
          <Link href="#"
            className="flex flex-col items-center group-hover:text-brand-yellow-100 transition-colors ease-linear gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
              stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <span>Add new payment method</span>
          </Link>
        </div>
      </div>

    </>
  );
}
