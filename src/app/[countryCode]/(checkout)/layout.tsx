import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ChevronDown from "@modules/common/icons/chevron-down"
import MedusaCTA from "@modules/layout/components/medusa-cta"
import Link from "next/link"
import Image from "next/image"
import logoImg from "@/public/image/logo.png"

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full relative small:min-h-screen">
      <nav className="flex w-full items-center content-container justify-between">
        <div className="bg-brand-gray-100 w-full">
          <div className="container mx-auto p-8">
                <LocalizedClientLink
                  href="/"
                >
                  <Image src={logoImg} alt="" />
                </LocalizedClientLink>

          </div>
        </div>
      </nav>
      <div className="relative container mx-auto mt-5 px-5" data-testid="checkout-container">{children}</div>
    </div>
  )
}
