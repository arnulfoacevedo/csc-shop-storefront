import Link from "next/link";

interface RouteBarProps {
  routeName: string
}

export default function RouteBar({ routeName }: RouteBarProps) {
  return (
    <div className="container mx-auto mt-5 px-5">
      <div className="hidden md:flex items-center text-xss space-x-2">
        <Link href="/" className="underline">Home</Link>
        <span>/</span>
        <Link href="/yourorder" className="underline">Your Account</Link>
        <span>/</span>
        <p>{routeName}</p>
      </div>
    </div>
  )
}