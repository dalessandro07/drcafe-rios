import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Nav from './Nav';

const Header = () => {
    const { pathname } = useLocation();

    return (
        <header className={`${pathname !== '/' ? '' : 'absolute inset-x-0'} flex-wrap sm:flex-nowrap flex items-center justify-between`}>
            <Link to="/">
                <img className={`${pathname !== '/' ? 'mt-4 mx-4 w-20' : 'text-gray-100'} w-28`} src={pathname !== '/' ? '/assets/images/logo-1-bg.png' : '/assets/images/logo-white.png'} alt="logo" />
            </Link>
            <Nav url={pathname} />
        </header>
    );
};

export default Header;
