import { Metadata } from "next"

import LoginTemplate from "@modules/account/templates/login-template"
import { listRegions } from "@lib/data"

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to your Medusa Store account.",
}

export default async function Login() {
  const regions = await listRegions()
  return <LoginTemplate regions={regions} />
}
