import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { contexto } from './../context/CartContext';

const ItemDetail = ({ producto, urlID }) => {
    const detalleProd = producto.find((item) => item.id === urlID);
    const [cantidad, setCantidad] = useState(0);
    const navigateTo = useNavigate();

    const { carrito, addItem } = useContext(contexto);

    let stairs = [];

    for (let i = 0; i < detalleProd.estrellas; i++) {
        stairs.push(
            <svg key={i} fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
        );
    }

    const onAdd = (cantidadSeleccionada) => {
        if (cantidadSeleccionada <= detalleProd.stock) {
            setCantidad(cantidadSeleccionada);
            addItem(detalleProd, cantidadSeleccionada);
        }
    };

    const agregadosAlCarrito = carrito.find((item) => item.producto.id === detalleProd.id);

    return (
        <section className="text-gray-700 mb-20 body-font overflow-hidden">
            <div className="container px-5 pt-20 mx-auto">
                <div className="lg:justify-around lg:items-center mx-auto flex flex-wrap">
                    <div className={'w-full h-[300px] absolute left-0 z-0 opacity-50 lg:w-2/5 lg:h-full ' + detalleProd.color}></div>
                    <img alt="ecommerce" className="relative py-2 max-w-[600px] max-h-[300px] object-cover object-center rounded border border-gray-200" src={detalleProd.img} />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">DR CAFE</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{detalleProd.nombre}</h1>
                        <div className="flex mb-4">
                            <span className="flex items-center my-2">{stairs}</span>
                        </div>
                        {detalleProd.descripcion}
                        <p className="my-4 inline-block border-b border-b-red-500">Stock disponible: {detalleProd.stock} unidades</p>
                        <div className="flex mt-6 flex-col pb-2 border-b-2 border-gray-200 mb-5">
                            <div className="flex items-center">
                                <span className="mr-3">
                                    <b>Tamaño:</b>
                                </span>
                                <div className="relative">
                                    <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                                        <option>340gr</option>
                                        <option>680gr</option>
                                    </select>
                                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col mt-4">
                                <span className="title-font font-medium my-4 text-2xl text-gray-900">S/{detalleProd.precio}</span>
                                {cantidad !== 0 ? (
                                    <div className="flex justify-between items-center w-full">
                                        <Link className="font-semibold bg-slate-200 rounded-lg py-2 px-4" to={'/productos'}>
                                            ⬅️ Seguir comprando
                                        </Link>
                                        <button
                                            onClick={() => {
                                                navigateTo('/carrito');
                                            }}
                                            className="flex justify-center items-center rounded-lg ml-auto text-white bg-red-500 border-0 my-4 py-2 px-6 focus:outline-none hover:opacity-80">
                                            Finalizar Compra
                                        </button>
                                    </div>
                                ) : (
                                    <ItemCount stock={detalleProd.stock} initial={1} onAdd={onAdd} />
                                )}
                            </div>
                            <b className="w-full flex justify-start pt-8 px-2 text-indigo-500">
                                {agregadosAlCarrito ? `¡Tienes ${agregadosAlCarrito.cantidad} unidades de ${agregadosAlCarrito.producto.nombre} en el carrito!` : '¡Empieza a comprar!'}
                            </b>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ItemDetail;
