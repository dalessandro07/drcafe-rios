import React from "react";

const Nav = () => {
    return (
        <nav className="navbar">
            <ul className="navbar__menu">
                <li className="navbar__item">
                    <a className="navbar__link" href="../../public/index.html">
                        Ofertas
                    </a>
                </li>
                <li className="navbar__item">
                    <a className="navbar__link" href="../../public/index.html">
                        Productos
                    </a>
                </li>
                <li className="navbar__item">
                    <a className="navbar__link" href="../../public/index.html">
                        Nosotros
                    </a>
                </li>
                <li className="navbar__item--contacto">
                    <a className="navbar__link--contacto" href="../../public/index.html">
                        Contacto
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
