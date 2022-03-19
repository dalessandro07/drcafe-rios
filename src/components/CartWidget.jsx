import React from 'react';
import { useContext } from 'react';
import { contexto } from '../context/CartContext';

const CartWidget = ({ url }) => {
    const { carrito } = useContext(contexto);

    return (
        <div className="flex items-center mx-4 px-1 py-5 relative" id="cart-container">
            <span className="absolute top-0 right-0 text-red-100 bg-red-500 rounded-full px-[6px] text-sm font-bold">{carrito.length}</span>

            <span className={`${url !== '/' ? '[color:#4a3933]' : 'text-gray-100'} material-icons cart-icon`}>shopping_cart</span>
        </div>
    );
};

export default CartWidget;
