import { useContext } from 'react';
import { contexto } from '../../context/CartContext';
import { CheckIcon, ClockIcon, XIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

const Carrito = () => {
    const { carrito, removeItem, clearCart, total, increaseQuantity, decreaseQuantity } = useContext(contexto);

    return (
        <div className="mx-auto mt-6 py-5 w-full xs:w-[90%] sm:px-12">
            <div className="flex flex-col items-center">
                <div className="flex justify-between w-full mb-4">
                    <h2 className="text-3xl px-4 text-gray-700 font-semibold">Carrito de compras</h2>
                    <button onClick={clearCart}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>

                <div className="mt-5 w-full border-t border-b border-gray-200">
                    <ul>
                        {carrito.length > 0 ? (
                            carrito.map(({ producto, cantidad }, index) => (
                                <li key={producto.id} className={`p-4 flex flex-col xs:flex-row ${index !== 0 && 'border-t border-gray-200'}`}>
                                    <div className="flex justify-start items-center flex-shrink-0 aspect-w-5 aspect-h-1 w-full xs:w-1/4 sm:w-1/5 xs:justify-center mb-5 xs:mb-0">
                                        <Link className="flex justify-center h-full" to={`/productos/${producto.categoria}/${producto.id}`}>
                                            <img src={producto.img} alt={producto.id} className="w-24 h-[172px] xs:h-full object-cover rounded-md" />
                                        </Link>
                                    </div>

                                    <div className="sm:ml-5 w-full flex justify-between">
                                        <div className="flex flex-col w-1/2 relative">
                                            <div className="flex justify-between space-x-5">
                                                <p className="text-base text-gray-700 font-semibold hover:text-black hover:underline">{`${cantidad} x ${producto.nombre}`}</p>
                                            </div>

                                            <p className="mt-1 text-sm text-gray-400 capitalize">{producto.estrellas + ' estrellas'}</p>

                                            <p className="mt-1 mb-5 text-sm text-gray-400 capitalize">480gr.</p>

                                            <div className="flex items-center justify-between xs:justify-start">
                                                <button
                                                    onClick={() => {
                                                        decreaseQuantity(producto, 1);
                                                    }}
                                                    className="bg-red-300 rounded-full p-2 m-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                                                    </svg>
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        if (cantidad >= 1) {
                                                            increaseQuantity(producto, 1);
                                                        }
                                                    }}
                                                    className="bg-indigo-300 rounded-full p-2 my-2 mr-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                    </svg>
                                                </button>
                                            </div>

                                            <div className="mt-4 flex justify-between space-x-5">
                                                <span className="inline-flex items-center space-x-2">
                                                    {producto.stock >= cantidad ? (
                                                        <CheckIcon className="w-4 h-4 text-green-500" />
                                                    ) : producto.stock < cantidad ? (
                                                        <XIcon className="w-4 h-4 text-red-500" />
                                                    ) : (
                                                        <ClockIcon className="w-4 h-4 text-gray-300" />
                                                    )}
                                                    <span className="text-sm text-gray-500 font-medium">{'Stock: ' + producto.stock}</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end justify-between w-1/2">
                                            <span className="text-lg text-gray-700 font-semibold">{`S/ ${(producto.precio * cantidad).toFixed(2)}`}</span>

                                            <button onClick={() => removeItem(producto.id)} className="text-sm text-indigo-500 font-semibold hover:underline hover:text-indigo-700">
                                                Eliminar
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <h1 className="text-center text-xl text-indigo-500">¡No tienes productos en el carrito!</h1>
                        )}
                    </ul>
                </div>

                <div className="py-8 pb-12 px-6 sm:pl-10 pr-2 w-full">
                    <p className="flex justify-between items-baseline">
                        <span className="text-base text-gray-700 font-semibold">Subtotal:</span>
                        <span className="text-2xl text-black font-bold">{`S/ ${parseFloat(total).toFixed(2)}`}</span>
                    </p>
                    <p className="mt-2 text-sm text-gray-500">El envío y los impuestos se calcularán al finalizar la compra.</p>
                </div>

                {carrito.length > 0 ? (
                    <div className="px-10 w-full flex flex-col">
                        <Link to="/checkout" className="py-2 w-full rounded bg-indigo-500 text-center text-base text-white hover:bg-indigo-600">
                            Ir a pagar
                        </Link>
                        <p className="mt-3 text-center text-base text-gray-500">
                            o{' '}
                            <Link to="/productos" className="inline-flex items-center text-center text-sm text-indigo-500 hover:text-indigo-600 font-semibold">
                                Continuar Comprando
                                <span className="ml-2" aria-hidden="true">
                                    &rarr;
                                </span>
                            </Link>
                        </p>
                    </div>
                ) : (
                    <Link to="/productos" className="py-2 w-full rounded bg-indigo-500 text-center text-base text-white hover:bg-indigo-600">
                        ¡Ir a comprar!
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Carrito;
