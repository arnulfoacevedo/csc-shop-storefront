import { MenuItem } from "types/global";
import { MenuItems } from "./MenuItems";

interface Props {
    // isMobile: boolean
    menuData: MenuItem[];
}
const MobileMenu = async ({menuData}: Props) => {

    const depthLevel = 0;

    return (
        <div className={"mobileMenu min-h-screen absolute left-0 bottom-0 w-full top-36 z-30"+ (false ? "" : " hidden")}>
            <div className="relative min-h-screen font-bold text-white bg-brand-gray-100 space-y-3.5 p-5 overflow-hidden">
                {menuData.map((menu, index) => {
                    return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
                })}
            </div>
        </div>
    )
}

export default MobileMenu;