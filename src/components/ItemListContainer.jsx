import ItemList from './ItemList';
import React, { useState, useEffect } from 'react';

const dataProductos = [
    { id: 1, nombre: 'Café Etiopía', precio: 49.9, img: 'assets/images/coffee-1.jpg', estrellas: 5 },
    { id: 2, nombre: 'Café Panamá', precio: 45.9, img: 'assets/images/coffee-4.jpg', estrellas: 5 },
    { id: 3, nombre: 'Café Guatemala', precio: 39.9, img: 'assets/images/coffee-3.jpg', estrellas: 4 },
    { id: 4, nombre: 'Café Papúa N.G.', precio: 29.9, img: 'assets/images/coffee-2.jpg', estrellas: 3 },
];

const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataProductos);
        }, 2000);
    });
};

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getData()
            .then((res) => {
                setProductos(res);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <>
            <h2 className="text-3xl font-bold [color:#4a3933] underline p-8">Bolsas de Café</h2>
            <ItemList data={productos} />
        </>
    );
};

export default ItemListContainer;
