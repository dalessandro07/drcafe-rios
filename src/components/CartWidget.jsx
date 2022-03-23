import React from 'react';
import { useContext, useState } from 'react';
import { contexto } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { XIcon } from '@heroicons/react/outline';

const CartWidget = ({ url }) => {
    const { carrito, cantidadTotal, removeItem, total } = useContext(contexto);
    const [previewCart, setPreviewCart] = useState('hidden');

    const handleViewPC = (param) => {
        param ? setPreviewCart('flex') : setPreviewCart('hidden');
    };

    return (
        <div onMouseEnter={() => handleViewPC(true)} className="flex items-center mx-4 px-1 mb-5 pt-5 relative" id="cart-container">
            <Link onClick={() => handleViewPC(false)} to="/carrito">
                <span className="absolute top-0 right-0 text-red-100 bg-red-500 rounded-full px-[6px] text-sm font-bold">{cantidadTotal}</span>

                <span className={`${url !== '/' ? '[color:#4a3933]' : 'text-gray-100'} material-icons cart-icon`}>shopping_cart</span>
            </Link>

            <div className={'flex flex-col absolute top-[120%] right-[-1.625rem] sm:right-[50%] rounded-md shadow-lg bg-white min-w-80 w-96 min-h-80 p-4 z-50 overflow-y-auto max-h-[80vh] ' + previewCart}>
                <div className="flex justify-between mt-2 pb-3 mb-3 border-b-2 border-red-200">
                    <Link onClick={() => handleViewPC(false)} to="/carrito">
                        <h1 className="text-indigo-900 text-xl">
                            Carrito<span className="text-red-500">{cantidadTotal !== 0 ? (cantidadTotal > 1 ? `, ${cantidadTotal} unidades` : `, ${cantidadTotal} unidad`) : null}</span>{' '}
                        </h1>
                    </Link>
                    <button className="text-red-500" onClick={() => handleViewPC(false)}>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="flex flex-col grow justify-center items-center">
                    {carrito.length > 0 ? (
                        carrito.map((item) => {
                            return (
                                <li key={item.producto.id} className="flex py-6 w-full border-b-[1px] border-red-200">
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <Link to={`/productos/${item.producto.categoria}/${item.producto.id}`}>
                                            <img src={item.producto.img} alt={'img'} className="h-full w-full object-cover object-center" />
                                        </Link>
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                        <div>
                                            <div className="flex justify-between text-base font-medium text-indigo-900">
                                                <h3 className="w-[12ch]">
                                                    <Link to="/carrito"> {item.producto.nombre} </Link>
                                                </h3>
                                                <p className="">S/ {item.producto.precio}</p>
                                            </div>
                                            <p className="mt-1 text-sm text-indigo-900">{item.cantidad} unidades</p>
                                        </div>
                                        <div className="flex flex-1 items-end justify-between text-sm">
                                            <p className="text-indigo-900">Stock: {item.producto.stock}</p>

                                            <div className="flex">
                                                <button onClick={() => removeItem(item.producto.id)} type="button" className="font-medium text-red-500 hover:text-red-400">
                                                    Eliminar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            );
                        })
                    ) : (
                        <Link onClick={() => handleViewPC(false)} to="/productos">
                            <h2 className="text-xl text-indigo-900 text-center font-bold underline p-8">¡El carrito está vacío!</h2>
                        </Link>
                    )}
                    {/* TOTAL */}
                    <div className="flex w-full justify-around border-t-2 border-red-200 pt-2">
                        <h4 className="text-indigo-900">Subtotal:</h4>
                        <b className="text-indigo-900">S/ {parseFloat(total).toFixed(2)}</b>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartWidget;
