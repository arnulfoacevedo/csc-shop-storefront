import LinkBar from "@modules/account/LinkBar";
import RouteBar from "@modules/account/RouteBar";
export default  function YourOrder() {
  return (
    <>
      <RouteBar routeName="Your Orders" />
      <div className="container lg:max-w-26 mx-auto mt-12 px-5">
        <LinkBar routeName="Order" />
        <div className="flex items-center bg-[#dfdfdf] rounded-md space-x-4 mt-10 py-3 px-4">
          <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z">
            </path>
          </svg>
          <p className="text-sm">
            You have not placed any orders with us. When you do, their status will appear on this page.
          </p>
        </div>
      </div>
    </>
  );
}
