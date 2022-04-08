import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [estado, setEstado] = useState(initial);
    const [agregado, setAgregado] = useState(false);

    const sumar = () => {
        if (estado < stock) {
            setEstado(estado + 1);
        } else if (stock === 0) {
            setEstado(0);
        } else {
            setEstado(stock);
        }
    };

    const restar = () => {
        if (estado > 1) {
            setEstado(estado - 1);
        } else if (stock === 0) {
            setEstado(0);
        }
    };

    const actualizarEstado = () => {
        if (stock <= 1) {
            setEstado(stock);
        }
    };

    return (
        <>
            <div className="sm:flex my-4 items-center">
                <div className="flex items-center">
                    <p className="mr-6">
                        <b>Cantidad:</b>
                    </p>
                    <div className="flex items-center">
                        <button className="mx-4 p-2 hover:bg-red-500 hover:text-gray-100" onClick={restar}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                            </svg>
                        </button>
                        <b>{estado}</b>
                        <button className="mx-4 p-2 hover:bg-red-500 hover:text-gray-100" onClick={sumar}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                            </svg>
                        </button>
                    </div>
                </div>
                <button
                    onClick={() => {
                        onAdd(estado);
                        setAgregado(true);
                        setTimeout(() => {
                            setAgregado(false);
                        }, 1000);
                        actualizarEstado();
                    }}
                    className="sm:flex rounded-lg ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:opacity-80 mt-8 sm:mt-0">
                    {agregado ? 'Agregado ✅' : 'Agregar al carrito'}
                </button>
            </div>
            <p className={`${stock === 0 ? 'block' : 'hidden'} text-red-500 bg-red-100 rounded p-2 mt-4`}>{'¡No hay stock!'}</p>
        </>
    );
};

export default ItemCount;
