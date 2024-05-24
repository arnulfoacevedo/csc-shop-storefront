"use client"

import { useFormState } from "react-dom"

import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import { signUp } from "@modules/account/actions"
import Link from "next/link"
import { Button } from "@medusajs/ui"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Register = ({ setCurrentView }: Props) => {
  const [message, formAction] = useFormState(signUp, null)

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
            <input type="text" name="Company" />
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
              <label htmlFor="add-line-1"> Address Line 1</label>
              <small>Required</small>
            </div>
            <input type="text" name="add-line-1" required />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="add-line-2"> Address Line 2</label>
              <small>Required</small>
            </div>
            <input type="text" name="add-line-2" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="city-town">City / Town</label>
              <small>Required</small>
            </div>
            <input type="text" name="city-town" required />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="pro">Province</label>
              <small>Required</small>
            </div>
            <select
              className="form-select"
              aria-required="true"
              name="pro"
              data-label="Province"
              data-field-type="State"
              required
            >
              <option value="">Choose a Province</option>
              <option value="Alberta">Alberta</option>
              <option value="British Columbia">British Columbia</option>
              <option value="Manitoba">Manitoba</option>
              <option value="New Brunswick">New Brunswick</option>
              <option value="Newfoundland and Labrador">
                Newfoundland and Labrador
              </option>
              <option value="Northwest Territories">
                Northwest Territories
              </option>
              <option value="Nova Scotia">Nova Scotia</option>
              <option value="Nunavut">Nunavut</option>
              <option value="Ontario">Ontario</option>
              <option value="Prince Edward Island">Prince Edward Island</option>
              <option value="Quebec">Quebec</option>
              <option value="Saskatchewan">Saskatchewan</option>
              <option value="Yukon Territory">Yukon Territory</option>
            </select>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="Postal">Postal Code</label>
              <small>Required</small>
            </div>
            <input type="text" name="Postal" required />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="Country">Country</label>
              <small>Required</small>
            </div>
            <select
              className="form-select"
              aria-required="true"
              name="Country"
              data-label="Province"
              data-field-type="State"
              required
            >
              <option value="">Choose a Province</option>
              <option value="Alberta">Alberta</option>
              <option value="British Columbia">British Columbia</option>
              <option value="Manitoba">Manitoba</option>
              <option value="New Brunswick">New Brunswick</option>
              <option value="Newfoundland and Labrador">
                Newfoundland and Labrador
              </option>
              <option value="Northwest Territories">
                Northwest Territories
              </option>
              <option value="Nova Scotia">Nova Scotia</option>
              <option value="Nunavut">Nunavut</option>
              <option value="Ontario">Ontario</option>
              <option value="Prince Edward Island">Prince Edward Island</option>
              <option value="Quebec">Quebec</option>
              <option value="Saskatchewan">Saskatchewan</option>
              <option value="Yukon Territory">Yukon Territory</option>
            </select>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="number">Phone Number</label>
              <small>Required</small>
            </div>
            <input type="text" name="number" required />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="pal">PAL Number - First 8 Digits</label>
              <small>Required</small>
            </div>
            <input type="text" name="pal" />
          </div>

          <div className="grid lg:grid-cols-3 gap-5">
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
          </div>

          {/* <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label>Place of Birth</label>
              <small>Required</small>
            </div>
            <input type="text" name="place" />
          </div> */}

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label>Gun Club</label>
            </div>
            <input type="text" name="gun" />
          </div>

          <div className="space-y-2">
            <p className="text-sm font-semibold">Gun Club</p>
            <div className="flex items-start sm:items-center space-x-2.5">
              <input
                className="!w-3.5 !h-3.5 focus:ring-0 rounded-sm"
                type="checkbox"
                name="check"
              />
              <label className="!font-normal">
                I would like to receive updates and offers.
              </label>
            </div>
          </div>
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
