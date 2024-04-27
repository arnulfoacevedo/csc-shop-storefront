import { useFormState } from "react-dom"

import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import { logCustomerIn } from "@modules/account/actions"
import Link from "next/link"
import { Button } from "@medusajs/ui"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Login = ({ setCurrentView }: Props) => {
  const [message, formAction] = useFormState(logCustomerIn, null)

  return (
    <>
      <div className="container mx-auto mt-5 px-5">
        <div className="hidden md:flex items-center text-xss space-x-2">
          <Link href="/" className="underline">Home</Link>
          <span>/</span>
          <p>Login</p>
        </div>
      </div>

      <div className="container lg:max-w-26 mx-auto px-5 mt-5">
        <h1 className="text-center text-[28px]/none pb-5">Sign in</h1>
        <div className={"bg-[#ffdddd] py-2 px-5" + (message ? "" : " hidden")}>
          <p>
            <span>Your email address or password is incorrect. Please try again. If you have forgotten your sign in details, just click the &quot;Forgot your password?&quot; link below.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-5">
          <div className="text-sm bg-white border border-brand-gray-200 p-5">
            <h2 className="text-xl/snug">New Customer?</h2>
            <p className="mt-3">
              Create an account with us and you will be able to:
            </p>
            <ul className="list-disc mt-5 pl-5">
              <li>Check out faster</li>
              <li>Save multiple shipping addresses</li>
              <li>Access your order history</li>
              <li>Track new orders</li>
              <li>Save items to your lists</li>
            </ul>   
            <Button 
                className="btn btn-yellow inline-block mt-5 px-6 py-3"
                variant="secondary"
                onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
              >Create Account</Button>
          </div>
          <form action={formAction}
            className="contact order-first md:order-none md:col-span-2 bg-brand-gray-200 border border-brand-gray-200 space-y-7 p-5">
            <p className="text-xl text-center">Sign in</p>
            <div className="space-y-2">
              <label>Email Address:</label>
              <input type="text" name="email" />
            </div>
            <div className="space-y-2">
              <label>Password:</label>
              <input type="password" name="password" />
            </div>
            <div className="flex items-start justify-between">
              <Link className="underline" href="/forgot">
                Forgot your password?
              </Link>
              <Button 
                className="btn btn-yellow py-3 px-5"
                variant="secondary"
              >Sign in</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
