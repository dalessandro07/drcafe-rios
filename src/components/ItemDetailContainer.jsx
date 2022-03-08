import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';

const dataProductos = {
    id: 1,
    nombre: 'Café Etiopía',
    precio: 49.9,
    img: 'assets/images/coffee-1.jpg',
    estrellas: 5,
    descripcion: [
        <p key={1} className="leading-relaxed">
            Se trata de un café con mucha personalidad, <b>muy aromático, suave y limpio al paladar</b>. Con un perfil de sabor delicioso, notas frutales y especiadas y una excelente acidez. Espectacular para disfrutar preparándolo con cualquier
            método. <br /> <em>100% orgánico y de calidad internacional</em>. Sus granos densos y duros aseguran más azúcares y un mejor sabor al tostarlo.
        </p>,
    ],
};

const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataProductos);
        }, 2000);
    });
};

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({});

    useEffect(() => {
        getData()
            .then((res) => {
                setDetalle(res);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return <ItemDetail producto={detalle} />;
};

export default ItemDetailContainer;
