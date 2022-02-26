import React from "react";
import CartWidget from "./CartWidget";
import Nav from "./Nav";

const Header = ({ logo }) => {
    return (
        <header id="layout-header">
            <img className="header__logo" src={logo} alt="logo" />
            <Nav />
            <CartWidget />
        </header>
    );
};

export default Header;
