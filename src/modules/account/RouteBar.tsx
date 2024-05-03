'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'
import React from "react";

export default function RouteBar() {
  const paths = usePathname().split('/');

  // console.log(paths);
  
  const secondRoute = paths[2];
  const currentRoute = paths.pop() || '';
  const title = currentRoute[0].toUpperCase() + currentRoute.slice(1);
  
  const getFirstUpperString = (str: string) => {
    return str[0].toUpperCase() + str.slice(1);
  }

  return (
    <div className="container mx-auto mt-5 px-5">
      <div className="hidden md:flex items-center text-xss space-x-2">
        <Link href="/" className="underline">Home</Link>
        <span>/</span>
        {/* <Link href="/account/orders" className="underline">Your Account</Link>
        <span>/</span> */}
        {
            paths.map((path, i) => {
              if (i > 1) {                
                return (
                <React.Fragment key={i}>
                  {<Link href={`/${secondRoute}/${path == 'account' ? 'orders' : path == 'store' ? 'all' : path}`} className="underline">{getFirstUpperString(path)}</Link>}
                  <span>/</span>
                </React.Fragment>
                )
              }
            })
        }
        <p>{title}</p>
      </div>
    </div>
  )
}