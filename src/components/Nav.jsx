import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const Nav = ({ url }) => {
    return (
        <nav className={`${url !== '/' ? 'mt-4' : ''} flex flex-wrap w-full mx-8 items-center justify-between`}>
            <ul className="flex justify-around">
                <Link to="/ofertas">
                    <li className="px-4">
                        <b className={`${url !== '/' ? '[color:#4a3933]' : 'text-gray-100'} font-bold`}>Ofertas</b>
                    </li>
                </Link>
                <Link to="/productos/cafes">
                    <li className="px-4">
                        <b className={`${url !== '/' ? '[color:#4a3933]' : 'text-gray-100'} font-bold`}>Cafés</b>
                    </li>
                </Link>
                <Link to="/productos/chocolates">
                    <li className="px-4">
                        <b className={`${url !== '/' ? '[color:#4a3933]' : 'text-gray-100'} font-bold`}>Chocolates</b>
                    </li>
                </Link>
            </ul>
            <div className="flex justify-end">
                <Link to="/contacto">
                    <b className="[background-color:#4a3933] [color:#ebecee] rounded-lg px-4 mx-8 p-1 text-gray-100 font-bold">Contacto</b>
                </Link>
                <Link to="/carrito">
                    <CartWidget url={url} />
                </Link>
            </div>
        </nav>
    );
};

export default Nav;
