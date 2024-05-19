import Link from "next/link";
import { MenuItems } from "./MenuItems";
import { MenuItem } from "types/global";

interface Props {
    menuData: MenuItem[];
}
const NavBar = async ({menuData}: Props) => {
    const depthLevel = 0;

    return (
        <div className="bg-brand-gray-200 hidden md:block">
            <div className="desktop-nav container mx-auto flex items-start xl:items-center justify-between font-bold gap-3 xl:space-x-5">
                <div className="header-link flex items-start xl:items-center flex-wrap gap-x-3 xl:gap-x-5 px-5">
                    {menuData.map((menu, index) => {
                        return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
                    })}
                </div>
                <div className="flex xl:items-center justify-end gap-3 xl:gap-5 py-3 xl:py-0 px-5">
                    <a className="whitespace-nowrap cursor-pointer hover:text-brand-yellow-100 transition-colors ease-linear" href="tel:+1 (403) 451-1777">
                        Need Help? +1 (403) 451-1777
                    </a>
                    {/* <Link className="whitespace-nowrap hover:text-brand-yellow-100 transition-colors ease-linear" href="/account/list">Your Lists</Link> */}
                </div>
            </div>
        </div>
    )
}

export default NavBar;