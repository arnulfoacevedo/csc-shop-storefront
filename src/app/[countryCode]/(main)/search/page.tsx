import SearchModal from "@modules/search/templates/search-modal"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Search",
  description: "Search all of our products.",
}

export default function SearchModalRoute() {
  return <SearchModal />
}
