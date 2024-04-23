'use client';

import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <div className="container mx-auto mt-5 px-5">
        <div className="hidden md:flex items-center text-xss space-x-2">
          <Link href="/" className="underline">Home</Link>
          <span>/</span>
          <Link href="./support.html" className="underline">Support</Link>
          <span>/</span>
          <p>Privacy Policy</p>
        </div>
      </div>
      <div className="container lg:max-w-26 mx-auto text-sm space-y-5 md:space-y-8 lg:space-y-16 mt-12 px-5">
        <h1 className="text-center text-3xl">Privacy Policy</h1>
        <div className="space-y-4">
          <h2 className="text-2xl">Calgary Shooting Centre Ltd. does not sell personal information.</h2>
          <p>
            This Privacy Policy governs the manner in which Calgary Shooting Centre Ltd. collects, uses, maintains and
            discloses information collected from users (each, a User) of the https://store.theshootingcentre.com/
            website (Site). This privacy policy applies to the Site and all products and services offered by Calgary
            Shooting Centre Ltd.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl">Personal identification information</h2>
          <p>
            We may collect personal identification information from Users in a variety of ways, including, but not limited
            to, when Users visit our site, register on the siteplace an order, subscribe to the newsletter and in
            connection with other activities, services, features or resources we make available on our Site. Users may be
            asked for, as appropriate, name, email address, mailing address, phone number, credit card information, PAL
            information, date of birth, city of birth, shooting club/range information.
            <br /> <br />
            Users may, however, visit our Site anonymously.
            <br /> <br />
            We will collect personal identification information from Users only if they voluntarily submit such
            information to us. Users can always refuse to supply personal identification information, except that it may
            prevent them from engaging in certain Site related activities.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl">Non-personal identification information</h2>
          <p>
            We may collect non-personal identification information about Users whenever they interact with our Site.
            Non-personal identification information may include the browser name, the type of computer and technical
            information about Users means of connection to our Site, such as the operating system and the Internet service
            providers utilized and other similar information.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl">Web browser cookies</h2>
          <p>
            Our Site may use cookies to enhance User experience. User&apos;s web browser places cookies on their hard drive
            for record-keeping purposes and sometimes to track information about them. User may choose to set their web
            browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of
            the Site may not function properly.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl">How we use collected information</h2>
          <p>
            Calgary Shooting Centre Ltd. collects and uses Users personal information for the following purposes:
          </p>
          <ul className="list-disc pl-5">
            <li>To improve customer service - Your information helps us to more effectively respond to your customer
              service requests and support needs.</li>
            <li>To personalize user experience - We may use information in the aggregate to understand how our Users as a
              group use the services and resources provided on our Site.</li>
            <li>To improve our Site - We continually strive to improve our website offerings based on the information and
              feedback we receive from you.</li>
            <li>To process transactions - We may use the information Users provide about themselves when placing an order
              only to provide service to that order. We do not share this information with outside parties except to the
              extent necessary to provide the service.</li>
            <li>To administer a content, promotion, survey or other Site feature - To send Users information they agreed
              to receive about topics we think will be of interest to them.</li>
            <li>To send periodic emails.</li>

          </ul>
          <p>
            The email address Users provide for order processing, will only be used to send them information and updates
            pertaining to their order. It may also be used to respond to their inquiries, and/or other requests or
            questions. If User decides to opt-in to our mailing list, they will receive emails that may include company
            news, updates, related product or service information, etc. If at any time the User would like to unsubscribe
            from receiving future emails, we include unsubscribe instructions at the bottom of each email or User may
            contact us via our Site.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl">How we protect your information</h2>
          <p>
            We adopt appropriate data collection, storage and processing practices and security measures to protect
            against unauthorized access, alteration, disclosure or destruction of your personal information, username,
            password, transaction information and data stored on our Site.
            <br /> <br />
            Sensitive and private data exchange between the Site and its Users happens over a SSL secured communication
            channel and is encrypted and protected with digital signatures.
          </p>


        </div>
        <div className="space-y-4">
          <h2 className="text-2xl">Changes to this privacy policy</h2>
          <p>
            Calgary Shooting Centre Ltd. has the discretion to update this privacy policy at any time. We encourage Users
            to frequently check this page for any changes to stay informed about how we are helping to protect the
            personal information we collect. You acknowledge and agree that it is your responsibility to review this
            privacy policy periodically and become aware of modifications.
          </p>

        </div>
        <div className="space-y-4">
          <h2 className="text-2xl">Your acceptance of these terms </h2>
          <p>
            By using this Site, you signify your acceptance of this policy and terms of service. If you do not agree to
            this policy, please do not use our Site. Your continued use of the Site following the posting of changes to
            this policy will be deemed your acceptance of those changes..
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl">Contacting us</h2>
          <p>
            If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this
            site, please contact us at:<br /><br />Calgary Shooting Centre Ltd.<br />Bay 4, 7130 Fisher Road SE<br />Calgary, AB
            T2H 0W3
          </p>
          <p>
            <Link className="link-tansition block underline" href="tel:+14034511777">+1 (403) 451-1777</Link>
            <Link className="link-tansition block underline"
              href="mailto:info@theshootingcentre.com">info@theshootingcentre.com</Link>
          </p>
        </div>
      </div>
    </>
  );
}
