'use client';

import Link from "next/link";

export default function Resources() {
  return (
    <>
      <div className="container mx-auto mt-5 px-5">
        <div className="hidden md:flex items-center text-xss space-x-2">
          <Link href="/" className="underline">Home</Link>
          <span>/</span>
          <Link href="./support.html" className="underline">Support</Link>
          <span>/</span>
          <p> Resources</p>
        </div>
      </div>
      <div className="container lg:max-w-26 mx-auto text-sm space-y-5 md:space-y-8 lg:space-y-16 mt-12 px-5">
        <h1 className="text-center text-3xl"> Resources</h1>
        <ul className="list-disc pl-5">
          <li><Link className="link-tansition underline" href="https://aheia.com/" target="_blank">Alberta Hunters Education
            Instructors Association (AHEIA)</Link></li>
          <li><Link className="link-tansition underline"
            href="https://open.alberta.ca/publications/body-armour-control-act-policy-and-procedures-manual"
            target="_blank">Alberta Body Armour Control Act</Link></li>
          <li><Link className="link-tansition underline" href="https://www.alberta.ca/report-poacher.aspx"
            target="_blank">Alberta Report a Poacher</Link></li>
          <li><Link className="link-tansition underline" href="https://www.albertarelm.com" target="_blank">AlbertaRELM: Hunting
            &amp; Fishing Licenses</Link></li>
          <li><Link className="link-tansition underline" href="https://firearmrights.ca/" target="_blank">Canadian Coalition for
            Firearm Rights (CCFR)</Link></li>
          <li><Link className="link-tansition underline" href="https://www.rcmp-grc.gc.ca/en/firearms" target="_blank">RCMP
            Firearms</Link></li>
          <li><Link className="link-tansition underline" href="https://store.theshootingcentre.com/cfo">How To Update Your
            Personal Information With The CFO</Link></li>
        </ul>
      </div>

    </>
  );
}
