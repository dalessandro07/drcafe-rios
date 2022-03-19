import { useContext } from 'react';
import { contexto } from '../context/CartContext';
import { CheckIcon, ClockIcon, XIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

const Carrito = () => {
    const { carrito, removeItem, clearCart } = useContext(contexto);

    return (
        <div className="mx-auto mt-6 py-5 w-full sm:px-12">
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
                        {carrito.map(({ producto, cantidad }, index) => (
                            <li key={producto.id} className={`p-4 flex ${index !== 0 && 'border-t border-gray-200'}`}>
                                <div className="flex justify-center items-center flex-shrink-0 aspect-w-5 aspect-h-1 w-1/4 sm:w-1/5">
                                    <img src={`${producto.img}`} alt={producto.id} className="object-cover w-24 h-full rounded-md" />
                                </div>

                                <div className="ml-5 w-full flex flex-col">
                                    <div className="flex justify-between space-x-5">
                                        <p className="text-base text-gray-700 font-semibold hover:text-black hover:underline">{`${cantidad} x ${producto.nombre}`}</p>
                                        <span className="text-lg text-gray-700 font-semibold">{`S/ ${producto.precio}`}</span>
                                    </div>

                                    <p className="mt-1 text-sm text-gray-400 capitalize">{producto.estrellas + ' estrellas'}</p>

                                    <p className="mt-1 mb-5 text-sm text-gray-400 capitalize">{'120gr'}</p>

                                    <div className="mt-auto flex justify-between space-x-5">
                                        <span className="inline-flex items-center space-x-2">
                                            {producto.stock >= cantidad ? <CheckIcon className="w-4 h-4 text-green-500" /> : producto.stock < cantidad ? <XIcon className="w-4 h-4 text-red-500" /> : <ClockIcon className="w-4 h-4 text-gray-300" />}
                                            <span className="text-sm text-gray-500 font-medium">{'Stock: ' + producto.stock}</span>
                                        </span>

                                        <button onClick={() => removeItem(producto.id)} className="text-sm text-indigo-500 font-semibold hover:underline hover:text-indigo-700">
                                            Eliminar
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="py-8 pb-12 pl-10 pr-2 w-full">
                    <p className="flex justify-between items-baseline">
                        <span className="text-base text-gray-700 font-semibold">Subtotal:</span>
                        <span className="text-2xl text-black font-bold">{`S/ ${0}`}</span>
                    </p>
                    <p className="mt-2 text-sm text-gray-500">El envío y los impuestos se calcularán al finalizar la compra.</p>
                </div>

                <div className="px-10 w-full flex flex-col">
                    <Link to="/" className="py-2 w-full rounded bg-indigo-500 text-center text-base text-white hover:bg-indigo-600">
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
            </div>
        </div>
    );
};

export default Carrito;
