import React from "react";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [estado, setEstado] = useState(initial);

    const sumar = () => {
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
        <div>
            <div className="cantidad">
                <button onClick={sumar}>+</button>
                <b>{estado}</b>
                <button onClick={restar}>-</button>
            </div>
            <button
                className="[background-color:#ebecee] [color:#4a3933] rounded-lg font-bold p-1 py-2"
                onClick={() => {
                    onAdd(estado);
                }}>
                Agregar al carrito
            </button>
        </div>
    );
};

export default ItemCount;
