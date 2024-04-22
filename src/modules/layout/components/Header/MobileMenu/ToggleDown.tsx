import { MenuItem } from "types/global";
import { MenuItems } from "./MenuItems";

interface DropdownProps {
    submenus:  MenuItem[];
    dropdown : boolean;
    depthLevel : number;
}

export const ToggleDown = ({ submenus, dropdown, depthLevel }: DropdownProps) => {
  depthLevel = depthLevel + 1;
  // const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

  return (
    <div className={`mt-5 flex flex-col space-y-2.5 ${depthLevel > 1 ? "overflow-auto" : ""}`}>
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </div>
  );
};
