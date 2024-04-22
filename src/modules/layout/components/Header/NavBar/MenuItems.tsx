'use client';

import Link from "next/link";
import { MenuItem } from "types/global";
import { useEffect, useState } from "react";
import React from "react";
import { DropDown } from "./DropDown";

interface MenuItemsProps {
    items: MenuItem;
    depthLevel: number;
}

export const MenuItems = ({ items, depthLevel }: MenuItemsProps) => {
    const [dropdown, setDropdown] = useState(false);
    let ref = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (event: any) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handler);
        };
    }, [dropdown]);

    const toggleDropdown = () => {
        setDropdown((prev) => !prev);
    };
    
    const closeDropdown = () => {
        dropdown && setDropdown(false);
    };

    const onMouseDown = () => {
        setDropdown(true);
    };

    return (
        <div
            className={depthLevel > 0 ? "w-64" : "relative z-10"}
            ref={ref}
            onClick={onMouseDown}>
            {items.submenu ? (
                <>
                    <button
                        className={depthLevel > 0 ? "dropdown-button border-none w-full justify-between" : "dropdown-button py-3"}
                        type="button"
                        onClick={() => toggleDropdown()}
                    >
                        <span className="pointer-events-none">{items.title}</span>
                        {depthLevel > 0 ?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg> :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5"
                                stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        }
                    </button>
                    <DropDown
                        depthLevel={depthLevel}
                        submenus={items.submenu}
                        dropdown={dropdown}
                    />
                </>
            ) : (
                <Link href="#">{items.title}</Link>
            )}
        </div>
    )
}