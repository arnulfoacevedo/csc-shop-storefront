"use client"

import { useFormState } from "react-dom"

import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import { signUp } from "@modules/account/actions"
import Link from "next/link"
import { Button } from "@medusajs/ui"
import NativeSelect from "@modules/common/components/native-select"
import { Region } from "@medusajs/medusa"
import { useMemo } from "react"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
  regions: Region[] | null
}

const Register = ({ setCurrentView, regions }: Props) => {
  const [message, formAction] = useFormState(signUp, null)
  const regionOptions = useMemo(() => {
    return (
      regions
        ?.map((region) => {
          return region.countries.map((country) => ({
            value: country.iso_2,
            label: country.display_name,
          }))
        })
        .flat() || []
    )
  }, [regions])

  return (
    <>
      <div className="container mx-auto mt-5 px-5">
        <div className="hidden md:flex items-center text-xss space-x-2">
          <Link href="/" className="underline">
            Home
          </Link>
          <span>/</span>
          <p>Create Account</p>
        </div>
      </div>

      <form className="container mx-auto px-5 mt-7" action={formAction}>
        <h1 className="text-[28px]/none">New Account</h1>
        <div className="contact grid lg:grid-cols-2 gap-5 mt-7">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label>Email Address:</label>
              <small>Required</small>
            </div>
            <input type="email" name="email" required />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label>password</label>
              <small>Required</small>
            </div>
            <input type="password" name="password" required />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label>Confirm Password</label>
              <small>Required</small>
            </div>
            <input type="password" name="Confirm" required />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label>Company Name</label>
            </div>
            <input type="text" name="company" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="First">First Name</label>
              <small>Required</small>
            </div>
            <input type="text" name="first_name" required />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="Last">Last Name</label>
              <small>Required</small>
            </div>
            <input type="text" name="last_name" required />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="address_1"> Address Line 1</label>
              <small>Required</small>
            </div>
            <input type="text" name="address_1" required />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="address_2"> Address Line 2</label>
              {/* <small>Required</small> */}
            </div>
            <input type="text" name="address_2" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="city">City / Town</label>
              <small>Required</small>
            </div>
            <input type="text" name="city" required />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="province">Province</label>
              <small>Required</small>
            </div>
            <input type="text" name="province" required />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="postal_code">Postal Code</label>
              <small>Required</small>
            </div>
            <input type="text" name="postal_code" required />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="Country">Country</label>
              <small>Required</small>
            </div>
            <NativeSelect
              name="country_code"
              required
              data-testid="billing-country-code-select"
            >
              <option value="">-</option>
              {regionOptions.map((option, i) => {
                return (
                  <option key={i} value={option.value}>
                    {option.label}
                  </option>
                )
              })}
            </NativeSelect>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="phone">Phone Number</label>
              <small>Required</small>
            </div>
            <input type="text" name="phone" required />
          </div>

          {/* <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="pal">PAL Number - First 8 Digits</label>
              <small>Required</small>
            </div>
            <input type="text" name="pal" />
          </div> */}

          {/* <div className="grid lg:grid-cols-3 gap-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="birth">Date of Birth</label>
              </div>
              <select
                className="form-select"
                name="FormFieldMonth[2][28]"
                data-label="month"
                aria-required="false"
              >
                <option value="1">Jan</option>
                <option value="2">Feb</option>
                <option value="3">Mar</option>
                <option value="4">Apr</option>
                <option value="5">May</option>
                <option value="6">Jun</option>
                <option value="7">Jul</option>
                <option value="8">Aug</option>
                <option value="9">Sep</option>
                <option value="10">Oct</option>
                <option value="11">Nov</option>
                <option value="12">Dec</option>
              </select>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between opacity-0">
                <label htmlFor="">Date of Birth</label>
                <small>Required</small>
              </div>
              <select
                className="form-select"
                name="FormFieldDay[2][28]"
                data-label="day"
                aria-required="false"
              >
                {[...Array(31)].map((x, i) => (
                  <option value={i} key={i}>{`${i + 1}st`}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between opacity-0">
                <label htmlFor="">Date of Birth</label>
                <small>Required</small>
              </div>
              <select
                className="form-select"
                name="FormFieldYear[2][28]"
                data-label="year"
                aria-required="false"
              >
                {[...Array(130)].map((x, i) => (
                  <option value={i + 1923} key={i}>
                    {i + 1923}
                  </option>
                ))}
              </select>
            </div>
          </div> */}
        </div>
        <div className="mt-3">
          <Button
            className="btn btn-yellow inline-block mt-5 px-6 py-3"
            variant="secondary"
            onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
          >
            Create Account
          </Button>
          <Link
            href="#"
            className="underline ml-5"
            onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          >
            Do you have already an account?
          </Link>
        </div>
      </form>
    </>
  )
}

export default Register
