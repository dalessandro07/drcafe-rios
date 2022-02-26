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
                onClick={() => {
                    onAdd(estado);
                }}>
                Agregar al carrito
            </button>
        </div>
    );
};

export default ItemCount;
