import React from 'react';

const CartWidget = ({ url }) => {
    return (
        <div className="flex items-center mx-4" id="cart-container">
            <span className={`${url !== '/' ? '[color:#4a3933]' : 'text-gray-100'} material-icons cart-icon`}>shopping_cart</span>
        </div>
    );
};

export default CartWidget;
