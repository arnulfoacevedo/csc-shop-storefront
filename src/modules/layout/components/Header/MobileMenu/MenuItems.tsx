'use client';

import Link from "next/link";
import { MenuItem } from "types/global";
import { useEffect, useState } from "react";
import React from "react";
import { ToggleDown } from "./ToggleDown";

interface MenuItemsProps {
    items: MenuItem;
    depthLevel: number;
}

export const MenuItems = ({ items, depthLevel }: MenuItemsProps) => {
    const [dropdown, setDropdown] = useState(false);
    const ref = React.useRef<HTMLDivElement>(null);
    const toggleRef = React.useRef<HTMLButtonElement>(null);
    const togglexRef = React.useRef<HTMLButtonElement>(null);

    // useEffect(() => {
    //     const handler = (event: any) => {
    //         if (dropdown && ref.current && !ref.current.contains(event.target)) {
    //             setDropdown(false);
    //         }
    //     };
    //     document.addEventListener("mousedown", handler);
    //     return () => {
    //         // Cleanup the event listener
    //         document.removeEventListener("mousedown", handler);
    //     };
    // }, [dropdown]);

    const onToggleDown = () => {
        toggleRef.current?.nextElementSibling?.classList.toggle('hidden')
    };
    const onTogglexDown = () => {
        togglexRef.current?.parentElement?.classList.toggle('hidden')
    }

    return (
        <div
            ref={ref}
        >
            {items.submenu ? (
                <>
                    <button type="button" className="w-full mobileToggle flex items-center justify-between" onClick={onToggleDown} ref={toggleRef}>
                        <span>{items.title}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                            stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                    <div className={depthLevel > 0 ? "absolute hidden inset-x-0 top-0 h-full bg-brand-gray-100 z-10" : "absolute hidden inset-x-5 top-5 h-full bg-brand-gray-100 z-10 overflow-auto"}>
                        <button type="button"
                            className="mobileToggleX w-full flex items-center text-brand-yellow-100 border-b border-brand-gray-150 pb-4" ref={togglexRef} onClick={onTogglexDown}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                            <span>{items.title}</span>
                        </button>
                        
                        <ToggleDown
                            depthLevel={depthLevel}
                            submenus={items.submenu}
                            dropdown={dropdown}
                        />
                    </div>
                </>
    ) : (
        <Link href="#">{items.title}</Link>
    )}
        </div>
    )
}