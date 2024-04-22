import { MenuItem } from "types/global";
import { MenuItems } from "./MenuItems";

interface DropdownProps {
    submenus:  MenuItem[];
    dropdown : boolean;
    depthLevel : number;
}

export const DropDown = ({ submenus, dropdown, depthLevel }: DropdownProps) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

  return (
    <div className={`w-60 absolute left-auto bg-brand-gray-200 space-y-2.5 p-5 z-10 dropdown ${dropdownClass} ${dropdown ? "show" : ""} ${depthLevel > 1 ? "top-0" : "top-12"}`}>
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </div>
  );
};
