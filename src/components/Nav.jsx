import React from 'react';
import CartWidget from './CartWidget';

const Nav = () => {
    return (
        <nav className="flex flex-wrap w-full mx-8 items-center justify-between">
            <ul className="flex justify-around">
                <li className="px-4">
                    <a className="text-gray-100 font-bold" href="/">
                        Ofertas
                    </a>
                </li>
                <li className="px-4">
                    <a className="text-gray-100 font-bold" href="/">
                        Productos
                    </a>
                </li>
                <li className="px-4">
                    <a className="text-gray-100 font-bold" href="/">
                        Nosotros
                    </a>
                </li>
            </ul>
            <div className="flex justify-end">
                <a className="[background-color:#ebecee] [color:#4a3933] rounded-lg font-bold px-4 mx-8 p-1 text-gray-100 font-bold" href="/">
                    Contacto
                </a>
                <CartWidget />
            </div>
        </nav>
    );
};

export default Nav;
