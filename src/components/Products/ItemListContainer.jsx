import ItemList from './ItemList';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase';
import { getDocs, collection } from 'firebase/firestore';
import Loading from '../Utilities/Loading';

const ItemListContainer = () => {
    const [cafes, setCafes] = useState([]);
    const [chocolates, setChocolates] = useState([]);

    const [loading, setLoading] = useState(true);
    const { categoria } = useParams();

    useEffect(() => {
        const coleccionProductos = collection(db, 'productos');

        const pedirDatos = async () => {
            const resultado = await getDocs(coleccionProductos);
            resultado.docs.map((doc) => {
                if (doc.data().categoria === 'cafes') {
                    return setCafes((cafes) => [...cafes, doc.data()]);
                } else {
                    return setChocolates((chocolates) => [...chocolates, doc.data()]);
                }
            });

            setLoading(false);
        };

        pedirDatos();
    }, []);

    return (
        <>
            {categoria ? <h2 className="text-3xl font-bold [color:#4a3933] underline p-8">{categoria === 'cafes' ? 'Bolsas de Café' : 'Barras de Chocolate'}</h2> : <h2 className="text-3xl font-bold [color:#4a3933] underline p-8">Productos</h2>}
            {!loading ? (
                categoria ? (
                    <ItemList data={categoria === 'cafes' ? cafes : chocolates} />
                ) : (
                    <>
                        <ItemList data={cafes} />
                        <ItemList data={chocolates} />
                    </>
                )
            ) : (
                <Loading texto={categoria ? `Cargando ${categoria}` : 'Cargando productos'} />
            )}
        </>
    );
};

export default ItemListContainer;
