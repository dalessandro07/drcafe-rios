import { contexto } from './../context/CartContext';
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { db } from '../firebase';
import { collection, serverTimestamp, addDoc, getDocs, query, where, updateDoc, doc } from 'firebase/firestore';

const Checkout = () => {
    const { carrito, cantidadTotal, total, removeItem, clearCart } = useContext(contexto);

    const [totalFinal, setTotalFinal] = useState(0);

    useEffect(() => {
        setTotalFinal((parseFloat(total) + calcularIGV(total)).toFixed(2));
    }, [total]);

    const calcularIGV = (monto) => {
        return monto * 0.18;
    };

    const navigateTo = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (carrito.length > 0) {
            const data = Object.fromEntries(new FormData(e.target).entries());
            const ordenCompra = { ...data, items: carrito, total: totalFinal, date: serverTimestamp() };

            const ordersCollection = collection(db, 'orders');
            const productsCollection = collection(db, 'productos');

            const actualizarStock = async (producto, cantidad) => {
                const filtro = query(productsCollection, where('id', '==', producto.id));

                const pedirProductoComprado = await getDocs(filtro);

                const productoEncontrado = pedirProductoComprado.docs[0].data();
                const idProducto = pedirProductoComprado.docs[0].id;

                productoEncontrado.stock = productoEncontrado.stock - cantidad;

                await updateDoc(doc(productsCollection, idProducto), productoEncontrado);
            };

            carrito.forEach(({ producto, cantidad }) => {
                actualizarStock(producto, cantidad);
            });

            const sendOrder = async () => {
                const order = await addDoc(ordersCollection, ordenCompra);
                return order;
            };

            toast.promise(sendOrder, {
                pending: 'Procesando compra...',
                success: {
                    render({ data }) {
                        navigator.clipboard.writeText(data.id);
                        clearCart();
                        setTimeout(() => navigateTo('/'), 2500);
                        return (
                            <>
                                <p>
                                    <strong>¡Gracias por su compra!</strong>
                                </p>
                                <p>
                                    <strong>Su orden ha sido registrada con el número:</strong>
                                </p>
                                <p>
                                    <strong>{data.id}</strong>
                                </p>
                                <p>
                                    <strong>El número de orden se copió al portapapeles.</strong>
                                </p>
                            </>
                        );
                    },
                },
                error: 'Error al procesar la compra. Intente nuevamente.',
            });
        } else {
            toast.error('No hay productos para comprar.');
            navigateTo('/productos');
        }
    };

    return (
        <>
            <div className="mt-20 pb-8 border-b-2 border-indigo-500">
                <h1 className="flex items-center justify-center font-bold text-center text-indigo-500 text-2xl lg:text-3xl px-8">¡Estás a un paso de concretar tu compra!</h1>
            </div>

            <div className="container py-12 w-4/5 mx-auto">
                <div className="flex flex-col w-full px-0 mx-auto md:flex-row md:gap-20 lg:gap-0">
                    <section className="flex flex-col md:w-full lg:w-1/2">
                        <h2 className="mb-4 font-bold md:text-xl text-heading ">Ingresa algunos datos</h2>

                        <form onSubmit={handleSubmit} className="justify-center w-full mx-auto">
                            <div className="">
                                <div className="space-x-0 lg:flex lg:space-x-4">
                                    <div className="w-full z my-3">
                                        <label htmlFor="fullName" className="block mb-3 text-sm font-semibold text-gray-500">
                                            Nombre completo
                                        </label>
                                        <input
                                            minLength="3"
                                            required
                                            name="fullName"
                                            type="text"
                                            placeholder="Nombre y Apellido"
                                            className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-indigo-600"
                                        />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="w-full">
                                        <label htmlFor="email" className="block mb-3 text-sm font-semibold text-gray-500">
                                            Correo Electrónico
                                        </label>
                                        <input required name="email" type="email" placeholder="Email" className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-indigo-600" />
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <div className="w-full">
                                        <label htmlFor="address" className="block mb-3 text-sm font-semibold text-gray-500">
                                            Dirección
                                        </label>
                                        <textarea
                                            required
                                            className="w-full min-h-[90px] px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-indigo-600"
                                            name="address"
                                            cols="20"
                                            rows="4"
                                            minLength="6"
                                            placeholder="Dirección"></textarea>
                                    </div>
                                </div>

                                <div className="space-x-0 lg:flex lg:space-x-4 my-2">
                                    <div className="w-full lg:w-1/2">
                                        <label htmlFor="city" className="block mb-3 text-sm font-semibold text-gray-500">
                                            Ciudad
                                        </label>
                                        <input minLength="3" required name="city" type="text" placeholder="Ciudad" className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-indigo-600" />
                                    </div>
                                </div>

                                <div className="flex items-center my-4">
                                    <label className="flex items-center text-sm group text-heading">
                                        <input name="savePersonalData" type="checkbox" className="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1" />
                                        <span className="ml-2">Guardar estos datos para la próxima vez.</span>
                                    </label>
                                </div>
                                <div className="relative pt-3 xl:pt-6">
                                    <label htmlFor="note" className="block mb-3 text-sm font-semibold text-gray-500">
                                        {' '}
                                        Notas (Opcional)
                                    </label>
                                    <textarea
                                        name="note"
                                        className="flex min-h-[90px] items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-indigo-600"
                                        rows="4"
                                        placeholder="Notas para el delivery"></textarea>
                                </div>

                                <div className="mt-4">
                                    <button className="w-full px-6 py-2 text-blue-200 bg-indigo-600 hover:bg-indigo-900">Pagar - S/ {(parseFloat(total) + calcularIGV(total)).toFixed(2)}</button>
                                </div>
                            </div>
                        </form>
                    </section>

                    <section className="flex flex-col w-full ml-0 lg:ml-12 lg:w-1/2">
                        <div className="pt-12 md:pt-0 2xl:ps-4">
                            <h2 className="text-xl font-bold">Resumen del pedido</h2>

                            <div className="mt-8">
                                <div className="flex flex-col space-y-4">
                                    {carrito.map((producto) => {
                                        const detalle = producto.producto;
                                        return (
                                            <div className="flex space-x-4" key={detalle.id}>
                                                <div className="w-[40%]">
                                                    <img
                                                        onClick={() => {
                                                            navigateTo(`/carrito`);
                                                        }}
                                                        src={detalle.img}
                                                        alt="image1"
                                                        className="w-60 h-28 object-cover"
                                                    />
                                                </div>
                                                <div className="w-[55%] pr-4 flex flex-col justify-around">
                                                    <div className="">
                                                        <h2 className="text-lg font-bold">{detalle.nombre}</h2>
                                                        <p className="text-sm text-slate-500">
                                                            {producto.cantidad} {producto.cantidad > 1 ? 'unidades' : 'unidad'}
                                                        </p>
                                                        <p className="text-sm text-slate-500">S/ {detalle.precio} c/u</p>
                                                    </div>
                                                    <div className="border-t-[1.5px] border-red-300">
                                                        <span className="text-sm text-red-600">Total:</span> S/ {(detalle.precio * producto.cantidad).toFixed(2)}
                                                    </div>
                                                </div>
                                                <div
                                                    onClick={() => {
                                                        removeItem(detalle.id);
                                                    }}
                                                    className="w-[5%] cursor-pointer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="flex py-4 mt-4">
                                <h2 className="text-xl font-bold">Productos: {cantidadTotal}</h2>
                            </div>

                            <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                🔴 Subtotal - <span className="ml-2">S/ {parseFloat(total).toFixed(2)}</span>
                            </div>

                            <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                🟡 IGV - <span className="ml-2">S/ {calcularIGV(total).toFixed(2)}</span>
                            </div>

                            <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                🟢 Total - <span className="ml-2">S/ {totalFinal}</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Checkout;
