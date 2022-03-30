import { useContext } from 'react';
import ItemCount from './ItemCount';
import { contexto } from './../context/CartContext';

const ItemDetail = ({ producto, urlID }) => {
    const { carrito, addItem } = useContext(contexto);

    let stairs = [];

    for (let i = 0; i < producto.estrellas; i++) {
        stairs.push(
            <svg key={i} fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
        );
    }

    const onAdd = (cantidadSeleccionada) => {
        if (cantidadSeleccionada <= producto.stock) {
            addItem(producto, cantidadSeleccionada);
        }
    };

    const agregadosAlCarrito = carrito.find((item) => item.producto.id === producto.id);

    const bgColor = {
        blue: 'bg-blue-200/50',
        red: 'bg-red-200/50',
        orange: 'bg-orange-200/50',
        violet: 'bg-violet-200/50',
    };

    return (
        <section className="text-gray-700 mb-20 body-font overflow-hidden sm:px-20">
            <div className="container px-5 pt-20 mx-auto">
                <div className="lg:justify-start lg:items-center mx-auto flex flex-col flex-wrap lg:shadow-lg">
                    {producto.color ? (
                        <div className={'w-full h-2/5 left-0 z-0 ' + bgColor[producto.color]}>
                            <img alt="ecommerce" className="relative py-2 object-cover object-center rounded-lg md:ml-8 lg:ml-28" src={producto.img} />
                        </div>
                    ) : (
                        <div className={'w-full h-2/5 left-0 z-0 md:flex md:justify-start lg:w-4/5 lg:pl-10'}>
                            <img alt="ecommerce" className="relative md:w-4/5 py-2 object-cover object-center md:pl-10 lg:pl-0 lg:w-3/5 rounded-lg" src={producto.img} />
                        </div>
                    )}

                    <div className="md:pl-10 lg:py-6 mt-6 lg:mt-0 md:w-4/5">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">DR CAFE</h2>
                        <div className="flex flex-col sm:flex-row">
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{producto.nombre}</h1>
                            <b className="w-full flex py-4 sm:justify-end sm:pt-8 sm:px-2 text-indigo-500">
                                {agregadosAlCarrito ? `¡Tienes ${agregadosAlCarrito.cantidad} ${agregadosAlCarrito.cantidad === 1 ? 'unidad' : 'unidades'} de ${agregadosAlCarrito.producto.nombre} en el carrito!` : '¡Empieza a comprar!'}
                            </b>
                        </div>
                        <div className="flex mb-4">
                            <span className="flex items-center my-2">{stairs}</span>
                        </div>
                        <p className="leading-relaxed text-justify">{producto.descripcion}</p>
                        <p className="my-4 inline-block border-b border-b-red-500">Stock disponible: {producto.stock} unidades</p>
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
                                <span className="title-font font-medium my-4 text-2xl text-gray-900">S/{producto.precio}</span>
                                <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ItemDetail;
