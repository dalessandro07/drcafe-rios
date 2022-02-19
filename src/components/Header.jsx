import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header className="navbar">
            <h1>DRCAFE</h1>
            <ul>
                <li>
                    <a href="../../public/index.html">Ofertas</a>
                </li>
                <li>
                    <a href="../../public/index.html">Productos</a>
                </li>
                <li>
                    <a href="../../public/index.html">Nosotros</a>
                </li>
                <li>
                    <a className="contacto" href="../../public/index.html">
                        Contacto
                    </a>
                </li>
            </ul>
        </header>
    );
};

export default Header;
