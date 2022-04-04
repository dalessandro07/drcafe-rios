import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [estado, setEstado] = useState(initial);

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
                        <button className="mx-4 px-2 hover:bg-red-500 hover:text-gray-100" onClick={sumar}>
                            +
                        </button>
                        <b>{estado}</b>
                        <button className="mx-4 px-2 hover:bg-red-500 hover:text-gray-100" onClick={restar}>
                            -
                        </button>
                    </div>
                </div>
                <button
                    onClick={() => {
                        onAdd(estado);
                        actualizarEstado();
                    }}
                    className="sm:flex rounded-lg ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:opacity-80 mt-8 sm:mt-0">
                    Agregar al carrito
                </button>
            </div>
            <p className={`${stock === 0 ? 'block' : 'hidden'} text-red-500 bg-red-100 rounded p-2 mt-4`}>{'¡No hay stock!'}</p>
        </>
    );
};

export default ItemCount;
