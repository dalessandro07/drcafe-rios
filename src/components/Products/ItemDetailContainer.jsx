import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { db } from '../../firebase';
import { query, where, collection, getDocs } from 'firebase/firestore';
import Loading from './../Utilities/Loading';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const coleccionProductos = collection(db, 'productos');

        const pedirDatos = async () => {
            const filterProduct = query(coleccionProductos, where('id', '==', id));

            const resultado = await getDocs(filterProduct);

            resultado.docs.forEach((doc) => {
                setProducto(doc.data());
            });

            setLoading(false);
        };

        pedirDatos();
    }, [id]);

    return loading ? <Loading texto="Cargando detalle" /> : <ItemDetail producto={producto} urlID={id} />;
};

export default ItemDetailContainer;
