import React from "react";
import CartWidget from "./CartWidget";
import Nav from "./Nav";
import logo from "../assets/images/logo-white.png";

const Header = () => {
    return (
        <header id="layout-header">
            <img className="header__logo" src={logo} alt="logo" />
            <Nav />
            <CartWidget />
        </header>
    );
};

export default Header;
