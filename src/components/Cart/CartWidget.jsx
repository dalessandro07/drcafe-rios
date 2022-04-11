import React from 'react';
import { useContext, useState } from 'react';
import { contexto } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { XIcon } from '@heroicons/react/outline';

import { motion } from 'framer-motion';

const CartWidget = ({ url }) => {
    const { carrito, cantidadTotal, removeItem, total } = useContext(contexto);
    const [previewCart, setPreviewCart] = useState(false);

    return (
        <div onMouseEnter={() => setPreviewCart(true)} className="flex items-center mx-4 px-1 mb-5 pt-5 relative" id="cart-container">
            <Link onClick={() => setPreviewCart(false)} to="/carrito">
                <span className="absolute top-0 right-0 text-red-100 bg-red-500 rounded-full px-[6px] text-sm font-bold">{cantidadTotal}</span>

                <span className={`${url !== '/' ? '[color:#4a3933]' : 'text-gray-100'} material-icons cart-icon`}>shopping_cart</span>
            </Link>

            <motion.div
                animate={{
                    transition: {
                        type: 'spring',
                        stiffness: 300,
                        damping: 40,
                    },
                    opacity: [0, 1],
                }}
                layout
                className={'hidden xs:flex flex-col absolute top-[120%] right-0 rounded-md shadow-2xl bg-[#fcfcfc] w-80 sm:w-96 min-h-80 z-50 overflow-y-auto max-h-[80vh]'}
                style={{
                    display: previewCart ? 'flex' : 'none',
                }}>
                <div className="flex justify-between p-4 mb-3 bg-indigo-50">
                    <Link onClick={() => setPreviewCart(false)} to="/carrito">
                        <h1 className="text-indigo-900 text-xl">
                            Carrito<span className="text-red-500">{cantidadTotal !== 0 ? (cantidadTotal > 1 ? `, ${cantidadTotal} unidades` : `, ${cantidadTotal} unidad`) : null}</span>{' '}
                        </h1>
                    </Link>

                    <button className="text-red-500" onClick={() => setPreviewCart(false)}>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                <div className="flex flex-col grow justify-center items-center">
                    {carrito.length > 0 ? (
                        carrito.map((item) => {
                            return (
                                <li key={item.producto.id} className="flex p-6 w-full border-b-[1px] border-indigo-200">
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
                        <Link onClick={() => setPreviewCart(false)} to="/productos">
                            <h2 className="text-xl text-indigo-900 text-center font-bold underline p-8">¡El carrito está vacío!</h2>
                        </Link>
                    )}
                    <div className="flex w-full justify-between bg-indigo-50 p-3">
                        <h4 className="text-indigo-900">Subtotal:</h4>
                        <b className="text-indigo-900">S/ {parseFloat(total).toFixed(2)}</b>
                    </div>

                    <div className="bg-indigo-50 w-full border-t-[1px] border-indigo-200">
                        <Link onClick={() => setPreviewCart(false)} to="/carrito" className="flex justify-center items-center p-3">
                            <button className="text-indigo-900 font-bold hover:underline">Ver carrito</button>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default CartWidget;
