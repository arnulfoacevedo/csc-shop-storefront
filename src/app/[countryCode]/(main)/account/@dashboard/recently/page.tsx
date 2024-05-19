import { getRegion } from "@lib/data";
import RecentlyTemplate from "@modules/account/templates/recently-template";
import { notFound } from "next/navigation"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Recently viewed",
  description: "Recently viewed",
}

type Props = {
  params: { countryCode: string; productHandle: string }
}
export default async function RecentlyView({ params }: Props) {

  const region = await getRegion(params.countryCode)
  if (!region) {
    notFound()
  }  
  return (
      <div className="space-y-5 mt-10">
        <RecentlyTemplate region={region} countryCode={params.countryCode} />
      </div>
  );
}
