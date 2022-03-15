import { useState } from 'react';

const ItemCount = ({ stock, initial }) => {
    const [estado, setEstado] = useState(initial);

    const sumar = () => {
        console.log(estado);
        if (estado < stock) {
            setEstado(estado + 1);
        }
    };

    const restar = () => {
        if (estado > 1) {
            setEstado(estado - 1);
        }
    };

    return (
        <div className="flex">
            <p className="mr-6">Cantidad:</p>
            <button className="mx-4 px-2 hover:bg-red-500 hover:text-gray-100" onClick={sumar}>
                +
            </button>
            <b>{estado}</b>
            <button className="mx-4 px-2 hover:bg-red-500 hover:text-gray-100" onClick={restar}>
                -
            </button>
        </div>
    );
};

export default ItemCount;
