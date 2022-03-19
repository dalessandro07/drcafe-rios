import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from './NavBar';

const Header = () => {
    const { pathname } = useLocation();

    return (
        <header className={`${pathname !== '/' ? '' : 'absolute inset-x-0'} flex-wrap sm:flex-nowrap flex items-center justify-between`}>
            <NavBar url={pathname} />
        </header>
    );
};

export default Header;
