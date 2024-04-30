import { ProductCategory } from "@medusajs/medusa"
import Link from "next/link"
import React from "react"
import { NavigationItem } from "types/global"

type Props = {
  categoryStack: NavigationItem[]
}

const Navigation = ({
  categoryStack
}: Props) => {

  return (
    <>
      <div className="hidden md:flex items-center text-xss space-x-2">
        <Link href="/" className="underline">Home</Link>
        <span>/</span>
        {
          categoryStack && categoryStack.map((item, i) => (
            i != (categoryStack.length - 1) ?
              <React.Fragment key={item.id}>
                <Link href={`/store/${item.handle}`} className="underline">{item.name}</Link>
                <span>/</span>
              </React.Fragment> :
              <p key={item.id}>{item.name}</p>
          ))
        }
      </div>
    </>
  )
}

export default Navigation
