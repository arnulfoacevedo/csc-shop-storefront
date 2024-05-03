import LinkBar from "@modules/account/LinkBar";
import RouteBar from "@modules/account/RouteBar";

export default function YourList() {
  return (
    <>
        <div className="text-sm space-y-5 mt-10">
          <div className="grid grid-cols-3 font-semibold bg-white border border-brand-gray-200">
            <div className="py-5 pl-5">
              <p>List Name</p>
            </div>
            <div className="py-5">
              <p>Items</p>
            </div>
            <div className="py-5 pr-5">
              <p className="text-right">Action</p>
            </div>
          </div>
          <div className="flex items-center bg-[#dfdfdf] rounded-md space-x-4 py-3 px-4">
            <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z">
              </path>
            </svg>
            <p>You have no lists, add one now.</p>
          </div>
          <button type="button" className="modulBtn btn btn-yellow w-full md:w-auto ml-auto px-8">New List</button>
        </div>
    </>
  );
}
