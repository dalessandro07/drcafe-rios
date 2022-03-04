import React from 'react';
import Nav from './Nav';

const Header = () => {
    return (
        <header className="flex items-center justify-between">
            <img className="w-28" src="/assets/images/logo-white.png" alt="logo" />
            <Nav />
        </header>
    );
};

export default Header;
