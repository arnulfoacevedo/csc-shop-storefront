"use client"

import { useState } from "react"

import Register from "@modules/account/components/register"
import Login from "@modules/account/components/login"
import { Region } from "@medusajs/medusa"

export enum LOGIN_VIEW {
  SIGN_IN = "sign-in",
  REGISTER = "register",
}
type Props = {
  regions: Region[] | null
}

const LoginTemplate = ({ regions }: Props) => {
  const [currentView, setCurrentView] = useState("sign-in")

  return (
    <>
      {currentView === "sign-in" ? (
        <Login setCurrentView={setCurrentView} />
      ) : (
        <Register setCurrentView={setCurrentView} regions={regions} />
      )}
    </>
  )
}

export default LoginTemplate
