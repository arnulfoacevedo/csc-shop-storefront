'use client';

import NavBar from './NavBar';
import SearchBar from './SearchBar';
import MobileMenu from './MobileMenu';
import { useState } from 'react';

const Header = () => {
    const [togglemobile, setTogglemobile] = useState(false);

    const toggleMobileMenu = () => {
        setTogglemobile(togglemobile ? false : true);
    }

    return (
        <header className="relative">
            <MobileMenu isMobile={togglemobile} />
            <SearchBar toggleMobileMenu={toggleMobileMenu} />
            <NavBar />
        </header>

    );
};

export default Header;
